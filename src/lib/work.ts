import type { StaticImageData } from "next/image";
import workData from "@/data/work.json";
import { getImage } from "@/lib/image-map";
import { loadContent } from "@/lib/content";

export type Work = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  dateTimeStart: string;
  dateTimeEnd: string;
  logo: StaticImageData;
  link: string;
  width: number;
  height: number;
};

type RawWork = Omit<Work, "logo"> & { logo: string };

export async function getWorks(): Promise<Work[]> {
  const data = await loadContent("work", workData as RawWork[]);
  return data.map((work) => ({
    ...work,
    logo: getImage(work.logo)!,
  }));
}
