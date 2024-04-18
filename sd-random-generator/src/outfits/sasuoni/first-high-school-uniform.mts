import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../resolver.mjs";

export const sasuoniFirstHighSchoolUniform = (
  variation: `eft-pantyhose` | `eft-thighhighs`,
) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitAndExposureEntries: [
      `first high school uniform`,
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
      variation === `eft-pantyhose` ? `pantyhose` : `thighhighs`,
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
    upskirtEntries:
      variation === `eft-pantyhose`
        ? upskirtPreset.pantiesUnderPantyhose
        : upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`boots`, `black footwear`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
