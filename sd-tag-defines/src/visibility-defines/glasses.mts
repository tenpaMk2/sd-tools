import type { GlassesTag } from "../tag-defines/glasses.mjs";
import type { Visibility } from "../visibility.mjs";

const preset = {
  glasses: {
    frontHead: true,
    sideHead: true,
    backHead: true,
    frontBreast: false,
    sideBreast: false,
    backBreast: false,
    frontMidriff: false,
    sideMidriff: false,
    backMidriff: false,
    frontHipAndThigh: false,
    sideHipAndThigh: false,
    backHipAndThigh: false,
    foot: false,
    wristAndHand: false,
    aroundBody: false,
  },
} as const satisfies Record<string, Visibility>;

const allEyewearColorVisibilities = {
  "aqua-framed eyewear": preset.glasses,
  "black-framed eyewear": preset.glasses,
  "blue-framed eyewear": preset.glasses,
  "brown-framed eyewear": preset.glasses,
  "green-framed eyewear": preset.glasses,
  "grey-framed eyewear": preset.glasses,
  "orange-framed eyewear": preset.glasses,
  "pink-framed eyewear": preset.glasses,
  "purple-framed eyewear": preset.glasses,
  "red-framed eyewear": preset.glasses,
  "white-framed eyewear": preset.glasses,
  "yellow-framed eyewear": preset.glasses,
} as const satisfies Partial<Record<GlassesTag, Visibility>>;

const allTintedEyewearColorVisibilities = {
  "blue-tinted eyewear": preset.glasses,
  "green-tinted eyewear": preset.glasses,
  "orange-tinted eyewear": preset.glasses,
  "pink-tinted eyewear": preset.glasses,
  "purple-tinted eyewear": preset.glasses,
  "red-tinted eyewear": preset.glasses,
  "yellow-tinted eyewear": preset.glasses,
} as const satisfies Partial<Record<GlassesTag, Visibility>>;

export const allGlassesVisibilities = {
  ...allEyewearColorVisibilities,
  ...allTintedEyewearColorVisibilities,
  "aviator sunglasses": preset.glasses,
  "bespectacled": preset.glasses,
  "coke-bottle glasses": preset.glasses,
  "diving mask": preset.glasses,
  "eyepatch": preset.glasses,
  "eyewear on head": preset.glasses,
  "eyewear on headwear": preset.glasses,
  "eyewear strap": preset.glasses,
  "glasses": preset.glasses,
  "goggles": preset.glasses,
  "heart-shaped eyewear": preset.glasses,
  "monocle": preset.glasses,
  "no eyewear": preset.glasses,
  "opaque glasses": preset.glasses,
  "over-rim eyewear": preset.glasses,
  "pince-nez": preset.glasses,
  "rectangular eyewear": preset.glasses,
  "rimless eyewear": preset.glasses,
  "round eyewear": preset.glasses,
  "scouter": preset.glasses,
  "semi-rimless eyewear": preset.glasses,
  "star-shaped eyewear": preset.glasses,
  "sunglasses": preset.glasses,
  "teardrop-framed glasses": preset.glasses,
  "tinted eyewear": preset.glasses,
  "under-rim eyewear": preset.glasses,
} as const satisfies Record<GlassesTag, Visibility>;
