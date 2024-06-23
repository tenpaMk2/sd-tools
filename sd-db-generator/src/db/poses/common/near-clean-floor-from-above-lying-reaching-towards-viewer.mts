import { emotionPreset } from "../emotion-preset.mjs";
import type { PoseDefine } from "../poses.mjs";

export const nearCleanFloorFromAboveLyingReachingTowardsViewer = () =>
  ({
    expectedBackgroundType: `near-clean-floor`,
    cameraAngle: `from-above`,
    entries: [
      `lying`,
      `on back`,
      `reaching towards viewer`,
      `incoming hug`,
      `looking at viewer`,
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
      foot: false,
      wristAndHand: true,
      aroundBody: true,
    },
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: true,
      sideboob: false,
      backboob: false,
      underboobLevel: `from horizontal`,
      zettaiRyouiki: false,
      insideOfThighs: true,
      upskirt: false,
    },
    emotionProbabilitiesAtPose: emotionPreset["all-flat"],
  }) as const satisfies PoseDefine;
