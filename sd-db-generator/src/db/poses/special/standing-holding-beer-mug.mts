import type { CameraAngle } from "../../backgrounds/backgrounds.mjs";
import type { PoseDefine } from "../poses.mjs";

type Variation = CameraAngle;

const commonEntries = [
  `cowboy shot`,
  `holding cup`,
  `cup`,
  `beer mug`,
  `hands up`,
] as const satisfies PoseDefine["entries"];

const entries = {
  "from-above": [
    ...commonEntries,
    `from above`,
    [{ entries: [`looking at viewer`, `looking up`] }, { entries: [] }],
  ],
  "from-below": [
    ...commonEntries,
    `from below`,
    [{ entries: [`looking at viewer`, `looking down`] }, { entries: [] }],
  ],
  "from-horizontal": [
    ...commonEntries,
    [{ entries: [`looking at viewer`] }, { entries: [] }],
  ],
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
  "from-below": { ...baseVisibility },
  "from-horizontal": { ...baseVisibility },
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
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const standingHoldingBeerMug = (variation: Variation) =>
  ({
    expectedBackgroundType: `standing`,
    cameraAngle: variation,
    personCountEntries: [`1girl`],
    personRelationEntries: [`solo`],
    entries: entries[variation],
    visibility: visibility[variation],
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: {
      "smile": 2.0,
      "light-smile": 1.0,
      "surprised": 1.0,
    },
  }) as const satisfies PoseDefine;
