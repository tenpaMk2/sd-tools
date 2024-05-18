import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../outfits.mjs";

export const mahoakoLocomusica = (variation: `notekaga`) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `hat`,
      `white hat`,
      `cabbie hat`,
      `front neck star tattoo`,
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
