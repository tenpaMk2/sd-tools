import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine } from "../poses.mjs";

export const standingFromHorizontalTwistedTorso = {
  expectedBackgroundType: `standing`,
  cameraAngle: `from-horizontal`,
  entries: [
    `cowboy shot`,
    `twisted torso`,
    `looking back`,
    `looking at viewer`,
  ],
  visibility: {
    frontHead: true,
    sideHead: true,
    backHead: false,
    frontBreast: true,
    sideBreast: true,
    backBreast: false,
    frontMidriff: false,
    sideMidriff: true,
    backMidriff: true,
    frontHipAndThigh: false,
    sideHipAndThigh: true,
    backHipAndThigh: true,
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
    underboobLevel: `invisible`,
    zettaiRyouiki: true,
    insideOfThighs: false,
    upskirt: false,
  },
  emotionProbabilitiesAtPose: emotionPreset["all-flat"],
} as const satisfies PoseDefine;
