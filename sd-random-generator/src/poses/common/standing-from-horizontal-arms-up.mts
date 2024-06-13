import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine } from "../poses.mjs";

export const standingFromHorizontalArmsUp = {
  expectedBackgroundType: `standing`,
  cameraAngle: `from-horizontal`,
  entries: [`cowboy shot`, `arms up`, `arms behind head`, `looking at viewer`],
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
    foot: false,
    wristAndHand: true,
    aroundBody: true,
  },
  specialVisibility: {
    armpits: true,
    hangingBreasts: false,
    tautClothes: true,
    cleavage: true,
    sideboob: false,
    backboob: false,
    underboobLevel: `from horizontal`,
    zettaiRyouiki: true,
    insideOfThighs: true,
    upskirt: false,
  },
  emotionProbabilitiesAtPose: emotionPreset["all-flat"],
} as const satisfies PoseDefine;
