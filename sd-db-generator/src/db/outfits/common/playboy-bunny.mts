import type { OutfitDefine } from "../outfits.mjs";

export const playboyBunny = (): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: [
      `playboy bunny`,
      `rabbit ears`,
      `fake animal ears`,
      `rabbit tail`,
      `detached collar`,
      `bare shoulders`,
      `bare arms`,
      `collarbone`,
      `leotard`,
      `latex leotard`,
      `wrist cuffs`,
      `covered navel`,
      [
        { entries: [`bare legs`] },
        { entries: [`pantyhose`] },
        { entries: [`thighhighs`] },
      ],
      `pumps`,
      `shoulder blades`,
      `breasts skindentation -> skindentation`,
      `thighs skindentation -> skindentation`,
      `skin tight`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: true,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: {
      excludeTags: [`pumps`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
