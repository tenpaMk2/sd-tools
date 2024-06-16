import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset";

type Variation = `eft-pantyhose` | `eft-thighhighs` | `nochekaiser`;

export const sasuoniFirstHighSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `first high school uniform`,
      `school uniform`,
      `dress`,
      `white dress`,
      `collared dress`,
      `pencil dress`,
      `necktie`,
      `black necktie`,
      `short necktie`,
      `jacket`,
      `green jacket`,
      `cropped jacket`,
      `open jacket`,
      `long sleeves`,
      `pantyhose`,
      `black pantyhose`,
      `boots`,
      `black footwear`,
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
    liftType: `dress`,
    upskirtEntries: upskirtPreset.pantiesUnderPantyhose,
    whenRemoveShoes: {
      excludeTags: [`boots`, `black footwear`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
