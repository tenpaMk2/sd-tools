import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine } from "../poses.mjs";

export const standingFromBelowSquatting = {
  expectedBackgroundType: `standing`,
  cameraAngle: `from-below`,
  entries: [
    `from below`,
    `squatting`,
    `looking down`,
    `looking at viewer`,
    `hands on own thighs`,
  ],
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
  specialVisibility: {
    armpits: false,
    hangingBreasts: false,
    tautClothes: true,
    cleavage: false,
    sideboob: false,
    backboob: false,
    underboobLevel: `from below`,
    zettaiRyouiki: false,
    insideOfThighs: false,
    upskirt: true,
  },
  emotionProbabilitiesAtPose: emotionPreset["all-flat"],
} as const satisfies PoseDefine;
