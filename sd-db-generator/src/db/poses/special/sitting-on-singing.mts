import { emotionPreset } from "../emotion-preset.mjs";
import type { PoseDefine } from "../poses.mjs";

type Variation = `from-horizontal`;

const commonEntries = [
  `sitting`,
  `singing`,
  `hand up`,
  `looking at viewer`,
  `microphone`,
  `holding microphone`,
  // TODO: `music note`
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
  zettaiRyouiki: true,
  insideOfThighs: true,
  upskirt: false,
} as const satisfies PoseDefine["specialVisibility"];

const specialVisibility = {
  "from-horizontal": {
    ...baseSpecialVisibility,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const sittingOnSinging = (variation: Variation): PoseDefine =>
  ({
    expectedBackgroundType: `sitting-on`,
    cameraAngle: variation,
    personCountEntries: [`1girl`],
    personRelationEntries: [`solo`],
    entries: entries[variation],
    visibility: visibility[variation],
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: emotionPreset["default"],
  }) as const satisfies PoseDefine;
