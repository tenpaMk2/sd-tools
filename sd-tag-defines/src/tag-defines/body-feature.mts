import { getKeys } from "../utility.mjs";

export const allDistinguishableBodyFeatureTags = {
  "aqua short tail -> aqua tail": `aqua tail`,
  "black short tail -> black tail": `black tail`,
  "blue short tail -> blue tail": `blue tail`,
  "brown short tail -> brown tail": `brown tail`,
  "green short tail -> green tail": `green tail`,
  "grey short tail -> grey tail": `grey tail`,
  "orange short tail -> orange tail": `orange tail`,
  "pink short tail -> pink tail": `pink tail`,
  "purple short tail -> purple tail": `purple tail`,
  "red short tail -> red tail": `red tail`,
  "white short tail -> white tail": `white tail`,
  "yellow short tail -> yellow tail": `yellow tail`,
  "aqua long tail -> aqua tail": `aqua tail`,
  "black long tail -> black tail": `black tail`,
  "blue long tail -> blue tail": `blue tail`,
  "brown long tail -> brown tail": `brown tail`,
  "green long tail -> green tail": `green tail`,
  "grey long tail -> grey tail": `grey tail`,
  "orange long tail -> orange tail": `orange tail`,
  "pink long tail -> pink tail": `pink tail`,
  "purple long tail -> purple tail": `purple tail`,
  "red long tail -> red tail": `red tail`,
  "white long tail -> white tail": `white tail`,
  "yellow long tail -> yellow tail": `yellow tail`,
} as const satisfies Record<string, string>;

export const allBodyFeatureTags = [
  ...getKeys(allDistinguishableBodyFeatureTags),
  `animal ear fluff`,
  `animal ears`,
  `cat ears`,
  `cat girl`,
  `cat tail`,
  `curvy`,
  `dark skin`,
  `dark-skinned female`,
  `demon tail`,
  `dog ears`,
  `dog girl`,
  `dog tail`,
  `elf`,
  `fox ears`,
  `fox girl`,
  `fox tail`,
  `gyaru`,
  `halo`,
  `horns`,
  `loli`,
  `mature female`,
  `pointy ears`,
  `rabbit ears`,
  `rabbit girl`,
  `rabbit tail`,
  `tail`,
  `tan`,
  `thick thighs`,
  `toned`,
  `wide hips`,
] as const satisfies readonly string[];
export type BodyFeatureTag = (typeof allBodyFeatureTags)[number];
