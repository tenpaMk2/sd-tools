import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset";

type Variation = `no-lora` | `h-madoka` | `nochekaiser`;

const loraOutfitTriggerWordEntries = {
  "no-lora": [],
  "h-madoka": [],
  "nochekaiser": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

export const amaburiRedUniformIsuzu = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `uniform`,
      `military`,
      `military uniform`,
      `aiguillette`,
      `bowtie`,
      `white bowtie`,
      `jacket`,
      `red jacket`,
      `buttons`,
      `long sleeves`,
      `skirt`,
      `black skirt`,
      `frilled skirt`,
      `pleated skirt`,
      `miniskirt`,
      `thighhighs`,
      `white thighhighs`,
      `thighs skindentation -> skindentation`,
      `boots`,
      `brown footwear`,
      `ankle boots`,
      `lace-up boots`,
      `cross-laced footwear`,
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
      excludeTags: [
        `boots`,
        `brown footwear`,
        `ankle boots`,
        `lace-up boots`,
        `cross-laced footwear`,
      ],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
