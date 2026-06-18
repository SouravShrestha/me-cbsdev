import type { StaticImageData } from "next/image";
import carouselData from "@/data/carousel.json";
import { getImage } from "@/lib/image-map";

export type CarouselItem = {
  id: number;
  label: string;
  rotate: string;
  emoji: string;
  image: StaticImageData;
};

export const carouselItems: CarouselItem[] = (
  carouselData as (Omit<CarouselItem, "image"> & { image: string })[]
).map((item) => ({
  ...item,
  image: getImage(item.image)!,
}));
