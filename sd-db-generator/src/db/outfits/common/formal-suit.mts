import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `common` | `chifuyu`;

const outfitEntries = {
  teacher: {
    common: [],
    chifuyu: [`teacher`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine[`outfitEntries`]>
>;

export const formalSuit = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `formal`,
      `suit`,
      ...outfitEntries.teacher[variation],
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
