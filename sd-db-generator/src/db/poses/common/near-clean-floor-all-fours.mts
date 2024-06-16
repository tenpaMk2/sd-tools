import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine } from "../poses.mjs";

type Variation = `from-below` | `from-horizontal`;

const commonEntries = [
  `all fours`,
  `breasts`,
  `looking at viewer`,
  [{ entries: [`backlighting`] }, { entries: [] }], // TODO: Move `backlighting` to background defines.
] as const satisfies PoseDefine["entries"];

const entries = {
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
  frontMidriff: false,
  sideMidriff: false,
  backMidriff: false,
  frontHipAndThigh: true,
  sideHipAndThigh: true,
  backHipAndThigh: false,
  foot: false,
  wristAndHand: true,
  aroundBody: true,
} as const satisfies PoseDefine["visibility"];

const visibility = {
  "from-below": {
    ...baseVisibility,
    frontMidriff: true,
    sideMidriff: true,
  },
  "from-horizontal": {
    ...baseVisibility,
  },
} as const satisfies Record<Variation, PoseDefine["visibility"]>;

const baseSpecialVisibility = {
  armpits: false,
  hangingBreasts: true,
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
  "from-below": {
    ...baseSpecialVisibility,
  },
  "from-horizontal": {
    ...baseSpecialVisibility,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const nearCleanFloorAllFours = (variation: Variation) =>
  ({
    expectedBackgroundType: `near-clean-floor`,
    cameraAngle: variation,
    entries: entries[variation],
    visibility: visibility[variation],
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: emotionPreset["all-flat"],
  }) as const satisfies PoseDefine;
