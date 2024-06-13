import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine } from "../poses.mjs";

export const standingFromBelowFromSideProfile = {
  expectedBackgroundType: `standing`,
  cameraAngle: `from-below`,
  entries: [
    `from below`,
    `from side`,
    `upper body`,
    `looking ahead`,
    `profile`,
  ],
  visibility: {
    frontHead: true,
    sideHead: true,
    backHead: true,
    frontBreast: true,
    sideBreast: true,
    backBreast: true,
    frontMidriff: true,
    sideMidriff: true,
    backMidriff: true,
    frontHipAndThigh: false,
    sideHipAndThigh: false,
    backHipAndThigh: false,
    foot: false,
    wristAndHand: false,
    aroundBody: true,
  },
  specialVisibility: {
    armpits: false,
    hangingBreasts: false,
    tautClothes: true,
    cleavage: false,
    sideboob: true,
    backboob: false,
    underboobLevel: `from below`,
    zettaiRyouiki: false,
    insideOfThighs: false,
    upskirt: false,
  },
  emotionProbabilitiesAtPose: emotionPreset["all-flat"],
} as const satisfies PoseDefine;
