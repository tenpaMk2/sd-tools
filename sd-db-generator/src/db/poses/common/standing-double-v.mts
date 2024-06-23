import { CameraAngle } from "../../backgrounds/backgrounds.mjs";
import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine } from "../poses.mjs";

type Variation = CameraAngle;

const commonEntries = [
  `cowboy shot`,
  `double v`,
  `v`,
  `hands up`,
  `looking at viewer`,
] as const satisfies PoseDefine["entries"];

const entries = {
  "from-above": [...commonEntries, `from above`, `looking up`],
  "from-below": [...commonEntries, `from below`, `looking down`],
  "from-horizontal": [...commonEntries],
} as const satisfies Record<Variation, PoseDefine["entries"]>;

const baseVisibility = {
  frontHead: true,
  sideHead: true,
  backHead: false,
  frontBreast: true,
  sideBreast: true,
  backBreast: false,
  frontMidriff: true,
  sideMidriff: true,
  backMidriff: false,
  frontHipAndThigh: true,
  sideHipAndThigh: true,
  backHipAndThigh: false,
  foot: false,
  wristAndHand: true,
  aroundBody: true,
} as const satisfies PoseDefine["visibility"];

const visibility = {
  "from-above": { ...baseVisibility },
  "from-below": {
    ...baseVisibility,
  },
  "from-horizontal": {
    ...baseVisibility,
  },
} as const satisfies Record<Variation, PoseDefine["visibility"]>;

const baseSpecialVisibility = {
  armpits: false,
  hangingBreasts: false,
  tautClothes: true,
  cleavage: false,
  sideboob: false,
  backboob: false,
  underboobLevel: `from horizontal`,
  zettaiRyouiki: false,
  insideOfThighs: false,
  upskirt: false,
} as const satisfies PoseDefine["specialVisibility"];

const specialVisibility = {
  "from-above": {
    ...baseSpecialVisibility,
    cleavage: true,
    underboobLevel: `invisible`,
  },
  "from-below": {
    ...baseSpecialVisibility,
    underboobLevel: `from below`,
    upskirt: true,
  },
  "from-horizontal": {
    ...baseSpecialVisibility,
    cleavage: true,
    underboobLevel: `from horizontal`,
    zettaiRyouiki: true,
    insideOfThighs: true,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const standingDoubleV = (variation: Variation) =>
  ({
    expectedBackgroundType: `standing`,
    cameraAngle: variation,
    entries: entries[variation],
    visibility: visibility[variation],
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: emotionPreset["all-flat"],
  }) as const satisfies PoseDefine;
