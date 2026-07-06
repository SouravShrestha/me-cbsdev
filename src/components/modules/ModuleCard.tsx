import Link from "next/link";
import { GitHubIcon } from "@/components/icons";
import type { Module } from "@/lib/modules";

export default function ModuleCard({ pkg }: { pkg: Module }) {
  return (
    <li className="group relative flex flex-col items-start">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-mono font-medium ring-1 ring-inset bg-accent/10 text-accent ring-accent/20">
          v{pkg.version}
        </span>
        {pkg.isCli && (
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            CLI
          </span>
        )}
        <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500">
          {pkg.license}
        </span>
      </div>

      <h2 className="mt-3 text-base font-semibold text-zinc-800 dark:text-zinc-100 font-mono">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
        <Link target="_self" href={pkg.internalLink}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{pkg.name}</span>
        </Link>
      </h2>

      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-6 line-clamp-2">
        {pkg.description}
      </p>

      <div className="relative z-10 mt-4 flex flex-wrap gap-3 text-xs font-medium">
        {pkg.github && (
          <a
            href={pkg.github.href}
            target="_blank"
            rel="noreferrer"
            className="relative z-30 flex items-center gap-1.5 text-zinc-500 transition hover:text-accent-hover dark:text-zinc-400"
          >
            <GitHubIcon className="h-3.5 w-3.5 flex-none fill-current" />
            <span className="truncate">{pkg.github.label}</span>
          </a>
        )}
      </div>
    </li>
  );
}
