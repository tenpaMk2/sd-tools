import type { OutfitDefine } from "../outfits.mjs";

type Variation = `am7coffeelove`;

export const prismaIllyaBeastMiyu = (
  variation: `am7coffeelove`,
): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`zzmiuaa`],
    outfitEntries: [
      `jingle bell hair ornament -> jingle bell`,
      `blue neck ribbon -> blue ribbon`,
      `white collar`,
      `detached collar`,
      `grey jacket`,
      `sleeveless jacket`,
      `bare shoulders`,
      `cropped jacket`,
      `tight clothes`,
      `crop top`,
      `midriff`,
      `navel`,
      `black panties`,
      `no pants`,
      `paw gloves`,
      `animal hands`,
      `fur-trimmed gloves`,
      `grey gloves`,
      `grey thighhighs`,
      `thighs skindentation -> skindentation`,
      `garter straps`,
      `grey footwear`,
      `paw shoes`,
      `butt crack`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: null,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
