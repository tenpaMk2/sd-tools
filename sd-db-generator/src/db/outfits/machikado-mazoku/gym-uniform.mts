import type { OutfitDefine } from "../outfits.mjs";

type Variation = `shamiko-ibukimakisiko`;
const loraOutfitTriggerWordEntries = {
  "shamiko-ibukimakisiko": [`shamiko-gym`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const machikadoMazokuGymUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `gym uniform`,
      `white shirt`,
      `blue shorts`,
      `white socks`,
      `sneakers`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: null,
    whenRemoveShoes: {
      excludeTags: [`sneakers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
