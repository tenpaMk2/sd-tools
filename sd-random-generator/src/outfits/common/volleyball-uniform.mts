import { OutfitDefine } from "../resolver.mjs";

export const volleyballUniform = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `volleyball uniform`,
      `sportswear`,
      `shirt`,
      [
        {
          entries: [
            `red shirt`,
            [{ entries: [`red shorts`] }, { entries: [`black shorts`] }],
          ],
        },
        {
          entries: [
            `blue shirt`,
            [{ entries: [`blue shorts`] }, { entries: [`black shorts`] }],
          ],
        },
        {
          entries: [
            `yellow shirt`,
            [{ entries: [`yellow shorts`] }, { entries: [`black shorts`] }],
          ],
        },
        {
          entries: [
            `white shirt`,
            [
              { entries: [`white shorts`] },
              { entries: [`black shorts`] },
              { entries: [`red shorts`] },
              { entries: [`blue shorts`] },
            ],
          ],
        },
        {
          entries: [
            `black shirt`,
            [{ entries: [`black shorts`] }, { entries: [`blue shorts`] }],
          ],
        },
      ],
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
