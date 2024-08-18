import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation = `chloe-h-madoka` | `illya-h-madoka` | `miyu-h-madoka`;

const loraOutfitTriggerWordEntries = {
  "chloe-h-madoka": [],
  "illya-h-madoka": [],
  "miyu-h-madoka": [],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const outfitEntries = {
  hat: {
    "chloe-h-madoka": [
      `fake animal ears`,
      `animal ears`,
      `animal ear fluff`,
      `hair bow`,
      `red hair bow -> red bow`,
      `jingle bell hair ornament -> jingle bell`,
    ],
    "illya-h-madoka": [
      `fake animal ears`,
      `animal ears`,
      `animal ear fluff`,
      `hair ribbon`,
      `red hair ribbon -> red ribbon`,
      `jingle bell hair ornament -> jingle bell`,
    ],
    "miyu-h-madoka": [`fake animal ears`, `animal ears`, `animal ear fluff`],
  },
  shirt: {
    "chloe-h-madoka": [
      `red collar`,
      `red belt`,
      `fur shawl`,
      `arm strap`,
      `animal hands`,
      `navel o-ring -> o-ring`,
      `stomach tattoo`,
      `navel`,
      `paw gloves`,
    ],
    "illya-h-madoka": [
      `fur collar`,
      `bare shoulders`,
      `black leotard`,
      `center opening`,
      `navel`,
      `elbow gloves`,
      `black gloves`,
      `paw gloves`,
      `animal hands`,
    ],
    "miyu-h-madoka": [
      `detached collar`,
      `neck jingle bell -> jingle bell`,
      `blue neck ribbon -> blue ribbon`,
      `grey vest`,
      `sleeveless`,
      `midriff`,
      `navel`,
      `fur-trimmed gloves`,
      `animal hands`,
      `grey gloves`,
      `paw gloves`,
    ],
  },
  jacket: {
    "chloe-h-madoka": [],
    "illya-h-madoka": [],
    "miyu-h-madoka": [],
  },
  skirt: {
    "chloe-h-madoka": [
      `fur-trimmed skirt`,
      `black skirt`,
      `miniskirt`,
      `dog tail`,
      `white long tail -> white tail`,
    ],
    "illya-h-madoka": [`cat tail`, `black long tail -> black tail`],
    "miyu-h-madoka": [
      `cat tail`,
      `grey long tail -> grey tail`,
      `black panties`,
    ],
  },
  socks: {
    "chloe-h-madoka": [
      `thigh strap`,
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation -> skindentation`,
    ],
    "illya-h-madoka": [
      `thighhighs`,
      `black thighhighs`,
      `thighs skindentation -> skindentation`,
    ],
    "miyu-h-madoka": [
      `thighhighs`,
      `grey thighhighs`,
      `thighs skindentation -> skindentation`,
      `garter straps`,
    ],
  },
  shoes: {
    "chloe-h-madoka": [`paw shoes`],
    "illya-h-madoka": [],
    "miyu-h-madoka": [`paw shoes`],
  },
} as const satisfies Record<
  string,
  Record<Variation, OutfitDefine["outfitEntries"]>
>;

const baseSpecialVisibility = {
  armpits: false,
  hangingBreasts: false,
  tautClothes: false,
  cleavage: false,
  sideboob: false,
  backboob: false,
  underboobLevel: `invisible`,
  zettaiRyouiki: false,
  insideOfThighs: false,
} as const satisfies OutfitDefine["specialVisibility"];

const specialVisibility = {
  "chloe-h-madoka": {
    ...baseSpecialVisibility,
    armpits: true,
    hangingBreasts: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
    underboobLevel: `full`,
  },
  "illya-h-madoka": {
    ...baseSpecialVisibility,
    armpits: true,
    tautClothes: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
    insideOfThighs: true,
  },
  "miyu-h-madoka": {
    ...baseSpecialVisibility,
    armpits: true,
    cleavage: true,
    sideboob: true,
    backboob: true,
    insideOfThighs: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "chloe-h-madoka": {
    liftType: `skirt`,
    entries: upskirtPreset.redPanties,
  },
  "illya-h-madoka": null,
  "miyu-h-madoka": null,
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const whenRemoveShoes = {
  "chloe-h-madoka": null,
  "illya-h-madoka": null,
  "miyu-h-madoka": null,
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const prismaIllyaBeast = (variation: Variation): OutfitDefine =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: loraOutfitTriggerWordEntries[variation],
    outfitEntries: [
      ...outfitEntries.hat[variation],
      ...outfitEntries.shirt[variation],
      ...outfitEntries.jacket[variation],
      ...outfitEntries.skirt[variation],
      ...outfitEntries.socks[variation],
      ...outfitEntries.shoes[variation],
    ],
    specialVisibility: specialVisibility[variation],
    upskirt: upskirt[variation],
    whenRemoveShoes: whenRemoveShoes[variation],
  }) as const satisfies OutfitDefine;
