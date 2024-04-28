import { OutfitDefine } from "../resolver.mjs";
import { upskirtPreset } from "./upskirt-preset.mjs";

export const openChestSweater = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `sweater`,
      [
        { entries: [`white sweater`] },
        { entries: [`black sweater`] },
        { entries: [`pink sweater`] },
        { entries: [`red sweater`] },
      ],
      `open-chest sweater`,
      `cleavage cutout`,
      `turtleneck sweater`,
      `long sleeves`,
      `sweater dress`,
      `bare legs`,
      `barefoot`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    liftType: `dress`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
