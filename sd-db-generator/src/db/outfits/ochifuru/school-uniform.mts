import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation =
  | `hayu-enter`
  | `hemo-enter`
  | `ino-enter`
  | `nina-enter`
  | `roko-enter`
  | `tone-enter`;

const loraOutfitTriggerWordEntries = {
  "hayu-enter": [],
  "hemo-enter": [],
  "ino-enter": [],
  "nina-enter": [],
  "roko-enter": [],
  "tone-enter": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  upper: {
    "hayu-enter": [
      `serafuku`,
      `sailor collar`,
      `blue sailor collar`,
      `white shirt`,
      `worn cardigan -> cardigan`,
      `red worn cardigan -> red cardigan`,
      `long sleeves`,
      `bowtie`,
      `green bowtie`,
    ],
    "hemo-enter": [
      `dress`,
      `sailor dress`,
      `white dress`,
      `sailor collar`,
      `white sailor collar`,
      `long sleeves`,
      `neck ribbon`,
      `red neck ribbon -> red ribbon`,
    ],
    "ino-enter": [
      `sailor collar`,
      `blue sailor collar`,
      `white shirt`,
      `long sleeves`,
      `bowtie`,
      `green bowtie`,
    ],
    "nina-enter": [
      `blazer`,
      `long sleeves`,
      `sweater`,
      `white shirt`,
      `neck ribbon`,
    ],
    "roko-enter": [
      `blazer`,
      `open jacket`,
      `collared shirt`,
      `white shirt`,
      `hoodie`,
      `neck ribbon`,
      `long sleeves`,
    ],
    "tone-enter": [
      `serafuku`,
      `blue sailor collar`,
      `green bowtie`,
      `yellow sweater`,
      `long sleeves`,
    ],
  },
  skirt: {
    "hayu-enter": [`skirt`, `blue skirt`, `pleated skirt`, `miniskirt`],
    "hemo-enter": [`short dress`],
    "ino-enter": [`skirt`, `blue skirt`, `pleated skirt`, `miniskirt`],
    "nina-enter": [`skirt`, `pleated skirt`, `miniskirt`],
    "roko-enter": [`skirt`, `pleated skirt`, `miniskirt`],
    "tone-enter": [`skirt`, `blue skirt`, `pleated skirt`, `miniskirt`],
  },
  socks: {
    "hayu-enter": [`thighhighs`, `black thighhighs`],
    "hemo-enter": [`pantyhose`, `black pantyhose`],
    "ino-enter": [`pantyhose`, `black pantyhose`],
    "nina-enter": [`white socks`, `kneehighs`],
    "roko-enter": [`black socks`],
    "tone-enter": [`black socks`, `kneehighs`],
  },
  shoes: {
    "hayu-enter": [`loafers`],
    "hemo-enter": [`loafers`],
    "ino-enter": [`loafers`],
    "nina-enter": [`loafers`],
    "roko-enter": [`loafers`],
    "tone-enter": [`loafers`],
  },
} as const satisfies Record<
  string,
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
  "hayu-enter": {
    ...baseSpecialVisibility,
    tautClothes: true,
    zettaiRyouiki: true,
  },
  "hemo-enter": { ...baseSpecialVisibility, tautClothes: true },
  "ino-enter": { ...baseSpecialVisibility, tautClothes: true },
  "nina-enter": { ...baseSpecialVisibility, tautClothes: true },
  "roko-enter": { ...baseSpecialVisibility, tautClothes: true },
  "tone-enter": { ...baseSpecialVisibility, tautClothes: true },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const commonUpskirtSocks = {
  liftType: `skirt`,
  entries: upskirtPreset.colorfulPanties,
} as const satisfies OutfitDefine["upskirt"];

const commonUpskirtPantyhose = {
  liftType: `skirt`,
  entries: upskirtPreset.pantiesUnderPantyhose,
} as const satisfies OutfitDefine["upskirt"];

const upskirt = {
  "hayu-enter": commonUpskirtSocks,
  "hemo-enter": commonUpskirtPantyhose,
  "ino-enter": commonUpskirtPantyhose,
  "nina-enter": commonUpskirtSocks,
  "roko-enter": commonUpskirtSocks,
  "tone-enter": commonUpskirtSocks,
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const commonWhenRemoveShoes = {
  excludeTags: [`loafers`],
  additionalFootEntriesAfterRemoving: [`no shoes`],
} as const satisfies OutfitDefine["whenRemoveShoes"];

const whenRemoveShoes = {
  "hayu-enter": commonWhenRemoveShoes,
  "hemo-enter": commonWhenRemoveShoes,
  "ino-enter": commonWhenRemoveShoes,
  "nina-enter": commonWhenRemoveShoes,
  "roko-enter": commonWhenRemoveShoes,
  "tone-enter": commonWhenRemoveShoes,
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const ochifuruSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `school uniform`,
      ...outfitEntries.upper[variation],
      ...outfitEntries.skirt[variation],
      ...outfitEntries.socks[variation],
      ...outfitEntries.shoes[variation],
    ],
    specialVisibility: specialVisibility[variation],
    upskirt: upskirt[variation],
    whenRemoveShoes: whenRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
