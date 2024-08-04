import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `ann-little-jelly`;

export const isekaiNonbiriNoukaMaid = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `maid`,
      `maid headdress`,
      `detached collar`,
      `black dress`,
      `underbust`,
      `black corset`,
      `cross-laced top -> cross-laced clothes`,
      `puffy short sleeves`,
      `wrist cuffs`,
      `frills`,
      `maid apron`,
      `waist apron -> apron`,
      `socks`,
      `mary janes`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: false,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `dress`,
      entries: upskirtPreset.whitePanties,
    },
    whenRemoveShoes: {
      excludeTags: [`mary janes`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
