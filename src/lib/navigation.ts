import navigationData from "@/data/navigation.json";

export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = navigationData;
