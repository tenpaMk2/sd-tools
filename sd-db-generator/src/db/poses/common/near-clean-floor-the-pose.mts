import { emotionPreset } from "../emotion-preset.mjs";
import type { PoseDefine } from "../poses.mjs";

type Variation = `from-above` | `from-horizontal`;

const commonEntries = [
  `lying`,
  `on stomach`,
  `the pose`,
  `head rest`,
  `breasts`,
  `looking at viewer`,
] as const satisfies PoseDefine["entries"];

const entries = {
  "from-above": [...commonEntries, `from above`, `looking up`],
  "from-horizontal": commonEntries,
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
  underboobLevel: `invisible`,
  zettaiRyouiki: false,
  insideOfThighs: false,
  upskirt: false,
} as const satisfies PoseDefine["specialVisibility"];

const specialVisibility = {
  "from-above": {
    ...baseSpecialVisibility,
  },
  "from-horizontal": {
    ...baseSpecialVisibility,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const nearCleanFloorThePose = (variation: Variation) =>
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
