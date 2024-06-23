import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

export const cheerleader = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `cheerleader`,
      `sleeveless`,
      `crop top`,
      `crop top overhang`,
      `skirt`,
      `miniskirt`,
      `pleated skirt`,
      [
        { entries: [`blue shirt`, `blue skirt`] },
        { entries: [`red shirt`, `red skirt`] },
        { entries: [`yellow shirt`, `yellow skirt`] },
        { entries: [`orange shirt`, `orange skirt`] },
        { entries: [`white shirt`, `white skirt`] },
        { entries: [`blue shirt`, `white skirt`] },
        { entries: [`red shirt`, `white skirt`] },
      ],
      // `sweat`, // TODO: `sweat` to background or pose
      // `shiny skin`, // TODO: `shiny skin` to background?
      `bare legs`,
      `shoes`,
      `sneakers`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: false,
      backboob: true,
      underboobLevel: `only from below`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.vividPanties,
    whenRemoveShoes: {
      excludeTags: [`shoes`, `sneakers`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
