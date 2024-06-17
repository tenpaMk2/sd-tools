import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation = `lala-nochekaiser` | `momo-nochekaiser` | `nana-lancelot`;

const outfitEntries = {
  vest: {
    "lala-nochekaiser": [`sweater vest`, `yellow sweater vest`],
    "momo-nochekaiser": [`sweater vest`, `yellow sweater vest`],
    "nana-lancelot": [`sweater vest`, `orange sweater vest`],
  },
  socks: {
    "lala-nochekaiser": [
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation`,
    ],
    "momo-nochekaiser": [`socks`, `white socks`],
    "nana-lancelot": [`socks`, `white socks`, `loose socks`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const specialVisibility = {
  zettariRyouiki: {
    "lala-nochekaiser": true,
    "momo-nochekaiser": false,
    "nana-lancelot": false,
  },
} as const satisfies Record<`zettariRyouiki`, Record<Variation, boolean>>;

export const toLoveRuSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `sainan high school uniform`,
      `bowtie`,
      `green bowtie`,
      ...outfitEntries.vest[variation],
      `white shirt`,
      `collared shirt`,
      `short sleeves`,
      `green skirt`,
      `pleated skirt`,
      `plaid skirt`,
      `miniskirt`,
      ...outfitEntries.socks[variation],
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
      zettaiRyouiki: specialVisibility.zettariRyouiki[variation],
      insideOfThighs: false,
    },
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
