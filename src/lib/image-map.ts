import type { StaticImageData } from "next/image";
import australia from "@/images/australia.webp";
import dotnet from "@/images/dotnet.png";
import e4 from "@/images/e4.webp";
import india from "@/images/india.webp";
import krivapictures from "@/images/krivapictures.png";
import nepal from "@/images/nepal.webp";
import qnaguru from "@/images/qnaguru.png";
import thailand from "@/images/thailand.webp";
import uipath from "@/images/uipath.webp";
import wetrack from "@/images/wetrack.png";

/**
 * Maps the string `image`/`logo` keys used in `src/data/*.json` to their
 * imported assets. JSON can't reference statically imported images (needed by
 * `next/image` for blur placeholders and sizing), so data files reference them
 * by key and this map resolves them.
 */
export const imageMap: Record<string, StaticImageData> = {
  australia,
  dotnet,
  e4,
  india,
  krivapictures,
  nepal,
  qnaguru,
  thailand,
  uipath,
  wetrack,
};

export type ImageKey = keyof typeof imageMap;

/** Resolve an image key from a data file to its imported asset. */
export function getImage(key: string): StaticImageData | undefined {
  return imageMap[key];
}
