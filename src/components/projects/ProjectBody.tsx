import { CheckIcon, ExternalLinkIcon, GitHubIcon } from "@/components/icons";
import type { Project } from "@/lib/projects";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
      {children}
    </h2>
  );
}

export default function ProjectBody({ project }: { project: Project }) {
  return (
    <div className="mt-12 space-y-12 border-t border-zinc-100 pt-12 dark:border-zinc-700/40">
      {project.about && project.about.length > 0 && (
        <section>
          <SectionTitle>About</SectionTitle>
          <div className="mt-4 space-y-4 text-sm text-zinc-600 dark:text-zinc-400 leading-7">
            {project.about.map((paragraph, index) => (
              <p
                key={index}
                className="text-base text-zinc-600 dark:text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      )}

      {project.features && project.features.length > 0 && (
        <section>
          <SectionTitle>Features</SectionTitle>
          <ul role="list" className="mt-4 space-y-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-accent" />
                <span className="text-base text-zinc-600 dark:text-zinc-400">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.stack && project.stack.length > 0 && (
        <section>
          <SectionTitle>Stack</SectionTitle>
          <ul role="list" className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <li
                key={index}
                className="flex items-center gap-1.5 rounded-full bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700 ring-1 ring-inset ring-zinc-900/5 dark:bg-zinc-800/50 dark:text-zinc-300 dark:ring-white/10"
              >
                <tech.icon className="h-4 w-4" />
                {tech.name}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.platform && (
        <section>
          <SectionTitle>Info</SectionTitle>
          <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
              <dt className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                Platform
              </dt>
              <dd className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                {project.platform}
              </dd>
            </div>
          </dl>
        </section>
      )}

      <section className="flex flex-wrap gap-4">
        {project.externalLink && (
          <a
            href={project.externalLink.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 justify-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            Visit the site
          </a>
        )}
        {project.github && (
          <a
            href={project.github.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 justify-center rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
          >
            <GitHubIcon className="h-4 w-4 fill-current" />
            View the code
          </a>
        )}
      </section>
    </div>
  );
}
