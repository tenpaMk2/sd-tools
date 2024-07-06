import type { CameraAngle } from "../../backgrounds/backgrounds.mjs";
import { emotionPreset } from "../emotion-preset.mjs";
import type { PoseDefine } from "../poses.mjs";

type Variation = CameraAngle;

const commonEntries = [
  `from behind`,
  `cowboy shot`,
  `leaning forward`,
  `looking at viewer`,
  `looking back`,
] as const satisfies PoseDefine["entries"];

const entries = {
  "from-above": [...commonEntries, `from above`, `looking up`],
  "from-below": [...commonEntries, `from below`, `looking down`],
  "from-horizontal": [...commonEntries, `ass focus`],
} as const satisfies Record<Variation, PoseDefine["entries"]>;

const baseVisibility = {
  frontHead: true,
  sideHead: true,
  backHead: false,
  frontBreast: false,
  sideBreast: true,
  backBreast: true,
  frontMidriff: false,
  sideMidriff: true,
  backMidriff: true,
  frontHipAndThigh: false,
  sideHipAndThigh: true,
  backHipAndThigh: true,
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
    frontBreast: true,
    backBreast: false,
  },
} as const satisfies Record<Variation, PoseDefine["visibility"]>;

const baseSpecialVisibility = {
  armpits: false,
  hangingBreasts: false,
  tautClothes: false,
  cleavage: false,
  sideboob: false,
  backboob: true,
  underboobLevel: `invisible`,
  zettaiRyouiki: false,
  insideOfThighs: false,
  upskirt: true,
} as const satisfies PoseDefine["specialVisibility"];

const specialVisibility = {
  "from-above": { ...baseSpecialVisibility, upskirt: false },
  "from-below": {
    ...baseSpecialVisibility,
    backboob: false,
  },
  "from-horizontal": {
    ...baseSpecialVisibility,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const standingLeaningForwardFromBehind = (variation: Variation) =>
  ({
    expectedBackgroundType: `standing`,
    cameraAngle: variation,
    personCountEntries: [`1girl`],
    personRelationEntries: [`solo`],
    entries: entries[variation],
    visibility: visibility[variation],
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: emotionPreset["default"],
  }) as const satisfies PoseDefine;
