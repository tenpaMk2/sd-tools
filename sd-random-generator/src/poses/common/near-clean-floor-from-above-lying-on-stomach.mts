import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine } from "../poses.mjs";

export const nearCleanFloorFromAboveLyingOnStomach = {
  expectedBackgroundType: `near-clean-floor`,
  cameraAngle: `from-above`,
  entries: [
    `from behind`,
    `lying`,
    `on stomach`,
    `ass focus`,
    `looking at viewer`,
    `looking back`,
  ],
  visibility: {
    frontHead: true,
    sideHead: true,
    backHead: true,
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
  },
  specialVisibility: {
    armpits: false,
    hangingBreasts: false,
    tautClothes: false,
    cleavage: false,
    sideboob: false,
    backboob: true,
    underboobLevel: `invisible`,
    zettaiRyouiki: false,
    insideOfThighs: false, // TODO: Reconsider.
    upskirt: false,
  },
  emotionProbabilitiesAtPose: emotionPreset["all-flat"],
} as const satisfies PoseDefine;
