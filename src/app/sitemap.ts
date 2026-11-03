import { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";
import { getModules } from "@/lib/modules";
import { SITE_URL as BASE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, modules] = await Promise.all([getProjects(), getModules()]);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/articles`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/modules`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const moduleRoutes: MetadataRoute.Sitemap = modules.map((mod) => ({
    url: `${BASE_URL}/modules/${mod.slug}`,
    lastModified: mod.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...moduleRoutes];
}
