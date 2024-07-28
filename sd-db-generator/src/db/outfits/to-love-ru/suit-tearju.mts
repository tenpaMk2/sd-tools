import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `nochekaiser`;

const loraOutfitTriggerWordEntries = {
  nochekaiser: [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    nochekaiser: [],
  },
  shirt: {
    nochekaiser: [
      `shirt`,
      `white shirt`,
      `collared shirt`,
      `ascot`,
      `white ascot`,
      `chest gem -> gem`,
      `green chest gemstone -> green gemstone`,
    ],
  },
  jacket: {
    nochekaiser: [`suit`, `formal`],
  },
  skirt: {
    nochekaiser: [`skirt`, `pencil skirt`, `skirt suit`],
  },
  socks: {
    nochekaiser: [`pantyhose`, `black pantyhose`],
  },
  shoes: {
    nochekaiser: [`loafers`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const specialVisibility = {
  nochekaiser: {
    armpits: false,
    hangingBreasts: false,
    tautClothes: true,
    cleavage: false,
    sideboob: false,
    backboob: false,
    underboobLevel: `invisible`,
    zettaiRyouiki: false,
    insideOfThighs: false,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  nochekaiser: {
    liftType: `shirt`,
    entries: upskirtPreset.pantiesUnderPantyhose,
  },
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  nochekaiser: {
    excludeTags: [`loafers`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const toLoveRuSuitTearju = (variation: Variation): OutfitDefine => ({
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
