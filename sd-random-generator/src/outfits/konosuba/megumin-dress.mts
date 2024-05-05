import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../resolver.mjs";

export const konosubaMeguminDress = (variation: `light` | `adventurer`) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      ...(variation === `light`
        ? ([`no headwear`] as const)
        : ([`hat`, `brown hat`, `witch hat`] as const)),
      `choker`,
      `black choker`,
      `collarbone`,
      `dress`,
      `red dress`,
      `off shoulder`,
      `off-shoulder dress`,
      `bare shoulders`,
      `long sleeves`,
      ...(variation === `light`
        ? []
        : ([`fingerless gloves`, `cape`, `brown cape`] as const)),
      `belt`,
      `brown belt`,
      `short dress`,
      `asymmetrical legwear`,
      `black thighhighs`,
      `bandaged leg`,
      `boots`,
      `orange footwear`,
      `knee boots`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    liftType: `dress`,
    upskirtEntries: upskirtPreset.monochromePanties,
    whenRemoveShoes: {
      excludeTags: [`boots`, `orange footwear`, `knee boots`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
