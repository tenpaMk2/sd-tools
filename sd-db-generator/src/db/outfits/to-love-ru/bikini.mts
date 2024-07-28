import type { OutfitDefine } from "../outfits.mjs";

type Variation = `tearju-nochekaiser`;

const loraOutfitTriggerWordEntries = {
  "tearju-nochekaiser": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "tearju-nochekaiser": [],
  },
  shirt: {
    "tearju-nochekaiser": [
      `swimsuit`,
      `bikini`,
      `purple bikini`,
      `collarbone`,
      `navel`,
      `bare arms`,
      `shoulder blades`,
    ],
  },
  jacket: {
    "tearju-nochekaiser": [],
  },
  skirt: {
    "tearju-nochekaiser": [],
  },
  socks: {
    "tearju-nochekaiser": [`bare legs`],
  },
  shoes: {
    "tearju-nochekaiser": [`barefoot`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const specialVisibility = {
  "tearju-nochekaiser": {
    armpits: true,
    hangingBreasts: true,
    tautClothes: false,
    cleavage: true,
    sideboob: true,
    backboob: true,
    underboobLevel: `full`,
    zettaiRyouiki: false,
    insideOfThighs: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "tearju-nochekaiser": null,
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "tearju-nochekaiser": null,
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const toLoveRuBikini = (variation: Variation): OutfitDefine => ({
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
