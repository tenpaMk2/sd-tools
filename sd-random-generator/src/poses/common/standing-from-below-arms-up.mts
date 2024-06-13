import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine } from "../poses.mjs";
import { standingFromHorizontalArmsUp } from "./standing-from-horizontal-arms-up.mjs";

export const standingFromBelowArmsUp = {
  ...standingFromHorizontalArmsUp,
  cameraAngle: `from-below`,
  entries: [
    ...standingFromHorizontalArmsUp.entries,
    `from below`,
    `looking down`,
  ],
  specialVisibility: {
    ...standingFromHorizontalArmsUp.specialVisibility,
    underboobLevel: `from below`,
    upskirt: true,
  },
  emotionProbabilitiesAtPose: emotionPreset["all-flat"],
} as const satisfies PoseDefine;
