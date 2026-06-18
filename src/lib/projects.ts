import { StaticImageData } from "next/image";
import React from "react";
import projectsData from "@/data/projects.json";
import { getIcon } from "@/lib/icon-map";
import { getImage } from "@/lib/image-map";

export type Project = {
  slug: string;
  name: string;
  description: string;
  internalLink: string;
  externalLink?: { href: string; label: string };
  github?: { href: string; label: string };
  badge: { label: string; type: "opensource" | "premium" };
  logo: StaticImageData;
  about: string[];
  features: string[];
  stack: { name: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[];
  platform: string;
};

// Shape of a single project in `src/data/projects.json`, where `logo` and
// stack `icon` are string keys resolved via the image and icon maps.
type RawProject = Omit<Project, "logo" | "stack"> & {
  logo: string;
  stack: { name: string; icon: string }[];
};

export const projects: Project[] = (projectsData as RawProject[]).map(
  (project) => ({
    ...project,
    logo: getImage(project.logo)!,
    stack: project.stack.map((tech) => ({
      name: tech.name,
      icon: getIcon(tech.icon)!,
    })),
  }),
);
