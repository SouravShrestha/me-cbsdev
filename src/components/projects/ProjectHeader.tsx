import Image from "next/image";
import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";
import type { Project } from "@/lib/projects";
import ProjectBadge from "./ProjectBadge";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <header>
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            alt={`${project.name} logo`}
            priority
            className="h-7 w-7 object-contain"
            src={project.logo}
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-zinc-800 sm:text-4xl dark:text-zinc-100 leading-10 sm:leading-14">
            {project.name}
          </h1>
          <ProjectBadge badge={project.badge} className="mt-2" />
        </div>
      </div>
      <p className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400 leading-7">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
        {project.externalLink && (
          <a
            href={project.externalLink.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-500 transition hover:text-accent-hover dark:text-zinc-300"
          >
            <ExternalLinkIcon className="h-4 w-4 flex-none" />
            <span>{project.externalLink.label}</span>
          </a>
        )}
        {project.github && (
          <a
            href={project.github.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-zinc-500 transition hover:text-accent-hover dark:text-zinc-300"
          >
            <GitHubIcon className="h-4 w-4 flex-none fill-current" />
            <span>{project.github.label}</span>
          </a>
        )}
      </div>
    </header>
  );
}
