import { OutfitTag } from "../../../index.mjs";
import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset";

type Variation = `summer-little-jelly` | `winter-little-jelly`;

const variationParts = {
  capelet: {
    "summer-little-jelly": [],
    "winter-little-jelly": [`capelet`, `blue capelet`],
  },
  wrist: {
    "summer-little-jelly": [],
    "winter-little-jelly": [`single wrist cuff`],
  },
} as const satisfies Record<string, Record<Variation, OutfitTag[]>>;

export const rokudenashiSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`RumiaSchool`],
    outfitEntries: [
      `choker`,
      `red neck ribbon -> red ribbon`,
      ...variationParts.capelet[variation],
      `shirt`,
      `white shirt`,
      `short sleeves`,
      `buttons`,
      `crop top`,
      `midriff`,
      `navel`,
      ...variationParts.wrist[variation],
      `belt`,
      `blue belt`,
      `skirt`,
      `white skirt`,
      `pleated skirt`,
      `garter straps`,
      `thighhighs`,
      `blue thighhighs`,
      `asymmetrical clothes`,
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
