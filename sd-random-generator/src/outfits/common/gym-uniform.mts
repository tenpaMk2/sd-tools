import { OutfitDefine } from "../outfits.mjs";

export const gymUniform = () =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `gym uniform`,
      `collarbone`,
      `gym shirt`,
      `short sleeves`,
      `buruma`,
      [{ entries: [`red buruma`] }, { entries: [`blue buruma`] }],
      `bare arms`,
      `bare legs`,
      [
        {
          entries: [
            `socks`,
            [{ entries: [`white socks`] }, { entries: [`black socks`] }],
          ],
        },
        {
          entries: [
            `thighhighs`,
            `thighs skindentation`,
            [
              { entries: [`white thighhighs`] },
              { entries: [`black thighhighs`] },
            ],
          ],
        },
      ],
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
