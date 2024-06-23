import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

export const tennisUniform = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `tennis uniform`,
      `revealing clothes`,
      `sportswear`,
      `shirt`,
      [
        { entries: [`blue shirt`] },
        { entries: [`red shirt`] },
        { entries: [`yellow shirt`] },
        { entries: [`orange shirt`] },
        { entries: [`white shirt`], probability: 3 },
        { entries: [`blue shirt`] },
        { entries: [`red shirt`] },
      ],
      `two-tone shirt`,
      `collared shirt`,
      `skirt`,
      `white skirt`,
      `miniskirt`,
      `pleated skirt`,
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
