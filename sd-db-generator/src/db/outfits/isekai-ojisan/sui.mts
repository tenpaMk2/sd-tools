import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `nochekaiser`;

export const isekaiOjisanOutfitSui = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `dress`,
      `yellow dress`,
      `long sleeves`,
      `turtleneck bodysuit`,
      `pantyhose`,
      `sweater`,
      `black sweater`,
      `boots`,
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
      liftType: `dress`,
      entries: upskirtPreset.pantiesUnderPantyhose,
    },
    whenRemoveShoes: {
      excludeTags: [`boots`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
