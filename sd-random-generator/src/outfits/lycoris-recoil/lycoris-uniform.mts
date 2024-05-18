import { OutfitTag } from "../../tag-defines/adapter.mjs";
import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

type Variation = `chisato` | `takina`;

const variationParts = {
  "neck ribbon": {
    chisato: [`blue neck ribbon`],
    takina: [`green neck ribbon`],
  },
  "dress": {
    chisato: [`red dress`],
    takina: [`blue dress`],
  },
  "belt": {
    chisato: [`red belt`],
    takina: [`blue belt`],
  },
} as const satisfies { [k: string]: { [k in Variation]: OutfitTag[] } };

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
      ...variationParts["neck ribbon"][variation],
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
