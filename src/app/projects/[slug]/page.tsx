import { getProjects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BackToProjects from "@/components/projects/BackToProjects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectBody from "@/components/projects/ProjectBody";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Projects`,
    description: project.description,
    alternates: {
      canonical: `https://cbsdev.me/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | Projects - Sourav Shrestha`,
      description: project.description,
      url: `https://cbsdev.me/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="xl:relative">
              <div className="mx-auto max-w-2xl">
                <BackToProjects />
                <ProjectHeader project={project} />
                <ProjectBody project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
