import type { OutfitDefine } from "../outfits.mjs";

type Variation = `king-dong` | `ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  "king-dong": [],
  "ibukimakisiko": [`sally-default`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hoodie: {
    "king-dong": [],
    "ibukimakisiko": [`hoodie`],
  },
  boots: {
    "king-dong": [`boots`, `blue footwear`],
    "ibukimakisiko": [`boots`, `black footwear`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const whenRemoveShoes = {
  "king-dong": {
    excludeTags: [`boots`, `blue footwear`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "ibukimakisiko": {
    excludeTags: [`boots`, `black footwear`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const boufuriOutfitSally = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `scarf`,
      `blue scarf`,
      ...outfitEntries.hoodie[variation],
      `blue coat`,
      `open clothes`,
      `open coat`,
      `breastplate`,
      `white leotard`,
      `long sleeves`,
      `white gloves`,
      `white belt`,
      `blue shorts`,
      `short shorts`,
      `thighhighs`,
      `white thighhighs`,
      `thighs skindentation -> skindentation`,
      ...outfitEntries.boots[variation],
    ],
    specialVisibility: {
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
    upskirt: null,
    whenRemoveShoes: whenRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
