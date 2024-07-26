import type { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset.mjs";

type Variation =
  | `jacket-hayu-enter`
  | `sleeveless-hayu-enter`
  | `jacket-hemo-enter`
  | `sleeveless-hemo-enter`
  | `jacket-ino-enter`
  | `sleeveless-ino-enter`
  | `jacket-nina-enter`
  | `sleeveless-nina-enter`
  | `jacket-roko-enter`
  | `sleeveless-roko-enter`;

const loraOutfitTriggerWordEntries = {
  "jacket-hayu-enter": [`idol_a`],
  "sleeveless-hayu-enter": [`idol_b`],
  "jacket-hemo-enter": [`idol_a`],
  "sleeveless-hemo-enter": [`idol_b`],
  "jacket-ino-enter": [`idol_a`],
  "sleeveless-ino-enter": [`idol_b`],
  "jacket-nina-enter": [`idol_a`],
  "sleeveless-nina-enter": [`idol_b`],
  "jacket-roko-enter": [`idol_a`],
  "sleeveless-roko-enter": [`idol_b`],
} as const satisfies Record<
  Variation,
  OutfitDefine["loraOutfitTriggerWordEntries"]
>;

const shirt = (
  variation: `jacket` | `sleeveless`,
  color: `red` | `blue` | `green` | `orange` | `pink` | `yellow`,
): OutfitDefine["outfitEntries"] => {
  switch (variation) {
    case "jacket":
      const bowtie = {
        red: [`red bowtie`],
        blue: [`blue bowtie`],
        green: [`green bowtie`],
        orange: [`orange bowtie`],
        pink: [`pink bowtie`],
        yellow: [`yellow bowtie`],
      } as const satisfies Record<typeof color, OutfitDefine["outfitEntries"]>;

      return [
        `white sailor collar`,
        `white shirt`,
        `buttons`,
        `bowtie`,
        ...bowtie[color],
      ] as const;
    case "sleeveless":
      const bow = {
        red: [`red chest bow -> red bow`],
        blue: [`blue chest bow -> blue bow`],
        green: [`green chest bow -> green bow`],
        orange: [`orange chest bow -> orange bow`],
        pink: [`pink chest bow -> pink bow`],
        yellow: [`yellow chest bow -> yellow bow`],
      } as const satisfies Record<typeof color, OutfitDefine["outfitEntries"]>;

      return [
        `collarbone`,
        `white camisole`,
        `sleeveless`,
        `sleeveless shirt`,
        `dress`,
        ...bow[color],
        `bare arms`,
      ] as const;
  }
};

const jacket = (
  color: `red` | `blue` | `green` | `orange` | `pink` | `yellow`,
): OutfitDefine["outfitEntries"] => {
  const jacket = {
    red: [`red jacket`],
    blue: [`blue jacket`],
    green: [`green jacket`],
    orange: [`orange jacket`],
    pink: [`pink jacket`],
    yellow: [`yellow jacket`],
  } as const satisfies Record<typeof color, OutfitDefine["outfitEntries"]>;

  return [
    `jacket`,
    ...jacket[color],
    `long sleeves`,
    `print jacket`,
    `floral print`,
  ] as const;
};

const skirt = (
  color: `red` | `blue` | `green` | `orange` | `pink` | `yellow` | `aqua`,
): OutfitDefine["outfitEntries"] => {
  const skirt = {
    red: [`red skirt`],
    blue: [`blue skirt`],
    green: [`green skirt`],
    orange: [`orange skirt`],
    pink: [`pink skirt`],
    yellow: [`yellow skirt`],
    aqua: [`aqua skirt`],
  } as const satisfies Record<typeof color, OutfitDefine["outfitEntries"]>;

  return [...skirt[color], `frilled skirt`, `layered skirt`] as const;
};

const outfitEntries = {
  hat: {
    "jacket-hayu-enter": [`beret`, `white hat`],
    "sleeveless-hayu-enter": [`no headwear`],
    "jacket-hemo-enter": [`beret`, `white hat`],
    "sleeveless-hemo-enter": [`no headwear`],
    "jacket-ino-enter": [`beret`, `white hat`],
    "sleeveless-ino-enter": [`no headwear`],
    "jacket-nina-enter": [`beret`, `white hat`],
    "sleeveless-nina-enter": [`no headwear`],
    "jacket-roko-enter": [`beret`, `white hat`],
    "sleeveless-roko-enter": [`no headwear`],
  },
  shirt: {
    "jacket-hayu-enter": shirt(`jacket`, `red`),
    "sleeveless-hayu-enter": shirt(`sleeveless`, `red`),
    "jacket-hemo-enter": shirt(`jacket`, `green`),
    "sleeveless-hemo-enter": shirt(`sleeveless`, `green`),
    "jacket-ino-enter": shirt(`jacket`, `pink`),
    "sleeveless-ino-enter": shirt(`sleeveless`, `pink`),
    "jacket-nina-enter": shirt(`jacket`, `orange`),
    "sleeveless-nina-enter": shirt(`sleeveless`, `yellow`),
    "jacket-roko-enter": shirt(`jacket`, `blue`),
    "sleeveless-roko-enter": shirt(`sleeveless`, `blue`),
  },
  jacket: {
    "jacket-hayu-enter": jacket(`red`),
    "sleeveless-hayu-enter": [],
    "jacket-hemo-enter": jacket(`green`),
    "sleeveless-hemo-enter": [],
    "jacket-ino-enter": jacket(`pink`),
    "sleeveless-ino-enter": [],
    "jacket-nina-enter": jacket(`orange`),
    "sleeveless-nina-enter": [],
    "jacket-roko-enter": jacket(`blue`),
    "sleeveless-roko-enter": [],
  },
  skirt: {
    "jacket-hayu-enter": skirt(`blue`),
    "sleeveless-hayu-enter": skirt(`red`),
    "jacket-hemo-enter": skirt(`blue`),
    "sleeveless-hemo-enter": skirt(`green`),
    "jacket-ino-enter": skirt(`blue`),
    "sleeveless-ino-enter": skirt(`pink`),
    "jacket-nina-enter": skirt(`blue`),
    "sleeveless-nina-enter": skirt(`yellow`),
    "jacket-roko-enter": skirt(`blue`),
    "sleeveless-roko-enter": skirt(`aqua`),
  },
  socks: {
    "jacket-hayu-enter": [`black thighhighs`],
    "sleeveless-hayu-enter": [`black thighhighs`],
    "jacket-hemo-enter": [`black pantyhose`],
    "sleeveless-hemo-enter": [`black pantyhose`],
    "jacket-ino-enter": [`black pantyhose`],
    "sleeveless-ino-enter": [`black pantyhose`],
    "jacket-nina-enter": [`white socks`],
    "sleeveless-nina-enter": [`white socks`, `kneehighs`],
    "jacket-roko-enter": [`socks`],
    "sleeveless-roko-enter": [`black socks`],
  },
  shoes: {
    "jacket-hayu-enter": [`knee boots`],
    "sleeveless-hayu-enter": [`loafers`],
    "jacket-hemo-enter": [`knee boots`],
    "sleeveless-hemo-enter": [`loafers`],
    "jacket-ino-enter": [`knee boots`],
    "sleeveless-ino-enter": [`loafers`],
    "jacket-nina-enter": [`knee boots`],
    "sleeveless-nina-enter": [`loafers`],
    "jacket-roko-enter": [`knee boots`],
    "sleeveless-roko-enter": [`loafers`],
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
  "jacket-hayu-enter": { ...baseSpecialVisibility },
  "sleeveless-hayu-enter": {
    ...baseSpecialVisibility,
    armpits: true,
    tautClothes: true,
  },
  "jacket-hemo-enter": { ...baseSpecialVisibility },
  "sleeveless-hemo-enter": {
    ...baseSpecialVisibility,
    armpits: true,
    tautClothes: true,
  },
  "jacket-ino-enter": { ...baseSpecialVisibility },
  "sleeveless-ino-enter": {
    ...baseSpecialVisibility,
    armpits: true,
    tautClothes: true,
  },
  "jacket-nina-enter": { ...baseSpecialVisibility },
  "sleeveless-nina-enter": {
    ...baseSpecialVisibility,
    armpits: true,
    tautClothes: true,
  },
  "jacket-roko-enter": { ...baseSpecialVisibility },
  "sleeveless-roko-enter": {
    ...baseSpecialVisibility,
    armpits: true,
    tautClothes: true,
  },
} as const satisfies Record<Variation, OutfitDefine["specialVisibility"]>;

const upskirt = {
  "jacket-hayu-enter": {
    liftType: `shirt`,
    entries: upskirtPreset.whitePanties,
  },
  "sleeveless-hayu-enter": {
    liftType: `shirt`,
    entries: upskirtPreset.whitePanties,
  },
  "jacket-hemo-enter": {
    liftType: `shirt`,
    entries: upskirtPreset.pantiesUnderPantyhose,
  },
  "sleeveless-hemo-enter": {
    liftType: `shirt`,
    entries: upskirtPreset.pantiesUnderPantyhose,
  },
  "jacket-ino-enter": {
    liftType: `shirt`,
    entries: upskirtPreset.pantiesUnderPantyhose,
  },
  "sleeveless-ino-enter": {
    liftType: `shirt`,
    entries: upskirtPreset.pantiesUnderPantyhose,
  },
  "jacket-nina-enter": {
    liftType: `shirt`,
    entries: upskirtPreset.colorfulPanties,
  },
  "sleeveless-nina-enter": {
    liftType: `shirt`,
    entries: upskirtPreset.colorfulPanties,
  },
  "jacket-roko-enter": {
    liftType: `shirt`,
    entries: upskirtPreset.colorfulPanties,
  },
  "sleeveless-roko-enter": {
    liftType: `shirt`,
    entries: upskirtPreset.colorfulPanties,
  },
} as const satisfies Record<Variation, OutfitDefine["upskirt"]>;

const commonWhenRemoveShoesKneeBoots = {
  excludeTags: [`knee boots`],
  additionalFootEntriesAfterRemoving: [`no shoes`],
} as const satisfies OutfitDefine["whenRemoveShoes"];

const commonWhenRemoveShoesLoafers = {
  excludeTags: [`loafers`],
  additionalFootEntriesAfterRemoving: [`no shoes`],
} as const satisfies OutfitDefine["whenRemoveShoes"];

const whenRemoveShoes = {
  "jacket-hayu-enter": commonWhenRemoveShoesKneeBoots,
  "sleeveless-hayu-enter": commonWhenRemoveShoesLoafers,
  "jacket-hemo-enter": commonWhenRemoveShoesKneeBoots,
  "sleeveless-hemo-enter": commonWhenRemoveShoesLoafers,
  "jacket-ino-enter": commonWhenRemoveShoesKneeBoots,
  "sleeveless-ino-enter": commonWhenRemoveShoesLoafers,
  "jacket-nina-enter": commonWhenRemoveShoesKneeBoots,
  "sleeveless-nina-enter": commonWhenRemoveShoesLoafers,
  "jacket-roko-enter": commonWhenRemoveShoesKneeBoots,
  "sleeveless-roko-enter": commonWhenRemoveShoesLoafers,
} as const satisfies Record<Variation, OutfitDefine["whenRemoveShoes"]>;

export const ochifuruIdol = (variation: Variation) =>
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
