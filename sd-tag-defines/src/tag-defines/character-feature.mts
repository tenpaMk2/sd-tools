import { getKeys } from "../utility.mjs";
import { HeadOutfitTags as HeadOutfitTag } from "./head-outfit.mjs";

export const allDistinguishableBodyFeatureTags = {
  "aqua short tail": `aqua tail`,
  "black short tail": `black tail`,
  "blue short tail": `blue tail`,
  "brown short tail": `brown tail`,
  "green short tail": `green tail`,
  "grey short tail": `grey tail`,
  "orange short tail": `orange tail`,
  "pink short tail": `pink tail`,
  "purple short tail": `purple tail`,
  "red short tail": `red tail`,
  "white short tail": `white tail`,
  "yellow short tail": `yellow tail`,
  "aqua long tail": `aqua tail`,
  "black long tail": `black tail`,
  "blue long tail": `blue tail`,
  "brown long tail": `brown tail`,
  "green long tail": `green tail`,
  "grey long tail": `grey tail`,
  "orange long tail": `orange tail`,
  "pink long tail": `pink tail`,
  "purple long tail": `purple tail`,
  "red long tail": `red tail`,
  "white long tail": `white tail`,
  "yellow long tail": `yellow tail`,
} as const satisfies { [k in string]: string };

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

const allHairColorTags = [
  `aqua hair`,
  `black hair`,
  `blonde hair`,
  `blue hair`,
  `brown hair`,
  `dark blue hair`,
  `dark green hair`,
  `green hair`,
  `grey hair`,
  `light blue hair`,
  `light brown hair`,
  `light green hair`,
  `light purple hair`,
  `multicolored hair`,
  `orange hair`,
  `pink hair`,
  `purple hair`,
  `red hair`,
  `streaked hair`,
  `two-tone hair`,
  `white hair`,
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

const allEyebrowsTags = [
  `eyebrows`,
  `short eyebrows`,
  `thick eyebrows`,
  `hikimayu`,
] as const satisfies readonly string[];

const allEyelashesTags = [
  `eyelashes`,
  `long eyelashes`,
  `thick eyelashes`,
] as const satisfies readonly string[];

const allHairLengthTags = [
  `short hair`,
  `medium hair`,
  `long hair`,
  `very long hair`,
  `absurdly long hair`,
] as const satisfies readonly string[];

export const allHeadFeatureTags = [
  ...allEyesColorTags,
  ...allHairColorTags,
  ...allEyesTags,
  ...allEyebrowsTags,
  ...allEyelashesTags,
  ...allHairLengthTags,
  `ahoge`,
  `alternate hairstyle`,
  `animal ear fluff`,
  `animal ears`,
  `antenna hair`,
  `arched bangs`,
  `asymmetrical bangs`,
  `asymmetrical hair`,
  `asymmetrical sidelocks`,
  `bangs pinned back`,
  `blunt bangs`,
  `blunt ends`,
  `bob cut`,
  `bow-shaped hair`,
  `braid`,
  `braided bangs`,
  `braided bun`,
  `braided ponytail`,
  `cat ears`,
  `center-flap bangs`,
  `colored inner hair`,
  `cone hair bun`,
  `crossed bangs`,
  `crown braid`,
  `curly hair`,
  `curtained bangs`,
  `diagonal bangs`,
  `dog ears`,
  `double bun`,
  `doughnut hair bun`,
  `dreadlocks`,
  `drill hair`,
  `drill sidelocks`,
  `dyed bangs`,
  `facial mark`,
  `fake animal ears`,
  `fang`,
  `flipped hair`,
  `flower-shaped hair`,
  `folded ponytail`,
  `forehead`,
  `fox ears`,
  `frentch braid`,
  `front braid`,
  `gradient hair`,
  `hair between eyes`,
  `hair bun`,
  `hair down`,
  `hair flaps`,
  `hair intakes`,
  `hair over eyes`,
  `hair over one eye`,
  `hair over shoulder`,
  `hair pulled back`,
  `hair rings`,
  `hair slicked back`,
  `hair up`,
  `half updo`,
  `heart ahoge`,
  `heart antenna hair`,
  `heart hair bun`,
  `high ponytail`,
  `hime cut`,
  `huge ahoge`,
  `inverted bob`,
  `long bangs`,
  `low ponytail`,
  `low tied sidelocks`,
  `low twin braids`,
  `low twintails`,
  `low-braided long hair`,
  `low-tied long hair`,
  `messy hair`,
  `mizura`,
  `mole under eye`,
  `multi-tied-hair`,
  `multiple braids`,
  `one side up`,
  `parted bangs`,
  `pixie cut`,
  `pointy ears`,
  `pointy hair`,
  `ponytail`,
  `ringlets`,
  `short hair with long locks`,
  `short ponytail`,
  `short twintails`,
  `side braid`,
  `side ponytail`,
  `sidelocks`,
  `single braid`,
  `single hair bun`,
  `single hair intake`,
  `single hair ring`,
  `single sidelock`,
  `split ponytail`,
  `straight hair`,
  `swept bangs`,
  `topknot`,
  `tri braids`,
  `tri tails`,
  `triple bun`,
  `twin braids`,
  `twin drills`,
  `twintails`,
  `two side up`,
  `undercut`,
  `wavy hair`,
  `wide ponytail`,
] as const satisfies readonly string[];
export type HeadFeatureTag = (typeof allHeadFeatureTags)[number];

export const allBreastSizeTags = [
  `flat chest`,
  `small breasts`,
  `medium breasts`,
  `large breasts`,
  `huge breasts`,
] as const satisfies readonly string[];
export type BreastSizeTag = (typeof allBreastSizeTags)[number];

export const allBodyFeatureTags = [
  ...getKeys(allDistinguishableBodyFeatureTags),
  `cat girl`,
  `cat tail`,
  `curvy`,
  `dark skin`,
  `dark-skinned female`,
  `demon tail`,
  `dog girl`,
  `dog tail`,
  `elf`,
  `fox girl`,
  `fox tail`,
  `gyaru`,
  `loli`,
  `mature female`,
  `stomach tattoo`,
  `tail`,
  `tan`,
  `thick thighs`,
  `toned`,
  `wide hips`,
] as const satisfies readonly string[];
export type BodyFeatureTag = (typeof allBodyFeatureTags)[number];

export type CharacterFeatureTag =
  | HeadFeatureTag
  | BodyFeatureTag
  | HeadOutfitTag;

export const BreastSizeOrder = {
  "flat chest": 1,
  "small breasts": 2,
  "medium breasts": 3,
  "large breasts": 4,
  "huge breasts": 5,
} as const satisfies { [K in BreastSizeTag]: number };
