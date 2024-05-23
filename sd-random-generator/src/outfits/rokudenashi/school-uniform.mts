import { OutfitTag } from "../../tag-defines/adapter.mjs";
import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation = `summer` | `winter`;

const variationParts = {
  capelet: {
    summer: [],
    winter: [`capelet`, `blue capelet`],
  },
  wrist: {
    summer: [],
    winter: [`single wrist cuff`],
  },
} as const satisfies Record<string, Record<Variation, OutfitTag[]>>;

export const rokudenashiSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`RumiaSchool`],
    outfitEntries: [
      `choker`,
      `red neck ribbon`,
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
