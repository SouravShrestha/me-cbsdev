import { unstable_cache } from "next/cache";

const NPM_MAINTAINER = "cbsdev";

export type Module = {
  slug: string;
  name: string;
  version: string;
  description: string;
  keywords: string[];
  license: string;
  isCli: boolean;
  installCommand: string;
  internalLink: string;
  npm: { href: string; label: string };
  github?: { href: string; label: string };
  publishedAt: string;
};

type NpmSearchObject = {
  package: {
    name: string;
    version: string;
    description: string;
    keywords?: string[];
    license?: string;
    links: {
      npm: string;
      repository?: string;
    };
    date: string;
  };
};

type NpmPackageMeta = {
  bin?: Record<string, string>;
  license?: string;
};

async function fetchModules(): Promise<Module[]> {
  const searchRes = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=maintainer:${NPM_MAINTAINER}&size=20`,
  );

  if (!searchRes.ok) return [];

  const { objects }: { objects: NpmSearchObject[] } = await searchRes.json();

  const modules = await Promise.all(
    objects.map(async ({ package: pkg }) => {
      // Fetch individual package manifest for the `bin` field (determines CLI vs library).
      const metaRes = await fetch(
        `https://registry.npmjs.org/${pkg.name}/latest`,
      );
      const meta: NpmPackageMeta = metaRes.ok ? await metaRes.json() : {};

      const isCli = !!meta.bin && Object.keys(meta.bin).length > 0;
      const slug = pkg.name.replace(/[@/]/g, "").replace(/[^a-z0-9-]/g, "-");
      const repoUrl = pkg.links.repository
        ?.replace("git+", "")
        .replace(/\.git$/, "");
      const repoLabel = repoUrl?.replace("https://github.com/", "");

      return {
        slug,
        name: pkg.name,
        version: pkg.version,
        description: pkg.description,
        keywords: pkg.keywords ?? [],
        license: meta.license ?? pkg.license ?? "MIT",
        isCli,
        installCommand: isCli ? `npx ${pkg.name}` : `npm install ${pkg.name}`,
        internalLink: `/modules/${slug}`,
        npm: {
          href: pkg.links.npm,
          label: `npmjs.com/package/${pkg.name}`,
        },
        github:
          repoUrl && repoLabel
            ? { href: repoUrl, label: repoLabel }
            : undefined,
        publishedAt: pkg.date,
      } satisfies Module;
    }),
  );

  return modules;
}

/**
 * Fetches the authenticated user's published modules from the npm registry.
 * Results are cached for 1 hour — npm is only called once per cache window
 * regardless of page traffic, so rate limits are not a concern.
 */
export const getModules = unstable_cache(fetchModules, ["npm-packages"], {
  revalidate: 3600,
  tags: ["npm-packages"],
});
