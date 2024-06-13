import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation = `koharu` | `hiyori` | `koi`;

const loraOutfitTriggerWordEntries = {
  koharu: [`koharu-schooluniform`],
  hiyori: [`hiyori-schooluniform`],
  koi: [`yoshinagakoi-schooluniform`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  collar: {
    koharu: [`bowtie`, `black bowtie`],
    hiyori: [`necktie`, `black necktie`, `striped necktie`],
    koi: [`necktie`, `black necktie`, `striped necktie`],
  },
  upper: {
    koharu: [
      [
        {
          entries: [
            `worn cardigan`,
            `yellow worn cardigan`,
            `blazer`,
            `blue jacket`,
            `open jacket`,
            `long sleeves`,
          ],
        },
        { entries: [`sweater vest`, `yellow sweater vest`, `short sleeves`] },
      ],
    ],
    hiyori: [`blazer`, `blue jacket`, `long sleeves`],
    koi: [
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
    koharu: [`thighhighs`, `white thighhighs`],
    hiyori: [`socks`, `black socks`],
    koi: [`socks`, `black socks`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const specialVisibility = {
  zettaiRyouiki: {
    koharu: true,
    hiyori: false,
    koi: false,
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
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
