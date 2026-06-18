import type React from "react";
import homeData from "@/data/home.json";
import { getIcon } from "@/lib/icon-map";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export type HeroSocialLink = {
  name: string;
  url: string;
  icon: IconComponent;
  ariaLabel: string;
};

export const heroSocialLinks: HeroSocialLink[] = homeData.socialLinks.map(
  (link) => ({
    name: link.name,
    url: link.url,
    icon: getIcon(link.icon)!,
    ariaLabel: link.ariaLabel,
  }),
);
