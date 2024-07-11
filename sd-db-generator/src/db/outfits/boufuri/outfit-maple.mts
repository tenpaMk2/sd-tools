import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  ibukimakisiko: [`maple-default`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const boufuriOutfitMaple = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `black armor`,
      `sleeveless`,
      `detached sleeves`,
      `black gloves`,
      `armored boots`,
      `red thighhighs`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: false,
      tautClothes: false,
      cleavage: false,
      sideboob: true,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.blackPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`armored boots`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
