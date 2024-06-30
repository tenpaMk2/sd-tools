import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation =
  | `koharu-ibukimakisiko`
  | `hiyori-ibukimakisiko`
  | `koi-ibukimakisiko`;

const loraOutfitTriggerWordEntries = {
  "koharu-ibukimakisiko": [`koharu-schooluniform`],
  "hiyori-ibukimakisiko": [`hiyori-schooluniform`],
  "koi-ibukimakisiko": [`yoshinagakoi-schooluniform`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  collar: {
    "koharu-ibukimakisiko": [`bowtie`, `black bowtie`],
    "hiyori-ibukimakisiko": [`necktie`, `black necktie`, `striped necktie`],
    "koi-ibukimakisiko": [`necktie`, `black necktie`, `striped necktie`],
  },
  upper: {
    "koharu-ibukimakisiko": [
      [
        {
          entries: [
            `worn cardigan -> cardigan`,
            `yellow worn cardigan -> yellow cardigan`,
            `blazer`,
            `blue jacket`,
            `open jacket`,
            `long sleeves`,
          ],
        },
        { entries: [`sweater vest`, `yellow sweater vest`, `short sleeves`] },
      ],
    ],
    "hiyori-ibukimakisiko": [`blazer`, `blue jacket`, `long sleeves`],
    "koi-ibukimakisiko": [
      [
        {
          entries: [
            `vest`,
            `sweater vest`,
            `purple sweater vest`,
            `blazer`,
            `blue jacket`,
            `open jacket`,
            `long sleeves`,
          ],
        },
        {
          entries: [`breast pocket`, `short sleeves`],
        },
      ],
    ],
  },
  socks: {
    "koharu-ibukimakisiko": [`thighhighs`, `white thighhighs`],
    "hiyori-ibukimakisiko": [`socks`, `black socks`],
    "koi-ibukimakisiko": [`socks`, `black socks`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const specialVisibility = {
  zettaiRyouiki: {
    "koharu-ibukimakisiko": true,
    "hiyori-ibukimakisiko": false,
    "koi-ibukimakisiko": false,
  },
} as const satisfies Record<
  `zettaiRyouiki`,
  Record<Variation, OutfitDefine["specialVisibility"]["zettaiRyouiki"]>
>;

export const slowLoopSchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      `school uniform`,
      `shirt`,
      `white shirt`,
      `collared shirt`,
      `dress shirt`,
      ...outfitEntries.collar[variation],
      ...outfitEntries.upper[variation],
      `skirt`,
      `black skirt`,
      `pleated skirt`,
      `plaid skirt`,
      `miniskirt`,
      ...outfitEntries.socks[variation],
      `loafers`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: false,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: specialVisibility.zettaiRyouiki[variation],
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
