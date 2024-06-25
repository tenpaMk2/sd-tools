import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `eternal2kpp`;

const loraOutfitTriggerWordEntries = {
  eternal2kpp: [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const tenshiTsukiOutfitTowa = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `dress`,
      `white dress`,
      `frilled dress`,
      `ribbed dress`,
      `collared dress`,
      `blue chest gemstone -> blue gemstone`,
      `sleeveless`,
      `sleeveless dress`,
      `detached sleeves`,
      `white sleeves`,
      `wide sleeves`,
      `high-low skirt`,
      `ankle lace-up`,
      `sandals`,
      [
        { entries: [`angel`, `angel wings`], probability: 0.5 },
        { entries: [] },
      ],
    ],
    specialVisibility: {
      armpits: true,
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
    upskirtEntries: upskirtPreset.whitePanties,
    whenRemoveShoes: {
      excludeTags: [`sandals`],
      additionalFootEntriesAfterRemoving: [`barefoot`],
    },
  }) as const satisfies OutfitDefine;
