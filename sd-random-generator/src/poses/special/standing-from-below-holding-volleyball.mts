import { PoseDefine } from "../resolver.mjs";
import { standingFromHorizontalHoldingVolleyball } from "./standing-from-horizontal-holding-volleyball.mjs";

export const standingFromBelowHoldingVolleyball = {
  ...standingFromHorizontalHoldingVolleyball,
  cameraAngle: `from-below`,
  entries: [`from below`, ...standingFromHorizontalHoldingVolleyball.entries],
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
} as const satisfies PoseDefine;
