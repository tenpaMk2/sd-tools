import type { HeadOutfitTag } from "../index.mjs";
import type { Visibility } from "../visibility.mjs";

const preset = {
  hair: {
    frontHead: true,
    sideHead: true,
    backHead: true,
    frontBreast: false,
    sideBreast: false,
    backBreast: false,
    frontMidriff: false,
    sideMidriff: false,
    backMidriff: false,
    frontHipAndThigh: false,
    sideHipAndThigh: false,
    backHipAndThigh: false,
    foot: false,
    wristAndHand: false,
    aroundBody: false,
  },
} as const satisfies Record<string, Visibility>;

const allDistinguishableHeadOutfitVisibilities = {
  "aqua hair bow -> aqua bow": preset.hair,
  "black hair bow -> black bow": preset.hair,
  "blue hair bow -> blue bow": preset.hair,
  "brown hair bow -> brown bow": preset.hair,
  "green hair bow -> green bow": preset.hair,
  "grey hair bow -> grey bow": preset.hair,
  "orange hair bow -> orange bow": preset.hair,
  "pink hair bow -> pink bow": preset.hair,
  "purple hair bow -> purple bow": preset.hair,
  "red hair bow -> red bow": preset.hair,
  "white hair bow -> white bow": preset.hair,
  "yellow hair bow -> yellow bow": preset.hair,
  "aqua hair ribbon -> aqua ribbon": preset.hair,
  "black hair ribbon -> black ribbon": preset.hair,
  "blue hair ribbon -> blue ribbon": preset.hair,
  "brown hair ribbon -> brown ribbon": preset.hair,
  "green hair ribbon -> green ribbon": preset.hair,
  "grey hair ribbon -> grey ribbon": preset.hair,
  "orange hair ribbon -> orange ribbon": preset.hair,
  "pink hair ribbon -> pink ribbon": preset.hair,
  "purple hair ribbon -> purple ribbon": preset.hair,
  "red hair ribbon -> red ribbon": preset.hair,
  "white hair ribbon -> white ribbon": preset.hair,
  "yellow hair ribbon -> yellow ribbon": preset.hair,
  "jingle bell hair ornament -> jingle bell": preset.hair,
  "cable knit hat -> cable knit": preset.hair,
} as const satisfies Partial<Record<HeadOutfitTag, Visibility>>;

const allHairbandColorVisibilities = {
  "red hairband": preset.hair,
  "pink hairband": preset.hair,
  "orange hairband": preset.hair,
  "brown hairband": preset.hair,
  "yellow hairband": preset.hair,
  "green hairband": preset.hair,
  "aqua hairband": preset.hair,
  "blue hairband": preset.hair,
  "purple hairband": preset.hair,
  "black hairband": preset.hair,
  "grey hairband": preset.hair,
  "white hairband": preset.hair,
} as const satisfies Partial<Record<HeadOutfitTag, Visibility>>;

const allHatColorVisibilities = {
  "aqua hat": preset.hair,
  "black hat": preset.hair,
  "blue hat": preset.hair,
  "brown hat": preset.hair,
  "green hat": preset.hair,
  "grey hat": preset.hair,
  "orange hat": preset.hair,
  "pink hat": preset.hair,
  "purple hat": preset.hair,
  "red hat": preset.hair,
  "white hat": preset.hair,
  "yellow hat": preset.hair,
} as const satisfies Partial<Record<HeadOutfitTag, Visibility>>;

export const allHeadOutfitVisibilities = {
  ...allDistinguishableHeadOutfitVisibilities,
  ...allHairbandColorVisibilities,
  ...allHatColorVisibilities,
  "anchor hair ornament": preset.hair,
  "bat hair ornament": preset.hair,
  "beret": preset.hair,
  "bone hair ornament": preset.hair,
  "bow hairband": preset.hair,
  "bridal veil": preset.hair,
  "butterfly hair ornament": preset.hair,
  "cabbie hat": preset.hair,
  "cat hair ornament": preset.hair,
  "character hair ornament": preset.hair,
  "clover hair ornament": preset.hair,
  "coin hair ornament": preset.hair,
  "crescent hair ornament": preset.hair,
  "cross hair ornament": preset.hair,
  "crown": preset.hair,
  "cube hair ornament": preset.hair,
  "d-pad hair ornament": preset.hair,
  "diadem": preset.hair,
  "earrings": preset.hair,
  "fake animal ears": preset.hair,
  "feather hair ornament": preset.hair,
  "fish hair ornament": preset.hair,
  "flower knot": preset.hair,
  "food-themed hair ornament": preset.hair,
  "frilled hairband": preset.hair,
  "frog hair ornament": preset.hair,
  "fur-trimmed headwear": preset.hair,
  "gold earrings": preset.hair,
  "gold hairband": preset.hair,
  "hair beads": preset.hair,
  "hair bell": preset.hair,
  "hair bobbles": preset.hair,
  "hair bow": preset.hair,
  "hair flower": preset.hair,
  "hair ornament": preset.hair,
  "hair ribbon": preset.hair,
  "hair scrunchie": preset.hair,
  "hair stick": preset.hair,
  "hair tie": preset.hair,
  "hairband": preset.hair,
  "hairclip": preset.hair,
  "hairpin": preset.hair,
  "hat": preset.hair,
  "head scarf": preset.hair,
  "headband": preset.hair,
  "headdress": preset.hair,
  "heart hair ornament": preset.hair,
  "kanzashi": preset.hair,
  "lace-trimmed hairband": preset.hair,
  "leaf hair ornament": preset.hair,
  "lolita hairband": preset.hair,
  "maid headdress": preset.hair,
  "monocle hair ornament": preset.hair,
  "multicolored headwear": preset.hair,
  "musical note hair ornament": preset.hair,
  "no headwear": preset.hair,
  "pirate hat": preset.hair,
  "pom pom hair ornament": preset.hair,
  "rabbit ears": preset.hair,
  "rabbit hair ornament": preset.hair,
  "santa hat": preset.hair,
  "shark hair ornament": preset.hair,
  "skull hair ornament": preset.hair,
  "snake hair ornament": preset.hair,
  "snowflake hair ornament": preset.hair,
  "star hair ornament": preset.hair,
  "striped hairband": preset.hair,
  "tassel hair ornament": preset.hair,
  "tiara": preset.hair,
  "tress ribbon": preset.hair,
  "two-tone hairband": preset.hair,
  "veil": preset.hair,
  "witch hat": preset.hair,
  "x hair ornament": preset.hair,
} as const satisfies Record<HeadOutfitTag, Visibility>;
