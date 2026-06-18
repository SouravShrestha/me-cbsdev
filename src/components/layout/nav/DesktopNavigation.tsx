"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navItems } from "@/lib/navigation";

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive ? "text-accent" : "hover:text-accent-hover",
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-accent-/0 via-accent/40 to-accent/0 dark:from-accent/0 dark:via-accent/40 dark:to-accent/0" />
        )}
      </Link>
    </li>
  );
}

export default function DesktopNavigation(
  props: React.ComponentPropsWithoutRef<"nav">,
) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href}>
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
