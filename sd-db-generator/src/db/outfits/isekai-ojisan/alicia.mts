import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `nochekaiser`;

export const isekaiOjisanOutfitAlicia = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `hat`,
      `white hat`,
      `capelet`,
      `white capelet`,
      `chest jewel`,
      `chest gem -> gem`,
      `purple chest gemstone -> purple gemstone`,
      `pink shirt`,
      `long sleeves`,
      `detached sleeves`,
      `corset`,
      `skirt`,
      `purple skirt`,
      `long skirt`,
      `boots`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: true,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.whitePanties,
    whenRemoveShoes: {
      excludeTags: [`boots`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
