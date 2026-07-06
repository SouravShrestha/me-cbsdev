import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";
import type { Module } from "@/lib/modules";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
      {children}
    </h2>
  );
}

export default function ModuleBody({ pkg }: { pkg: Module }) {
  return (
    <div className="mt-12 space-y-10 border-t border-zinc-100 pt-12 dark:border-zinc-700/40">

      <section>
        <SectionTitle>Installation</SectionTitle>
        <div className="mt-4 rounded-lg bg-zinc-900 dark:bg-zinc-950 p-4 font-mono text-sm">
          <div className="flex items-center gap-3">
            <span className="text-zinc-500 select-none">$</span>
            <span className="text-emerald-400">{pkg.installCommand}</span>
          </div>
          {pkg.isCli && (
            <div className="mt-2 flex items-center gap-3">
              <span className="text-zinc-500 select-none">$</span>
              <span className="text-zinc-300">
                npm install -g{" "}
                <span className="text-sky-400">{pkg.name}</span>
              </span>
            </div>
          )}
        </div>
        {pkg.isCli && (
          <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
            Use <code className="font-mono text-zinc-700 dark:text-zinc-300">npx</code> to run without installing, or install globally with <code className="font-mono text-zinc-700 dark:text-zinc-300">npm install -g</code>.
          </p>
        )}
      </section>

      {pkg.keywords && pkg.keywords.length > 0 && (
        <section>
          <SectionTitle>Keywords</SectionTitle>
          <ul role="list" className="mt-4 flex flex-wrap gap-2">
            {pkg.keywords.map((kw, index) => (
              <li
                key={index}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {kw}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <SectionTitle>Info</SectionTitle>
        <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
            <dt className="text-xs font-medium text-zinc-400 dark:text-zinc-500">Version</dt>
            <dd className="mt-1 text-sm font-semibold font-mono text-zinc-800 dark:text-zinc-100">
              {pkg.version}
            </dd>
          </div>
          <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
            <dt className="text-xs font-medium text-zinc-400 dark:text-zinc-500">License</dt>
            <dd className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
              {pkg.license}
            </dd>
          </div>
          <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
            <dt className="text-xs font-medium text-zinc-400 dark:text-zinc-500">Type</dt>
            <dd className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
              {pkg.isCli ? "CLI Tool" : "Library"}
            </dd>
          </div>
        </dl>
      </section>

      <section className="flex flex-wrap gap-4">
        <a
          href={pkg.npm.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 justify-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
        >
          <ExternalLinkIcon className="h-4 w-4" />
          View on npm
        </a>
        {pkg.github && (
          <a
            href={pkg.github.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 justify-center rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            <GitHubIcon className="h-4 w-4 fill-current" />
            View the code
          </a>
        )}
      </section>
    </div>
  );
}
