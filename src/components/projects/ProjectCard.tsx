import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";
import type { Project } from "@/lib/projects";
import ProjectBadge from "./ProjectBadge";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group relative flex flex-col items-start">
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={project.logo}
            alt={`${project.name} logo`}
            sizes="4rem"
            priority
            className="h-6 w-6 object-cover"
          />
        </div>
        <ProjectBadge badge={project.badge} className="relative z-10" />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
        <Link target="_self" href={project.internalLink}>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{project.name}</span>
        </Link>
      </h2>
      <p className="relative z-10 mt-2 space-y-4 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
        {project.description}
      </p>
      <div className="relative z-10 mt-6 flex flex-1 flex-col justify-end gap-2 text-sm font-medium">
        {project.externalLink && (
          <a
            href={project.externalLink.href}
            target="_blank"
            rel="noreferrer"
            className="relative z-30 flex items-center text-zinc-500 transition hover:text-accent-hover dark:text-zinc-200"
          >
            <ExternalLinkIcon className="h-4 w-4 flex-none" />
            <span className="ml-2 truncate">{project.externalLink.label}</span>
          </a>
        )}
        {project.github && (
          <a
            href={project.github.href}
            target="_blank"
            rel="noreferrer"
            className="relative z-30 flex items-center gap-2 text-zinc-500 transition hover:text-accent-hover dark:text-zinc-200"
          >
            <GitHubIcon className="h-4 w-4 flex-none fill-current" />
            <span className="truncate">{project.github.label}</span>
          </a>
        )}
      </div>
    </li>
  );
}
