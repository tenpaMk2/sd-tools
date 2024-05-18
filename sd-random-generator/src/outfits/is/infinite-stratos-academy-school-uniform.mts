import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation =
  | `cecilia`
  | `charlotte`
  | `houki`
  | `laura`
  | `lingyin`
  | `tatenashi`;

const variationParts = {
  necktie: {
    cecilia: [`neck ribbon`, `blue neck ribbon`],
    charlotte: [`neck ribbon`, `blue neck ribbon`],
    houki: [`neck ribbon`, `blue neck ribbon`],
    laura: [`necktie`, `blue necktie`, `short necktie`],
    lingyin: [`collarbone`],
    tatenashi: [`necktie`, `yellow necktie`, `green vest`],
  },
  sleeves: {
    cecilia: [`long sleeves`, `white sleeves`],
    charlotte: [`long sleeves`, `white sleeves`],
    houki: [`long sleeves`, `white sleeves`],
    laura: [`long sleeves`, `white sleeves`],
    lingyin: [`bare shoulders`, `detached sleeves`, `white sleeves`],
    tatenashi: [`long sleeves`, `white sleeves`],
  },
  belt: {
    cecilia: [`white belt`],
    charlotte: [`white belt`],
    houki: [`white belt`],
    laura: [`white belt`],
    lingyin: [`white belt`],
    tatenashi: [`green belt`],
  },
  skirt: {
    cecilia: [`skirt`, `white skirt`, `red trim skirt`],
    charlotte: [`skirt`, `white skirt`, `miniskirt`, `red trim skirt`],
    houki: [`skirt`, `white skirt`, `miniskirt`, `red trim skirt`],
    laura: [`pants`, `white pants`, `red trim skirt`],
    lingyin: [`skirt`, `white skirt`, `miniskirt`, `red trim skirt`],
    tatenashi: [`skirt`, `white skirt`, `miniskirt`, `red trim skirt`],
  },
  legwear: {
    cecilia: [`pantyhose`, `black pantyhose`, `loafers`],
    charlotte: [`bare legs`, `shoes`],
    houki: [`thighhighs`, `white thighhighs`, `boots`, `knee boots`],
    laura: [`boots`, `knee boots`],
    lingyin: [`socks`, `black socks`, `boots`],
    tatenashi: [`pantyhose`, `red pantyhose`, `loafers`],
  },
  upskirtEntries: {
    cecilia: upskirtPreset.pantiesUnderPantyhose,
    charlotte: upskirtPreset.colorfulPanties,
    houki: upskirtPreset.colorfulPanties,
    laura: [],
    lingyin: upskirtPreset.colorfulPanties,
    tatenashi: upskirtPreset.pantiesUnderPantyhose,
  },
} as const satisfies {
  [k: string]: {
    [k in Variation]: OutfitDefine["outfitEntries"];
  };
};

const variationRemoveShoes = {
  cecilia: {
    excludeTags: [`loafers`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  charlotte: {
    excludeTags: [`shoes`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  houki: {
    excludeTags: [`boots`, `knee boots`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  laura: {
    excludeTags: [`boots`, `knee boots`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  lingyin: {
    excludeTags: [`boots`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
  tatenashi: {
    excludeTags: [`loafers`],
    additionalFootEntriesAfterRemoving: [`no shoes`],
  },
} as const satisfies { [k in Variation]: OutfitDefine["whenRemoveShoes"] };

export const isInfiniteStratosAcademySchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`white military uniform`],
    outfitEntries: [
      `infinite stratos academy school uniform`,
      `school uniform`,
      `black collar`,
      ...variationParts.necktie[variation],
      `uniform`,
      `military uniform`,
      `white shirt`,
      ...variationParts.sleeves[variation],
      `belt`,
      ...variationParts.belt[variation],
      ...variationParts.skirt[variation],
      ...variationParts.legwear[variation],
    ],
    specialVisibility: {
      armpits: variation === `lingyin`,
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
    upskirtEntries: variationParts.upskirtEntries[variation],
    whenRemoveShoes: variationRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
