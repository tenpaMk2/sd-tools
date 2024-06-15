import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation = `chenkin`;

export const hyoukaSchoolUniformEru = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `school uniform`,
      `serafuku`,
      `white serafuku`,
      `collarbone`,
      `sailor collar`,
      `black sailor collar`,
      `neckerchief`,
      `blue neckerchief`,
      `shirt`,
      `white shirt`,
      `short sleeves`,
      `skirt`,
      `black skirt`,
      `pleated skirt`,
      `miniskirt`,
      `socks`,
      `white socks`,
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
