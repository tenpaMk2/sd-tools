import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `light-no-lora` | `adventurer-no-lora`;

const outfitEntries = {
  head: {
    "light-no-lora": [`no headwear`],
    "adventurer-no-lora": [`hat`, `brown hat`, `witch hat`],
  },
  equipment: {
    "light-no-lora": [],
    "adventurer-no-lora": [`fingerless gloves`, `cape`, `brown cape`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

export const konosubaOutfitMegumin = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      ...outfitEntries.head[variation],
      `choker`,
      `black choker`,
      `collarbone`,
      `dress`,
      `red dress`,
      `off shoulder`,
      `off-shoulder dress`,
      `bare shoulders`,
      `long sleeves`,
      ...outfitEntries.equipment[variation],
      `belt`,
      `brown belt`,
      `short dress`,
      `asymmetrical legwear`,
      `black thighhighs`,
      `bandaged leg`,
      `boots`,
      `orange footwear`,
      `knee boots`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `dress`,
      entries: upskirtPreset.monochromePanties,
    },
    whenRemoveShoes: {
      excludeTags: [`boots`, `orange footwear`, `knee boots`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
