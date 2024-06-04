import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation = `sayu`;

export const higehiroSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `school uniform`,
      `bowtie`,
      `red bowtie`,
      `shirt`,
      `white shirt`,
      `collared shirt`,
      `sweater`,
      `worn cardigan`,
      `long sleeves`,
      `skirt`,
      `brown skirt`,
      `pleated skirt`,
      `plaid skirt`,
      `miniskirt`,
      `bare legs`,
      `socks`,
      `black socks`,
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
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.blackPanties,
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
