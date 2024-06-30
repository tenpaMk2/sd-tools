import type { OutfitDefine } from "../outfits.mjs";

export const prismaIllyaBeastIllya = (variation: `am7coffeelove`) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`zzillaaa`],
    outfitEntries: [
      // TODO: Reconsider moving ears from the character define to here.
      `official alternate costume`,
      `fur-trimmed collar`,
      `black leotard`,
      `center opening`,
      `elbow gloves`,
      `black gloves`,
      `paw gloves`,
      `animal hands`,
      `fur-trimmed gloves`,
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation -> skindentation`,
      `bare shoulders`,
      `shoulder blades`,
      `navel`,
      `butt crack`,
    ],
    specialVisibility: {
      armpits: true,
      hangingBreasts: true,
      tautClothes: false,
      cleavage: true,
      sideboob: true,
      backboob: true,
      underboobLevel: `full`,
      zettaiRyouiki: false,
      insideOfThighs: true,
    },
    upskirt: {
      liftType: `skirt`,
      entries: [],
    }, // TODO: fixme
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
