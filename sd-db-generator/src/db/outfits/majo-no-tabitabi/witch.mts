import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `elaina-ibukimakisiko` | `elaina-inner-ibukimakisiko`;
const loraOutfitTriggerWordEntries = {
  "elaina-ibukimakisiko": [`elaina-default`],
  "elaina-inner-ibukimakisiko": [`elaina-inner`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const majoNoTabitabiWitch = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      ...(variation === `elaina-ibukimakisiko` ? ([`witch hat`] as const) : []), // TODO:
      `collared shirt`,
      `neck ribbon`,
      `yellow neck ribbon -> yellow ribbon`,
      ...(variation === `elaina-ibukimakisiko` ? ([`robe`] as const) : []),
      ...(variation === `elaina-ibukimakisiko`
        ? ([`wide sleeves`] as const)
        : []),
      ...(variation === `elaina-ibukimakisiko`
        ? []
        : ([`white shirt`, `sleeveless`, `sleeveless shirt`] as const)),
      `black skirt`,
      `pleated skirt`,
      `frilled skirt`,
      `miniskirt`,
      `bare legs`,
      `pointy footwear`,
    ],
    specialVisibility: {
      armpits: variation === `elaina-ibukimakisiko` ? false : true,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`pointy footwear`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
