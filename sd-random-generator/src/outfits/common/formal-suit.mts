import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "./upskirt-preset.mjs";

type Variation = `chifuyu`;

export const formalSuit = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `formal`,
      `suit`,
      ...(variation === `chifuyu` ? ([`teacher`] as const) : []),
      `white shirt`,
      `collared shirt`,
      `necktie`,
      `black necktie`,
      `jacket`,
      `black jacket`,
      `long sleeves`,
      `skirt`,
      `black skirt`,
      `pencil skirt`,
      `skirt suit`,
      `pantyhose`,
      `black pantyhose`,
      `pumps`,
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
      excludeTags: [`pumps`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
