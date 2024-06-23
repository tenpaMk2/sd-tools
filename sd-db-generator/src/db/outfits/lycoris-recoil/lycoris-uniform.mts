import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `chisato-nochekaiser` | `takina-nochekaiser`;

const outfitEntries = {
  "neck-ribbon": {
    "chisato-nochekaiser": [`blue neck ribbon -> blue ribbon`],
    "takina-nochekaiser": [`green neck ribbon -> green ribbon`],
  },
  "dress": {
    "chisato-nochekaiser": [`red dress`],
    "takina-nochekaiser": [`blue dress`],
  },
  "belt": {
    "chisato-nochekaiser": [`red belt`],
    "takina-nochekaiser": [`blue belt`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

export const lycorisRecoilLycorisUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `lycoris uniform`,
      `white shirt`,
      `collared shirt`,
      `white collar`,
      `neck ribbon`,
      ...outfitEntries["neck-ribbon"][variation],
      ...outfitEntries["dress"][variation],
      `grey dress`,
      `two-tone dress`,
      `short dress`,
      `long sleeves`,
      `belt`,
      ...outfitEntries["belt"][variation],
      `pleated dress`,
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
    liftType: `dress`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
