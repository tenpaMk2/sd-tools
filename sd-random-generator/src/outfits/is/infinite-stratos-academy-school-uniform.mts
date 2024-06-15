import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation =
  | `cecilia-nochekaiser`
  | `charlotte-nochekaiser`
  | `houki-nochekaiser`
  | `laura-nochekaiser`
  | `lingyin-nochekaiser`
  | `tatenashi-nochekaiser`;

const outfitEntries = {
  necktie: {
    "cecilia-nochekaiser": [`neck ribbon`, `blue neck ribbon`],
    "charlotte-nochekaiser": [`neck ribbon`, `blue neck ribbon`],
    "houki-nochekaiser": [`neck ribbon`, `blue neck ribbon`],
    "laura-nochekaiser": [`necktie`, `blue necktie`, `short necktie`],
    "lingyin-nochekaiser": [`collarbone`],
    "tatenashi-nochekaiser": [`necktie`, `yellow necktie`, `green vest`],
  },
  sleeves: {
    "cecilia-nochekaiser": [`long sleeves`, `white sleeves`],
    "charlotte-nochekaiser": [`long sleeves`, `white sleeves`],
    "houki-nochekaiser": [`long sleeves`, `white sleeves`],
    "laura-nochekaiser": [`long sleeves`, `white sleeves`],
    "lingyin-nochekaiser": [
      `bare shoulders`,
      `detached sleeves`,
      `white sleeves`,
    ],
    "tatenashi-nochekaiser": [`long sleeves`, `white sleeves`],
  },
  belt: {
    "cecilia-nochekaiser": [`white belt`],
    "charlotte-nochekaiser": [`white belt`],
    "houki-nochekaiser": [`white belt`],
    "laura-nochekaiser": [`white belt`],
    "lingyin-nochekaiser": [`white belt`],
    "tatenashi-nochekaiser": [`green belt`],
  },
  skirt: {
    "cecilia-nochekaiser": [`skirt`, `white skirt`, `red trim skirt`],
    "charlotte-nochekaiser": [
      `skirt`,
      `white skirt`,
      `miniskirt`,
      `red trim skirt`,
    ],
    "houki-nochekaiser": [
      `skirt`,
      `white skirt`,
      `miniskirt`,
      `red trim skirt`,
    ],
    "laura-nochekaiser": [`pants`, `white pants`, `red trim skirt`],
    "lingyin-nochekaiser": [
      `skirt`,
      `white skirt`,
      `miniskirt`,
      `red trim skirt`,
    ],
    "tatenashi-nochekaiser": [
      `skirt`,
      `white skirt`,
      `miniskirt`,
      `red trim skirt`,
    ],
  },
  legwear: {
    "cecilia-nochekaiser": [`pantyhose`, `black pantyhose`, `loafers`],
    "charlotte-nochekaiser": [`bare legs`, `shoes`],
    "houki-nochekaiser": [
      `thighhighs`,
      `white thighhighs`,
      `boots`,
      `knee boots`,
    ],
    "laura-nochekaiser": [`boots`, `knee boots`],
    "lingyin-nochekaiser": [`socks`, `black socks`, `boots`],
    "tatenashi-nochekaiser": [`pantyhose`, `red pantyhose`, `loafers`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const upskirtEntries = {
  "cecilia-nochekaiser": upskirtPreset.pantiesUnderPantyhose,
  "charlotte-nochekaiser": upskirtPreset.colorfulPanties,
  "houki-nochekaiser": upskirtPreset.colorfulPanties,
  "laura-nochekaiser": [],
  "lingyin-nochekaiser": upskirtPreset.colorfulPanties,
  "tatenashi-nochekaiser": upskirtPreset.pantiesUnderPantyhose,
} as const satisfies Record<Variation, OutfitDefine["outfitEntries"]>;

const whenRemoveShoes = {
  "cecilia-nochekaiser": {
    excludeTags: [`loafers`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "charlotte-nochekaiser": {
    excludeTags: [`shoes`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "houki-nochekaiser": {
    excludeTags: [`boots`, `knee boots`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "laura-nochekaiser": {
    excludeTags: [`boots`, `knee boots`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "lingyin-nochekaiser": {
    excludeTags: [`boots`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  "tatenashi-nochekaiser": {
    excludeTags: [`loafers`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const isInfiniteStratosAcademySchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`white military uniform`],
    outfitEntries: [
      `infinite stratos academy school uniform`,
      `school uniform`,
      `black collar`,
      ...outfitEntries.necktie[variation],
      `uniform`,
      `military uniform`,
      `white shirt`,
      ...outfitEntries.sleeves[variation],
      `belt`,
      ...outfitEntries.belt[variation],
      ...outfitEntries.skirt[variation],
      ...outfitEntries.legwear[variation],
    ],
    specialVisibility: {
      armpits: variation === `lingyin-nochekaiser`,
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
    upskirtEntries: upskirtEntries[variation],
    whenRemoveShoes: whenRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
