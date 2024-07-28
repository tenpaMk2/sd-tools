import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `ibukimakisiko`;
const loraOutfitTriggerWordEntries = {
  ibukimakisiko: [`roxy-pajamas`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const mushokuTenseiPajamasRoxy = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `dress`,
      `white dress`,
      `frills`,
      `frilled dress`,
      `bare shoulders`,
      `spaghetti strap`,
      `white spaghetti straps`,
      `black spaghetti straps`,
      `off shoulder`,
      `shoulder blades`,
      `short dress`,
      `bare legs`,
      `barefoot`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: false,
      tautClothes: false,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.whitePanties,
    },
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
