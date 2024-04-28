import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../resolver.mjs";

export const prismaIllyaChloeBeast = (variation: `am7coffeelove`) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [`zzcloaa`],
    outfitEntries: [
      `animal collar`,
      `belt`,
      `red belt`,
      `navel o-ring`,
      `black skirt`,
      `miniskirt`,
      `pleated skirt`,
      `fur-trimmed skirt`,
      `navel`,
      `armlet`,
      `paw gloves`,
      `animal hands`,
      `paw shoes`,
      `thigh strap`,
      `thighhighs`,
      `black thighhighs`,
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
    liftType: `skirt`,
    upskirtEntries: upskirtPreset.redPanties,
    whenRemoveShoes: null,
  }) as const satisfies OutfitDefine;
