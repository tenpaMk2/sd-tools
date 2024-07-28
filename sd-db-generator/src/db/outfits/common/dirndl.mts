import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

export const dirndl = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `dirndl`,
      `german clothes`,
      `collarbone`,
      [
        { entries: [`black dress`] },
        { entries: [`red dress`] },
        { entries: [`green dress`], probability: 0.5 },
      ],
      `cross-laced dress -> cross-laced clothes`,
      `cross-laced dress`,
      `frilled dress`,
      `underbust`,
      `waist apron -> apron`,
      `waist apron`,
      `short dress`,
      `socks`,
      `pumps`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `dress`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`pumps`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
