import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset";

type Variation = `sayu-nochekaiser`;

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
      `worn cardigan -> cardigan`,
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
