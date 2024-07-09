import type { OutfitDefine } from "../outfits.mjs";

type Variation = `ibukimakisiko`;
const loraOutfitTriggerWordEntries = {
  ibukimakisiko: [`shamiko-kikikanri`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const machikadoMazokuCrisisManagementForm = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `crisis management form \\(machimazo\\)`,
      `detached collar`,
      `bowtie`,
      `red bowtie`,
      `navel`,
      `detached sleeves`,
      `frilled sleeves`,
      `waist cape`,
      `thigh boots`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
