import { OutfitDefine } from "../resolver.mjs";

export const isekaiOjisanMabel = (variation: `nochekaiser`) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitAndExposureEntries: [
      `blue shirt`,
      `jacket`,
      `blue jacket`,
      `long sleeves`,
      `puffy sleeves`,
      `shorts`,
      `short shorts`,
      `black shorts`,
      `bare legs`,
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
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: {
      excludeTags: [`boots`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;