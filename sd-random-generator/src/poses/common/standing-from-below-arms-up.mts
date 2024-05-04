import { PoseDefine } from "../resolver.mjs";
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
} as const satisfies PoseDefine;
