import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";
import type { Module } from "@/lib/modules";

export default function ModuleHeader({ pkg }: { pkg: Module }) {
  const published = new Date(pkg.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header>
      <div className="flex-col items-start gap-3 flex-wrap">
        <h1 className="text-3xl font-semibold font-mono text-zinc-800 sm:text-4xl dark:text-zinc-100 leading-tight">
          {pkg.name}
        </h1>
        <div className="flex items-center gap-2 mt-1.5 flex-wrap self-center">
          <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-mono font-medium ring-1 ring-inset bg-accent/10 text-accent ring-accent/20">
            v{pkg.version}
          </span>
          {pkg.isCli && (
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              CLI
            </span>
          )}
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500">
            {pkg.license}
          </span>
        </div>
      </div>

      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 leading-7">
        {pkg.description}
      </p>

      <div className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
        Published {published}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
        <a
          href={pkg.npm.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-zinc-500 transition hover:text-accent-hover dark:text-zinc-300"
        >
          <ExternalLinkIcon className="h-4 w-4 flex-none" />
          <span>{pkg.npm.label}</span>
        </a>
        {pkg.github && (
          <a
            href={pkg.github.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-zinc-500 transition hover:text-accent-hover dark:text-zinc-300"
          >
            <GitHubIcon className="h-4 w-4 flex-none fill-current" />
            <span>{pkg.github.label}</span>
          </a>
        )}
      </div>
    </header>
  );
}
