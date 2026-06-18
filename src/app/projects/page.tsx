import { Metadata } from "next";
import { ExternalLinkIcon } from "@/components/icons";
import { getProjects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="text-3xl font-semibold text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-10 sm:leading-14">
                Projects created to learn, experiment, and solve problems.
              </h1>
              <p className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-400 leading-7">
                A collection of projects I&apos;ve worked on and shared with the
                community. <br />
                These projects helped me learn, experiment with new ideas, and
                solve everyday problems.
              </p>
            </header>
            <div className="mt-16 sm:mt-20">
              <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
              >
                {projects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </ul>
              <div className="mt-8 flex justify-end">
                <a
                  href="https://github.com/SouravShrestha?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
                >
                  View all projects on Github
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
