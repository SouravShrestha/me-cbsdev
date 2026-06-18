import Link from "next/link";
import { CoffeeIcon } from "@/components/icons";
import { navItems } from "@/lib/navigation";
import packageInfo from "@/../package.json";

export default function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        className="transition hover:text-accent"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col items-center gap-2 sm:items-end">
                    <a
                      href="https://buymeachai.ezee.li/cbsdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-zinc-800 transition hover:text-accent dark:text-zinc-200"
                    >
                      <CoffeeIcon className="h-4 w-auto" />
                      buy me a coffee
                    </a>
                    <div className="text-xs text-zinc-400 dark:text-zinc-500">
                      v {packageInfo.version}
                    </div>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                      © {new Date().getFullYear()} Sourav Shrestha. All rights
                      reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
