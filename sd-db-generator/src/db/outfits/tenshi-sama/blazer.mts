import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `mahiru-jibunsagasinotabi`;

export const tenshiSamaBlazer = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `school uniform`,
      `blazer`,
      `blue jacket`,
      `bowtie`,
      `red bowtie`,
      `skirt`,
      `red skirt`,
      `plaid skirt`,
      `miniskirt`,
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
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.pantiesUnderPantyhose,
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
