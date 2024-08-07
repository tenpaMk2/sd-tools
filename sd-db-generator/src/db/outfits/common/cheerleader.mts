import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

export const cheerleader = (): OutfitDefine =>
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
      `bare legs`,
      `shoes`,
      `sneakers`,
      [{ entries: [] }, { entries: [`shiny skin`] }],
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
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.vividPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`shoes`, `sneakers`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
