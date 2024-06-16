import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine } from "../poses.mjs";

type Variation = `from-horizontal`;

const commonEntries = [
  `sitting`,
  `singing`,
  `hand up`,
  `microphone`,
  `holding microphone`,
  // TODO: `music note`
  `from side`,
  `profile`,
  `looking ahead`,
] as const satisfies PoseDefine["entries"];

const entries = {
  "from-horizontal": [...commonEntries],
} as const satisfies Record<Variation, PoseDefine["entries"]>;

const baseVisibility = {
  frontHead: true,
  sideHead: true,
  backHead: true,
  frontBreast: true,
  sideBreast: true,
  backBreast: true,
  frontMidriff: true,
  sideMidriff: true,
  backMidriff: true,
  frontHipAndThigh: true,
  sideHipAndThigh: true,
  backHipAndThigh: true,
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
  cleavage: false,
  sideboob: true,
  backboob: false,
  underboobLevel: `invisible`,
  zettaiRyouiki: false,
  insideOfThighs: false,
  upskirt: false,
} as const satisfies PoseDefine["specialVisibility"];

const specialVisibility = {
  "from-horizontal": {
    ...baseSpecialVisibility,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const sittingOnSingingFromSide = (variation: Variation) =>
  ({
    expectedBackgroundType: `sitting-on`,
    cameraAngle: variation,
    entries: entries[variation],
    visibility: visibility[variation],
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: emotionPreset["all-flat"],
  }) as const satisfies PoseDefine;
