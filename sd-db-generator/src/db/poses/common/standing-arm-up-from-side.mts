import type { PoseDefine } from "../poses.mjs";

type Variation = `from-horizontal`;

const commonEntries = [
  `from side`,
  `portrait`,
  `arm up`,
  `looking at viewer`,
] as const satisfies PoseDefine["entries"];

const entries = {
  "from-horizontal": [...commonEntries],
} as const satisfies Record<Variation, PoseDefine["entries"]>;

const baseVisibility = {
  frontHead: true,
  sideHead: true,
  backHead: false,
  frontBreast: true,
  sideBreast: true,
  backBreast: false,
  frontMidriff: false,
  sideMidriff: false,
  backMidriff: false,
  frontHipAndThigh: false,
  sideHipAndThigh: false,
  backHipAndThigh: false,
  foot: false,
  wristAndHand: true,
  aroundBody: true,
} as const satisfies PoseDefine["visibility"];

const visibility = {
  "from-horizontal": baseVisibility,
} as const satisfies Record<Variation, PoseDefine["visibility"]>;

const baseSpecialVisibility = {
  armpits: true,
  hangingBreasts: false,
  tautClothes: false,
  cleavage: false,
  sideboob: true,
  backboob: false,
  underboobLevel: `from horizontal`,
  zettaiRyouiki: false,
  insideOfThighs: false,
  upskirt: false,
} as const satisfies PoseDefine["specialVisibility"];

const specialVisibility = {
  "from-horizontal": {
    ...baseSpecialVisibility,
    underboobLevel: `from horizontal`,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const standingArmUpFromSide = (variation: Variation): PoseDefine =>
  ({
    expectedBackgroundType: `standing`,
    cameraAngle: variation,
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
