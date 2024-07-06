import type { CameraAngle } from "../../backgrounds/backgrounds.mjs";
import { emotionPreset } from "../emotion-preset.mjs";
import type { PoseDefine } from "../poses.mjs";

type Variation = CameraAngle;

const entries = {
  "from-above": [
    `from above`,
    `wariza`,
    `hands on lap`,
    `breasts`,
    `looking at viewer`,
    `looking up`,
  ],
  "from-below": [
    `from below`,
    `wariza`,
    `hands on lap`,
    `breasts`,
    `looking at viewer`,
    `looking down`,
  ],
  "from-horizontal": [`wariza`, `hands on lap`, `looking at viewer`],
} as const satisfies Record<Variation, PoseDefine["entries"]>;

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
  "from-above": baseSpecialVisibility,
  "from-below": {
    ...baseSpecialVisibility,
    cleavage: false,
    underboobLevel: `from below`,
  },
  "from-horizontal": {
    ...baseSpecialVisibility,
    cleavage: false,
    underboobLevel: `from below`,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const nearCleanFloorWariza = (variation: Variation) =>
  ({
    expectedBackgroundType: `near-clean-floor`,
    cameraAngle: variation,
    personCountEntries: [`1girl`],
    personRelationEntries: [`solo`],
    entries: entries[variation],
    visibility: {
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
      foot: true,
      wristAndHand: true,
      aroundBody: true,
    },
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: emotionPreset["default"],
  }) as const satisfies PoseDefine;
