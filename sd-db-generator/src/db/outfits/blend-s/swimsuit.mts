import { OutfitDefine } from "../outfits.mjs";

type Variation = `kaho-ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  "kaho-ibukimakisiko": [`kaho-swim`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const blendSSwimsuit = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `bikini`,
      `blue bikini`,
      `frilled bikini`,
      `breasts skindentation -> skindentation`,
      `collarbone`,
      `shoulder blades`,
      `navel`,
      `bare arms`,
      `bare legs`,
      `barefoot`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: true,
      underboobLevel: `only from below`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
