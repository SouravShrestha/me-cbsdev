import type { StaticImageData } from "next/image";
import workData from "@/data/work.json";
import { getImage } from "@/lib/image-map";

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

export const works: Work[] = (
  workData as (Omit<Work, "logo"> & { logo: string })[]
).map((work) => ({
  ...work,
  logo: getImage(work.logo)!,
}));
