import type React from "react";
import aboutData from "@/data/about.json";
import skillsData from "@/data/skills.json";
import certificationsData from "@/data/certifications.json";
import socialLinksData from "@/data/social-links.json";
import { getIcon } from "@/lib/icon-map";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export const about = aboutData;

export type SkillGroup = {
  category: string;
  items: { name: string; icon: IconComponent }[];
};

export const skills: SkillGroup[] = skillsData.map((group) => ({
  category: group.category,
  items: group.items.map((item) => ({
    name: item.name,
    icon: getIcon(item.icon)!,
  })),
}));

export type Certification = {
  title: string;
  issuer: string;
  details: string;
  url?: string;
  icon: IconComponent;
};

export const certifications: Certification[] = (
  certificationsData as {
    title: string;
    issuer: string;
    details: string;
    url?: string;
    icon: string;
  }[]
).map((cert) => ({
  ...cert,
  icon: getIcon(cert.icon)!,
}));

export type SocialLink = {
  name: string;
  url: string;
  icon: IconComponent;
};

export const socialLinks: SocialLink[] = socialLinksData.map((link) => ({
  name: link.name,
  url: link.url,
  icon: getIcon(link.icon)!,
}));
