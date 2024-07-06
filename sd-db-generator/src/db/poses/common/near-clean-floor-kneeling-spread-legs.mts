import type { CameraAngle } from "../../backgrounds/backgrounds.mjs";
import { emotionPreset } from "../emotion-preset.mjs";
import type { PoseDefine } from "../poses.mjs";

type Variation = CameraAngle;

const commonEntries = [
  `kneeling`,
  `spread legs`,
  `looking at viewer`,
] as const satisfies PoseDefine["entries"];

const entries = {
  "from-above": [...commonEntries, `from above`, `looking up`],
  "from-below": [...commonEntries, `from below`, `looking down`],
  "from-horizontal": commonEntries,
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
  foot: true,
  wristAndHand: true,
  aroundBody: true,
} as const satisfies PoseDefine["visibility"];

const visibility = {
  "from-above": {
    ...baseVisibility,
  },
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
  cleavage: true,
  sideboob: false,
  backboob: false,
  underboobLevel: `from horizontal`,
  zettaiRyouiki: false,
  insideOfThighs: false,
  upskirt: true,
} as const satisfies PoseDefine["specialVisibility"];

const specialVisibility = {
  "from-above": {
    ...baseSpecialVisibility,
    underboobLevel: `invisible`,
    upskirt: false,
  },
  "from-below": {
    ...baseSpecialVisibility,
    cleavage: false,
    underboobLevel: `from below`,
  },
  "from-horizontal": {
    ...baseSpecialVisibility,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const nearCleanFloorKneelingSpreadLegs = (variation: Variation) =>
  ({
    expectedBackgroundType: `near-clean-floor`,
    cameraAngle: variation,
    personCountEntries: [`1girl`],
    personRelationEntries: [`solo`],
    entries: entries[variation],
    visibility: visibility[variation],
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: emotionPreset["default"],
  }) as const satisfies PoseDefine;
