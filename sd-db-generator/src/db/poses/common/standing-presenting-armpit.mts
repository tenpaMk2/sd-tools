import type { PoseDefine } from "../poses.mjs";

type Variation = `from-front` | `from-side`;

const cameraAngle = {
  "from-front": `from-horizontal`,
  "from-side": `from-horizontal`,
} as const satisfies Record<Variation, PoseDefine["cameraAngle"]>;

const commonEntries = [
  `upper body`,
  [{ entries: [`arm up`] }, { entries: [`arms up`] }],
  `presenting armpit`,
  `armpit focus`,
  `looking at viewer`,
] as const satisfies PoseDefine["entries"];

const entries = {
  "from-front": [...commonEntries],
  "from-side": [`from side`, ...commonEntries],
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
  frontHipAndThigh: false,
  sideHipAndThigh: false,
  backHipAndThigh: false,
  foot: false,
  wristAndHand: true,
  aroundBody: true,
} as const satisfies PoseDefine["visibility"];

const visibility = {
  "from-front": baseVisibility,
  "from-side": baseVisibility,
} as const satisfies Record<Variation, PoseDefine["visibility"]>;

const baseSpecialVisibility = {
  armpits: true,
  hangingBreasts: false,
  tautClothes: false,
  cleavage: false,
  sideboob: false,
  backboob: false,
  underboobLevel: `from horizontal`,
  zettaiRyouiki: false,
  insideOfThighs: false,
  upskirt: false,
} as const satisfies PoseDefine["specialVisibility"];

const specialVisibility = {
  "from-front": {
    ...baseSpecialVisibility,
    underboobLevel: `from horizontal`,
    cleavage: true,
  },
  "from-side": {
    ...baseSpecialVisibility,
    underboobLevel: `from horizontal`,
    sideboob: true,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const standingPresentingArmpit = (variation: Variation) =>
  ({
    expectedBackgroundType: `standing`,
    cameraAngle: cameraAngle[variation],
    personCountEntries: [`1girl`],
    personRelationEntries: [`solo`],
    entries: entries[variation],
    visibility: visibility[variation],
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: {
      "smile": 1.0,
      "light-smile": 1.0,
      "expressionless": 0.8,
      "embarrassed": 2,
      "seductive-smile": 1.0,
      "embarrassed-scowl": 2,
    },
  }) as const satisfies PoseDefine;
