import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation = `kaho`;

export const blendSSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`kaho-schooluniform`],
    outfitEntries: [
      `school uniform`,
      `bowtie`,
      `plaid bowtie`,
      `sweater`,
      `grey sweater`,
      `long sleeves`,
      `skirt`,
      `white skirt`,
      `plaid skirt`,
      `miniskirt`,
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation`,
      `loafers`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: true,
      insideOfThighs: false,
    },
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
