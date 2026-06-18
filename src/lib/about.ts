import type React from "react";
import aboutData from "@/data/about.json";
import skillsData from "@/data/skills.json";
import certificationsData from "@/data/certifications.json";
import socialLinksData from "@/data/social-links.json";
import { getIcon } from "@/lib/icon-map";
import { loadContent } from "@/lib/content";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export async function getAbout(): Promise<typeof aboutData> {
  return loadContent("about", aboutData);
}

export type SkillGroup = {
  category: string;
  items: { name: string; icon: IconComponent }[];
};

export async function getSkills(): Promise<SkillGroup[]> {
  const data = await loadContent("skills", skillsData);
  return data.map((group) => ({
    category: group.category,
    items: group.items.map((item) => ({
      name: item.name,
      icon: getIcon(item.icon)!,
    })),
  }));
}

export type Certification = {
  title: string;
  issuer: string;
  details: string;
  url?: string;
  icon: IconComponent;
};

type RawCertification = Omit<Certification, "icon"> & { icon: string };

export async function getCertifications(): Promise<Certification[]> {
  const data = await loadContent(
    "certifications",
    certificationsData as RawCertification[],
  );
  return data.map((cert) => ({
    ...cert,
    icon: getIcon(cert.icon)!,
  }));
}

export type SocialLink = {
  name: string;
  url: string;
  icon: IconComponent;
};

export async function getSocialLinks(): Promise<SocialLink[]> {
  const data = await loadContent("social-links", socialLinksData);
  return data.map((link) => ({
    name: link.name,
    url: link.url,
    icon: getIcon(link.icon)!,
  }));
}
