import type { CameraAngle } from "../../backgrounds/backgrounds.mjs";
import type { PoseDefine } from "../poses.mjs";

type Variation = CameraAngle;

const commonEntries = [
  `from side`,
  `cowboy shot`,
  `standing`,
  `undressing`,
] as const satisfies PoseDefine["entries"];

const entries = {
  "from-above": [...commonEntries, `from above`],
  "from-below": [...commonEntries, `from below`],
  "from-horizontal": [...commonEntries],
} as const satisfies Record<Variation, PoseDefine["entries"]>;

const baseVisibility = {
  frontHead: true,
  sideHead: true,
  backHead: true,
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
  "from-above": baseVisibility,
  "from-below": baseVisibility,
  "from-horizontal": baseVisibility,
} as const satisfies Record<Variation, PoseDefine["visibility"]>;

const baseSpecialVisibility = {
  armpits: false,
  hangingBreasts: false,
  tautClothes: true,
  cleavage: false,
  sideboob: true,
  backboob: false,
  underboobLevel: `from horizontal`,
  zettaiRyouiki: false,
  insideOfThighs: false,
  upskirt: false,
} as const satisfies PoseDefine["specialVisibility"];

const specialVisibility = {
  "from-above": {
    ...baseSpecialVisibility,
    underboobLevel: `invisible`,
  },
  "from-below": {
    ...baseSpecialVisibility,
    underboobLevel: `from below`,
  },
  "from-horizontal": {
    ...baseSpecialVisibility,
    underboobLevel: `from horizontal`,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const standingUndressing = (variation: Variation) =>
  ({
    expectedBackgroundType: `standing`,
    cameraAngle: variation,
    personCountEntries: [`1girl`],
    personRelationEntries: [`solo`],
    entries: entries[variation],
    visibility: visibility[variation],
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: {
      "light-smile": 1.0,
      "expressionless": 2.0,
    },
  }) as const satisfies PoseDefine;
