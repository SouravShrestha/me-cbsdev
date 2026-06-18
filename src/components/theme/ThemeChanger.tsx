"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { applyThemeColor } from "@/lib/theme-color";

type Mode = "light" | "dark";

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<Mode>("dark");

  // Sync UI state with whatever ThemeScript already applied to <html>.
  useEffect(() => {
    setMode(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
    setMounted(true);
  }, []);

  function toggle() {
    const next: Mode = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme-mode", next);

    // Recreate the theme-color meta so iOS Safari repaints the status/nav bar.
    applyThemeColor(next);
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="group flex size-9 items-center justify-center rounded-full bg-surface/90 ring-1 ring-ring backdrop-blur transition hover:ring-gray-900/60 dark:hover:ring-yellow-500/40 cursor-pointer"
    >
      {mounted && mode === "dark" ? (
        <SunIcon className="size-5 fill-faint transition group-hover:fill-yellow-500" />
      ) : (
        <MoonIcon className="size-5 fill-faint transition group-hover:fill-gray-900" />
      )}
    </button>
  );
}
