import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  ibukimakisiko: [`roxy-default`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const mushokuTenseiOversizedShirtRoxy = (
  variation: Variation,
): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `shirt`,
      { tag: `white shirt`, weight: 1.2 },
      `oversized shirt`,
      `long sleeves`,
      // `t-shirt`, // Don't specify because a logo mark appears on the chest.
      `no pants`,
      `bare legs`,
      `barefoot`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: false,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `shirt`,
      entries: upskirtPreset.whitePanties,
    },
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
