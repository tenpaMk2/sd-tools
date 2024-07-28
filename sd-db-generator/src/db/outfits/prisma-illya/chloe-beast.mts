import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `am7coffeelove`;

export const prismaIllyaBeastChloe = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`zzcloaa`],
    outfitEntries: [
      `animal collar`,
      `belt`,
      `red belt`,
      `navel o-ring -> o-ring`,
      `black skirt`,
      `miniskirt`,
      `pleated skirt`,
      `fur-trimmed skirt`,
      `navel`,
      `armlet`,
      `paw gloves`,
      `animal hands`,
      `paw shoes`,
      `thigh strap`,
      `thighhighs`,
      `black thighhighs`,
      `butt crack`,
    ],
    specialVisibility: {
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
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.redPanties,
    },
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
