import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation = `chisato-nochekaiser` | `takina-nochekaiser`;

const variationParts = {
  "neck-ribbon": {
    "chisato-nochekaiser": [`blue neck ribbon`],
    "takina-nochekaiser": [`green neck ribbon`],
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
      ...variationParts["neck-ribbon"][variation],
      `blue neck ribbon`,
      ...variationParts["dress"][variation],
      `grey dress`,
      `two-tone dress`,
      `short dress`,
      `long sleeves`,
      `belt`,
      ...variationParts["belt"][variation],
      `red belt`,
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
