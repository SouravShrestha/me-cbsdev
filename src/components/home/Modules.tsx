import Link from "next/link";
import { ExternalLinkIcon } from "@/components/icons";
import { getModules } from "@/lib/modules";

export default async function Modules() {
  const modules = await getModules();

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-400/10 px-1.5 py-0.5 rounded">
          npm
        </span>
        <span>Modules</span>
      </h2>
      <ol className="mt-6 space-y-5">
        {modules.map((mod, index) => (
          <li key={index}>
            <Link href={mod.internalLink} className="group flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium font-mono text-zinc-900 group-hover:text-accent dark:text-zinc-100 dark:group-hover:text-accent transition-colors">
                  {mod.name}
                </span>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  v{mod.version}
                </span>
              </div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-5">
                {mod.description}
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <Link
        href="/modules"
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
      >
        View all modules
        <ExternalLinkIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
