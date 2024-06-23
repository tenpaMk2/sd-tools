import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `no-lora` | `eternal2kpp`;

export const danmachiWhiteDressHestia = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `white dress`,
      `blue bowtie`,
      `pencil dress`,
      `clothing cutout`,
      `cleavage cutout`,
      `rei no himo`,
      `sleeveless`,
      `sleeveless dress`,
      `white gloves`,
      `short dress`,
      `bare legs`,
      `barefoot`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: true,
      cleavage: true,
      sideboob: true,
      backboob: true,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    liftType: `dress`,
    upskirtEntries: upskirtPreset.whitePanties,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
