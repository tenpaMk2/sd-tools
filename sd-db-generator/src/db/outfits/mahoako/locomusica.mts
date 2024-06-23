import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `notekaga`;

export const mahoakoOutfitLocomusica = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `hat`,
      `white hat`,
      `cabbie hat`,
      `front neck star tattoo -> star tattoo`,
      `earrings`,
      `bikini top only`,
      `micro bikini`,
      `black bikini`,
      `sailor collar`,
      `aqua neckerchief`,
      `white jacket`,
      `open jacket`,
      `long sleeves`,
      `high-waist skirt`,
      `aqua skirt`,
      `miniskirt`,
      `black thighhighs`,
      `boots`,
      `aqua footwear`,
      `knee boots`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: false,
      underboobLevel: `full`,
      zettaiRyouiki: true,
      insideOfThighs: true,
    },
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`boots`, `aqua footwear`, `knee boots`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
