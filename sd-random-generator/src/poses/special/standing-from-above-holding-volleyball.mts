import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine } from "../poses.mjs";
import { standingFromHorizontalHoldingVolleyball } from "./standing-from-horizontal-holding-volleyball.mjs";

export const standingFromAboveHoldingVolleyball = {
  ...standingFromHorizontalHoldingVolleyball,
  cameraAngle: `from-above`,
  entries: [
    `from above`,
    ...standingFromHorizontalHoldingVolleyball.entries,
    `looking up`,
  ],
  specialVisibility: {
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
  },
  emotionProbabilitiesAtPose: emotionPreset["all-flat"],
} as const satisfies PoseDefine;
