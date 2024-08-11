import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation =
  | `h-madoka`
  | `little-jelly`
  | `no-lora`
  | `nochekaiser`
  | `sleeveless-little-jelly`;

const loraOutfitTriggerWordEntries = {
  "h-madoka": [],
  "little-jelly": [`SentoUniform`],
  "no-lora": [],
  "nochekaiser": [],
  "sleeveless-little-jelly": [`SentoShirt`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

type Part = `hat` | `shirt` | `jacket` | `skirt` | `socks` | `shoes`;

const commonEntries = {
  hat: [],
  shirt: [
    `uniform`,
    `military`,
    `military uniform`,
    `aiguillette`,
    `bowtie`,
    `white bowtie`,
  ],
  jacket: [`jacket`, `red jacket`, `buttons`, `long sleeves`],
  skirt: [
    `skirt`,
    `black skirt`,
    `frilled skirt`,
    `pleated skirt`,
    `miniskirt`,
  ],
  socks: [
    `thighhighs`,
    `white thighhighs`,
    `thighs skindentation -> skindentation`,
  ],
  shoes: [
    `boots`,
    `brown footwear`,
    `ankle boots`,
    `lace-up boots`,
    `cross-laced footwear`,
  ],
} as const satisfies Record<Part, OutfitDefine["outfitEntries"]>;

const outfitEntries = {
  hat: {
    "h-madoka": commonEntries.hat,
    "little-jelly": commonEntries.hat,
    "no-lora": commonEntries.hat,
    "nochekaiser": commonEntries.hat,
    "sleeveless-little-jelly": commonEntries.hat,
  },
  shirt: {
    "h-madoka": commonEntries.shirt,
    "little-jelly": commonEntries.shirt,
    "no-lora": commonEntries.shirt,
    "nochekaiser": commonEntries.shirt,
    "sleeveless-little-jelly": [
      `red shirt`,
      `sleeveless`,
      `sleeveless shirt`,
      `epaulettes`,
      `aiguillette`,
      `neck ribbon`,
      `white neck ribbon -> white ribbon`,
    ],
  },
  jacket: {
    "h-madoka": commonEntries.jacket,
    "little-jelly": [
      `red jacket`,
      `epaulettes`,
      `aiguillette`,
      `neck ribbon`,
      `white neck ribbon -> white ribbon`,
      `long sleeves`,
    ],
    "no-lora": commonEntries.jacket,
    "nochekaiser": commonEntries.jacket,
    "sleeveless-little-jelly": [],
  },
  skirt: {
    "h-madoka": commonEntries.skirt,
    "little-jelly": [
      `skirt`,
      `black skirt`,
      `multicolored skirt`,
      `frilled skirt`,
      `miniskirt`,
    ],
    "no-lora": commonEntries.skirt,
    "nochekaiser": commonEntries.skirt,
    "sleeveless-little-jelly": [
      `skirt`,
      `black skirt`,
      `multicolored skirt`,
      `frilled skirt`,
      `miniskirt`,
    ],
  },
  socks: {
    "h-madoka": commonEntries.socks,
    "little-jelly": [
      `white thighhighs`,
      `thighs skindentation -> skindentation`,
    ],
    "no-lora": commonEntries.socks,
    "nochekaiser": commonEntries.socks,
    "sleeveless-little-jelly": [
      `white thighhighs`,
      `thighs skindentation -> skindentation`,
    ],
  },
  shoes: {
    "h-madoka": commonEntries.shoes,
    "little-jelly": commonEntries.shoes,
    "no-lora": commonEntries.shoes,
    "nochekaiser": commonEntries.shoes,
    "sleeveless-little-jelly": commonEntries.shoes,
  },
} as const satisfies Record<
  Part,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const baseSpecialVisibility = {
  armpits: false,
  hangingBreasts: false,
  tautClothes: false,
  cleavage: false,
  sideboob: false,
  backboob: false,
  underboobLevel: `invisible`,
  zettaiRyouiki: false,
  insideOfThighs: false,
} as const satisfies OutfitDefine["specialVisibility"];

const specialVisibility = {
  "h-madoka": {
    ...baseSpecialVisibility,
    tautClothes: true,
    zettaiRyouiki: true,
  },
  "little-jelly": {
    ...baseSpecialVisibility,
    tautClothes: true,
    zettaiRyouiki: true,
  },
  "no-lora": {
    ...baseSpecialVisibility,
    tautClothes: true,
    zettaiRyouiki: true,
  },
  "nochekaiser": {
    ...baseSpecialVisibility,
    tautClothes: true,
    zettaiRyouiki: true,
  },
  "sleeveless-little-jelly": {
    ...baseSpecialVisibility,
    tautClothes: true,
    zettaiRyouiki: true,
    armpits: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

export const amaburiRedUniformIsuzu = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      ...outfitEntries.hat[variation],
      ...outfitEntries.shirt[variation],
      ...outfitEntries.jacket[variation],
      ...outfitEntries.skirt[variation],
      ...outfitEntries.socks[variation],
      ...outfitEntries.shoes[variation],
    ],
    specialVisibility: specialVisibility[variation],
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: commonEntries.shoes,
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
