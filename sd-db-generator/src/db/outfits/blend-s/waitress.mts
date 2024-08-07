import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation =
  | `kaho-ibukimakisiko`
  | `maika-shadowxart`
  | `mafuyu-ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  "kaho-ibukimakisiko": [`kaho-default`],
  "maika-shadowxart": [],
  "mafuyu-ibukimakisiko": [`mafuyu-default`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  shirtColor: {
    "kaho-ibukimakisiko": [`blue shirt`],
    "maika-shadowxart": [`pink shirt`],
    "mafuyu-ibukimakisiko": [`yellow shirt`],
  },
  skirtColor: {
    "kaho-ibukimakisiko": [`blue skirt`],
    "maika-shadowxart": [`pink skirt`],
    "mafuyu-ibukimakisiko": [`yellow skirt`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

export const blendSWaitress = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `head scarf`,
      `waitress`,
      `shirt`,
      ...outfitEntries.shirtColor[variation],
      `short sleeves`,
      `gloves`,
      `white gloves`,
      `waist apron`,
      `white waist apron -> white apron`,
      `skirt`,
      ...outfitEntries.skirtColor[variation],
      `miniskirt`,
      `thighhighs`,
      `white thighhighs`,
      `thighs skindentation -> skindentation`,
      `black footwear`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: true,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`black footwear`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
