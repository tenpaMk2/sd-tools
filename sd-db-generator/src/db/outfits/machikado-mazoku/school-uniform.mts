import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `shamiko-ibukimakisiko`;
const loraOutfitTriggerWordEntries = {
  "shamiko-ibukimakisiko": [`shamiko-default`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const machikadoMazokuSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `school uniform`,
      `collarbone`,
      `sailor collar`,
      `white sailor collar`,
      `two-tone shirt`,
      `blue shirt`,
      `white shirt`,
      `neck ribbon`,
      `red neck ribbon -> red ribbon`,
      `short sleeves`,
      `skirt`,
      `pleated skirt`,
      `plaid skirt`,
      `pantyhose`,
      `black pantyhose`,
      `loafers`,
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
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.pantiesUnderPantyhose,
    },
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
