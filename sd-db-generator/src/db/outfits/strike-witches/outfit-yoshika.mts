import { OutfitDefine } from "../outfits.mjs";

type Variation = `witch-gwess`;

const loraOutfitTriggerWordEntries = {
  "witch-gwess": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const strikeWitchesOutfitYoshika = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `uniform`,
      `school uniform`,
      `serafuku`,
      `collarbone`,
      `sailor collar`,
      `blue sailor collar`,
      `neckerchief`,
      `blue neckerchief`,
      `black neckerchief`,
      `white shirt`,
      `long sleeves`,
      `school swimsuit under serafuku -> swimsuit under clothes`,
      `blue one-piece swimsuit`,
      `bare legs`,
      `shoes`,
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
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: {
      excludeTags: [`shoes`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
