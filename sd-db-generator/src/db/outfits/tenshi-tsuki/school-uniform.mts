import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation =
  | `tsumugi-duongve`
  | `tsumugi-eternal2kpp`
  | `noel-duongve`
  | `noel-eternal2kpp`;

const loraOutfitTriggerWordEntries = {
  "tsumugi-duongve": [],
  "tsumugi-eternal2kpp": [],
  "noel-duongve": [],
  "noel-eternal2kpp": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  shoes: {
    "tsumugi-duongve": [`loafers`],
    "tsumugi-eternal2kpp": [`loafers`],
    "noel-duongve": [`sneakers`],
    "noel-eternal2kpp": [`sneakers`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const whenRemoveShoes = {
  "tsumugi-duongve": {
    excludeTags: [`loafers`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "tsumugi-eternal2kpp": {
    excludeTags: [`loafers`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "noel-duongve": {
    excludeTags: [`sneakers`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "noel-eternal2kpp": {
    excludeTags: [`sneakers`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<string, OutfitDefine["whenRemoveShoes"]>;

export const tenshiTsukiSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `school uniform`,
      `shirt`,
      `white shirt`,
      `collared shirt`,
      `dress shirt`,
      `bowtie`,
      `purple bowtie`,
      `breast pocket`,
      `long sleeves`,
      `skirt`,
      `grey skirt`,
      `pleated skirt`,
      `plaid skirt`,
      `miniskirt`,
      `socks`,
      `black socks`,
      ...outfitEntries.shoes[variation],
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
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: whenRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
