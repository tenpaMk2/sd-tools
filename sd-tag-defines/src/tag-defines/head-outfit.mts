import { getKeys } from "../utility.mjs";

const allHairbandColorTags = [
  `red hairband`,
  `pink hairband`,
  `orange hairband`,
  `brown hairband`,
  `yellow hairband`,
  `green hairband`,
  `aqua hairband`,
  `blue hairband`,
  `purple hairband`,
  `black hairband`,
  `grey hairband`,
  `white hairband`,
] as const satisfies readonly string[];

const allHatColorTags = [
  `aqua hat`,
  `black hat`,
  `blue hat`,
  `brown hat`,
  `green hat`,
  `grey hat`,
  `orange hat`,
  `pink hat`,
  `purple hat`,
  `red hat`,
  `white hat`,
  `yellow hat`,
] as const satisfies readonly string[];

export const allDistinguishableHeadOutfitTags = {
  "aqua hair bow": `aqua bow`,
  "black hair bow": `black bow`,
  "blue hair bow": `blue bow`,
  "brown hair bow": `brown bow`,
  "green hair bow": `green bow`,
  "grey hair bow": `grey bow`,
  "orange hair bow": `orange bow`,
  "pink hair bow": `pink bow`,
  "purple hair bow": `purple bow`,
  "red hair bow": `red bow`,
  "white hair bow": `white bow`,
  "yellow hair bow": `yellow bow`,
  "aqua hair ribbon": `aqua ribbon`,
  "black hair ribbon": `black ribbon`,
  "blue hair ribbon": `blue ribbon`,
  "brown hair ribbon": `brown ribbon`,
  "green hair ribbon": `green ribbon`,
  "grey hair ribbon": `grey ribbon`,
  "orange hair ribbon": `orange ribbon`,
  "pink hair ribbon": `pink ribbon`,
  "purple hair ribbon": `purple ribbon`,
  "red hair ribbon": `red ribbon`,
  "white hair ribbon": `white ribbon`,
  "yellow hair ribbon": `yellow ribbon`,
  "jingle bell hair ornament": `jingle bell`,
  "cable knit hat": `cable knit`,
} as const satisfies { [k in string]: string };

export const allHeadOutfitTags = [
  ...allHairbandColorTags,
  ...allHatColorTags,
  ...getKeys(allDistinguishableHeadOutfitTags),
  `anchor hair ornament`,
  `bat hair ornament`,
  `bone hair ornament`,
  `bow hairband`,
  `bridal veil`,
  `butterfly hair ornament`,
  `cabbie hat`,
  `cat hair ornament`,
  `character hair ornament`,
  `clover hair ornament`,
  `coin hair ornament`,
  `crescent hair ornament`,
  `cross hair ornament`,
  `crown`,
  `cube hair ornament`,
  `d-pad hair ornament`,
  `diadem`,
  `earrings`,
  `fake animal ears`,
  `feather hair ornament`,
  `fish hair ornament`,
  `flower knot`,
  `food-themed hair ornament`,
  `frilled hairband`,
  `frog hair ornament`,
  `fur-trimmed headwear`,
  `gold earrings`,
  `gold hairband`,
  `hair beads`,
  `hair bell`,
  `hair bobbles`,
  `hair bow`,
  `hair flower`,
  `hair ornament`,
  `hair ribbon`,
  `hair scrunchie`,
  `hair stick`,
  `hair tie`,
  `hairband`,
  `hairclip`,
  `hairpin`,
  `hat`,
  `head scarf`,
  `headband`,
  `headdress`,
  `heart hair ornament`,
  `kanzashi`,
  `lace-trimmed hairband`,
  `leaf hair ornament`,
  `lolita hairband`,
  `maid headdress`,
  `monocle hair ornament`,
  `musical note hair ornament`,
  `no headwear`,
  `pirate hat`,
  `pom pom hair ornament`,
  `rabbit ears`,
  `rabbit hair ornament`,
  `santa hat`,
  `shark hair ornament`,
  `skull hair ornament`,
  `snake hair ornament`,
  `snowflake hair ornament`,
  `star hair ornament`,
  `striped hairband`,
  `tassel hair ornament`,
  `tiara`,
  `tress ribbon`,
  `two-tone hairband`,
  `veil`,
  `witch hat`,
  `x hair ornament`,
] as const satisfies readonly string[];
export type HeadOutfitTag = (typeof allHeadOutfitTags)[number];
