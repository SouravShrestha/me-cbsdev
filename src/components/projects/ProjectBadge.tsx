import type { Project } from "@/lib/projects";

export default function ProjectBadge({
  badge,
  className = "",
}: {
  badge: Project["badge"];
  className?: string;
}) {
  const colorClasses =
    badge.type === "premium"
      ? "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-300/20"
      : "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-300/20";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1.5 text-xs font-medium ring-1 ring-inset ${colorClasses} ${className}`}
    >
      {badge.label}
    </span>
  );
}
