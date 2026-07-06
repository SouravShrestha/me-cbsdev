import { Metadata } from "next";
import { ExternalLinkIcon } from "@/components/icons";
import { getModules } from "@/lib/modules";
import ModuleCard from "@/components/modules/ModuleCard";

export const metadata: Metadata = {
  title: "Modules",
};

export default async function ModulesPage() {
  const modules = await getModules();

  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-3xl font-semibold text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-10 sm:leading-14">
                Open-source modules published on npm.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                A collection of npm modules I&apos;ve built and published for
                the community. Each one solves a specific problem and is
                designed to be easy to drop into any project.
              </p>
            </header>
            <div className="mt-16 sm:mt-20">
              <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
              >
                {modules.map((mod) => (
                  <ModuleCard key={mod.name} pkg={mod} />
                ))}
              </ul>
              <div className="mt-8 flex justify-end">
                <a
                  href="https://www.npmjs.com/settings/cbsdev/packages"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
                >
                  View all modules on npm
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
