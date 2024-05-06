import { OutfitDefine } from "../resolver.mjs";

export const volleyballUniform = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `volleyball uniform`,
      `sportswear`,
      `shirt`,
      `sleeveless shirt`,
      `sleeveless`,
      [{ entries: [] }, { entries: [`jersey`, `number print`] }],
      `elbow pads`,
      `shorts`,
      `short shorts`,
      `knee pads`,
      `shoes`,
      `sneakers`,
    ],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    liftType: `none`,
    upskirtEntries: [],
    whenRemoveShoes: {
      excludeTags: [`shoes`, `sneakers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
