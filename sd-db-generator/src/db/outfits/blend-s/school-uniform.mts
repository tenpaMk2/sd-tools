import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset";

type Variation = `kaho-ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  "kaho-ibukimakisiko": [`kaho-schooluniform`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const blendSSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
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
      `thighs skindentation -> skindentation`,
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
