import { getKeys } from "../utility.mjs";

const allEyebrowsTags = [
  `eyebrows`,
  `short eyebrows`,
  `thick eyebrows`,
  `hikimayu`,
] as const satisfies readonly string[];

const allEyesColorTags = [
  `aqua eyes`,
  `black eyes`,
  `blue eyes`,
  `brown eyes`,
  `green eyes`,
  `grey eyes`,
  `orange eyes`,
  `pink eyes`,
  `purple eyes`,
  `red eyes`,
  `white eyes`,
  `yellow eyes`,
] as const satisfies readonly string[];

const allEyesTags = [
  `sparkling eyes`,
  `star-shaped pupils`,
  `+ +`,
  `symbol-shaped pupils`,
  `heterocromia`,
  `tsurime`,
  `tareme`,
  `jitome`,
] as const satisfies readonly string[];

const allEyelashesTags = [
  `eyelashes`,
  `long eyelashes`,
  `thick eyelashes`,
] as const satisfies readonly string[];

export const allDistinguishableFaceTags = {
  "aqua forehead gemstone": `aqua gemstone`,
  "black forehead gemstone": `black gemstone`,
  "blue forehead gemstone": `blue gemstone`,
  "brown forehead gemstone": `brown gemstone`,
  "green forehead gemstone": `green gemstone`,
  "grey forehead gemstone": `grey gemstone`,
  "orange forehead gemstone": `orange gemstone`,
  "pink forehead gemstone": `pink gemstone`,
  "purple forehead gemstone": `purple gemstone`,
  "red forehead gemstone": `red gemstone`,
  "white forehead gemstone": `white gemstone`,
  "yellow forehead gemstone": `yellow gemstone`,
} as const satisfies { [k in string]: string };

export const allFaceTags = [
  ...allEyebrowsTags,
  ...allEyelashesTags,
  ...allEyesColorTags,
  ...allEyesTags,
  ...getKeys(allDistinguishableFaceTags),
  `facial mark`,
  `forehead jewel`,
  `forehead`,
  `mole under eye`,
] as const satisfies readonly string[];
export type FaceTag = (typeof allFaceTags)[number];
