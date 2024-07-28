import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `nochekaiser`;

export const kaguyaSamaMaidHayasaka = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `maid`,
      `maid headdress`,
      `shirt`,
      `white shirt`,
      `collared shirt`,
      `ascot`,
      `white ascot`,
      `long sleeves`,
      `vest`,
      `black vest`,
      `waist apron -> apron`,
      `white waist apron -> white apron`,
      `waist apron`,
      `socks`,
      `black socks`,
      `loafers`, // TODO: Change
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
    upskirt: {
      liftType: `skirt`,
      entries: upskirtPreset.colorfulPanties,
    },
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
