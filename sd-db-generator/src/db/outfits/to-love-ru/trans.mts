import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `yami-nochekaiser`;

const loraOutfitTriggerWordEntries = {
  "yami-nochekaiser": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "yami-nochekaiser": [],
  },
  shirt: {
    "yami-nochekaiser": [
      `dress`,
      `black dress`,
      `sleeveless`,
      `sleeveless dress`,
      `cleavage cutout -> clothing cutout`,
      `cleavage cutout`,
      `detached sleeves`,
      `wide sleeves`,
    ],
  },
  jacket: {
    "yami-nochekaiser": [],
  },
  skirt: {
    "yami-nochekaiser": [`belt`, `black belt`, `black skirt`, `high-low skirt`],
  },
  socks: {
    "yami-nochekaiser": [`leg belt`],
  },
  shoes: {
    "yami-nochekaiser": [`boots`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const specialVisibility = {
  "yami-nochekaiser": {
    armpits: true,
    hangingBreasts: false,
    tautClothes: true,
    cleavage: true,
    sideboob: false,
    backboob: false,
    underboobLevel: `invisible`,
    zettaiRyouiki: false,
    insideOfThighs: false,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "yami-nochekaiser": {
    liftType: `dress`,
    entries: upskirtPreset.whitePanties,
  },
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "yami-nochekaiser": {
    excludeTags: [`boots`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const toLoveRuTrans = (variation: Variation): OutfitDefine => ({
  lora: null,
  loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
  outfitEntries: [
    ...outfitEntries.hat[variation],
    ...outfitEntries.shirt[variation],
    ...outfitEntries.jacket[variation],
    ...outfitEntries.skirt[variation],
    ...outfitEntries.socks[variation],
    ...outfitEntries.shoes[variation],
  ],
  specialVisibility: specialVisibility[variation],
  upskirt: upskirt[variation],
  whenRemoveShoes: whenRemoveShoes[variation],
});
