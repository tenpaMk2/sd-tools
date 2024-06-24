import type { CameraAngle } from "../../backgrounds/backgrounds.mjs";
import { emotionPreset } from "../emotion-preset.mjs";
import type { PoseDefine } from "../poses.mjs";

type Variation = CameraAngle;

const commonEntries = [
  `all fours`,
  `from behind`,
  `ass focus`,
  `looking at viewer`,
  `looking back`,
  [{ entries: [`profile`] }, { entries: [] }], // TODO: exclude `one eye closed` when `profile` .
] as const satisfies PoseDefine["entries"];

const entries = {
  "from-above": [...commonEntries, `from above`],
  "from-below": [...commonEntries, `from below`],
  "from-horizontal": commonEntries,
} as const satisfies Record<Variation, PoseDefine["entries"]>;

const baseVisibility = {
  frontHead: true,
  sideHead: true,
  backHead: true,
  frontBreast: false,
  sideBreast: false,
  backBreast: true,
  frontMidriff: false,
  sideMidriff: false,
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
  backboob: false,
  underboobLevel: `invisible`,
  zettaiRyouiki: false,
  insideOfThighs: false,
  upskirt: false,
} as const satisfies PoseDefine["specialVisibility"];

const specialVisibility = {
  "from-above": baseSpecialVisibility,
  "from-below": {
    ...baseSpecialVisibility,
    hangingBreasts: true,
    upskirt: true,
  },
  "from-horizontal": {
    ...baseSpecialVisibility,
    hangingBreasts: true,
    insideOfThighs: true,
    upskirt: true,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const nearCleanFloorAllFoursFromBehind = (variation: Variation) =>
  ({
    expectedBackgroundType: `near-clean-floor`,
    cameraAngle: variation,
    entries: entries[variation],
    visibility: visibility[variation],
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: emotionPreset["default"],
  }) as const satisfies PoseDefine;
