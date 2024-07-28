import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation =
  | `adventurer-outdoors-ibukimakisiko`
  | `adventurer-indoors-ibukimakisiko`
  | `outdoors-ibukimakisiko`
  | `indoors-ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  "adventurer-outdoors-ibukimakisiko": [`roxy-outfit2`],
  "adventurer-indoors-ibukimakisiko": [`roxy-outfit2`],
  "outdoors-ibukimakisiko": [`roxy-outfit1`],
  "indoors-ibukimakisiko": [`roxy-outfit1`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "adventurer-outdoors-ibukimakisiko": [`witch hat`, `black hat`],
    "adventurer-indoors-ibukimakisiko": [],
    "outdoors-ibukimakisiko": [`witch hat`, `black hat`],
    "indoors-ibukimakisiko": [],
  },
  cloak: {
    "adventurer-outdoors-ibukimakisiko": [`brown coat`],
    "adventurer-indoors-ibukimakisiko": [`long sleeves`],
    "outdoors-ibukimakisiko": [`brown cloak`, `brown capelet`],
    "indoors-ibukimakisiko": [`long sleeves`],
  },
  dress: {
    "adventurer-outdoors-ibukimakisiko": [`white dress`, `short dress`],
    "adventurer-indoors-ibukimakisiko": [`white dress`, `short dress`],
    "outdoors-ibukimakisiko": [`white dress`, `short dress`],
    "indoors-ibukimakisiko": [`white dress`, `short dress`],
  },
  boots: {
    "adventurer-outdoors-ibukimakisiko": [
      `thighhighs`,
      `white boots`,
      `thigh boots`,
    ],
    "adventurer-indoors-ibukimakisiko": [
      `thighhighs`,
      `white boots`,
      `thigh boots`,
    ],
    "outdoors-ibukimakisiko": [`white boots`, `knee boots`],
    "indoors-ibukimakisiko": [`white boots`, `knee boots`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const whenRemoveShoes = {
  "adventurer-outdoors-ibukimakisiko": {
    excludeTags: [`thighhighs`, `white boots`, `thigh boots`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
  "adventurer-indoors-ibukimakisiko": {
    excludeTags: [`thighhighs`, `white boots`, `thigh boots`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
  "outdoors-ibukimakisiko": {
    excludeTags: [`white boots`, `knee boots`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
  "indoors-ibukimakisiko": {
    excludeTags: [`white boots`, `knee boots`],
    additionalFootEntriesAfterRemoving: [`barefoot`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const mushokuTenseiOutfitRoxy = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      ...outfitEntries.hat[variation],
      ...outfitEntries.cloak[variation],
      ...outfitEntries.dress[variation],
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
      zettaiRyouiki: false, // Can be `true` at `adventurer-***-ibukimakisiko` .
      insideOfThighs: false,
    },
    upskirt: {
      liftType: `dress`,
      entries: upskirtPreset.whitePanties,
    },
    whenRemoveShoes: whenRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
