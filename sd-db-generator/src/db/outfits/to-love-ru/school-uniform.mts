import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation =
  | `haruna-nochekaiser`
  | `lala-nochekaiser`
  | `momo-lancelot`
  | `momo-nochekaiser`
  | `nana-lancelot`
  | `nana-nochekaiser`;

const outfitEntries = {
  vest: {
    "haruna-nochekaiser": [`sweater vest`, `yellow sweater vest`],
    "lala-nochekaiser": [`sweater vest`, `yellow sweater vest`],
    "momo-lancelot": [`sweater vest`, `orange sweater vest`],
    "momo-nochekaiser": [`sweater vest`, `yellow sweater vest`],
    "nana-lancelot": [`sweater vest`, `orange sweater vest`],
    "nana-nochekaiser": [`sweater vest`, `yellow sweater vest`],
  },
  socks: {
    "haruna-nochekaiser": [`socks`, `black socks`],
    "lala-nochekaiser": [
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation -> skindentation`,
    ],
    "momo-lancelot": [
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation -> skindentation`,
    ],
    "momo-nochekaiser": [
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation -> skindentation`,
    ],
    "nana-lancelot": [`socks`, `white socks`, `loose socks`],
    "nana-nochekaiser": [`socks`, `white socks`, `loose socks`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const specialVisibility = {
  zettariRyouiki: {
    "haruna-nochekaiser": false,
    "lala-nochekaiser": true,
    "momo-lancelot": true,
    "momo-nochekaiser": true,
    "nana-lancelot": false,
    "nana-nochekaiser": false,
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
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
