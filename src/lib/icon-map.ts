import type React from "react";
import {
  ActiveDirectoryIcon,
  AgileIcon,
  AspNetCoreIcon,
  AzureDevOpsIcon,
  ChessIcon,
  ClaudeIcon,
  CloudflarePagesIcon,
  CloudinaryIcon,
  CredlyIcon,
  CSharpIcon,
  DockerIcon,
  DotNetIcon,
  ElasticsearchIcon,
  EntityFrameworkIcon,
  GitHubIcon,
  GitIcon,
  GithubActionsIcon,
  GithubCopilotIcon,
  InfosysIcon,
  InstagramIcon,
  JsonIcon,
  KubernetesIcon,
  LinkedInIcon,
  NextjsIcon,
  NodejsIcon,
  OctopusDeployIcon,
  PowerShellIcon,
  PythonIcon,
  ServiceNowIcon,
  SqliteIcon,
  SqlServerIcon,
  TailwindCSSIcon,
  TeamCityIcon,
  TypescriptIcon,
  UiPathIcon,
  VisualStudioIcon,
} from "@/components/icons";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

/**
 * Maps the string `icon` keys used in `src/data/*.json` to their icon
 * components. JSON can't hold React components, so data files reference icons
 * by name and this map resolves them. Keys match the icon component names so
 * they're easy to discover in `src/components/icons`.
 */
export const iconMap: Record<string, IconComponent> = {
  ActiveDirectoryIcon,
  AgileIcon,
  AspNetCoreIcon,
  AzureDevOpsIcon,
  ChessIcon,
  ClaudeIcon,
  CloudflarePagesIcon,
  CloudinaryIcon,
  CredlyIcon,
  CSharpIcon,
  DockerIcon,
  DotNetIcon,
  ElasticsearchIcon,
  EntityFrameworkIcon,
  GitHubIcon,
  GitIcon,
  GithubActionsIcon,
  GithubCopilotIcon,
  InfosysIcon,
  InstagramIcon,
  JsonIcon,
  KubernetesIcon,
  LinkedInIcon,
  NextjsIcon,
  NodejsIcon,
  OctopusDeployIcon,
  PowerShellIcon,
  PythonIcon,
  ServiceNowIcon,
  SqliteIcon,
  SqlServerIcon,
  TailwindCSSIcon,
  TeamCityIcon,
  TypescriptIcon,
  UiPathIcon,
  VisualStudioIcon,
};

export type IconName = keyof typeof iconMap;

/** Resolve an icon name from a data file to its component. */
export function getIcon(name: string): IconComponent | undefined {
  return iconMap[name];
}
