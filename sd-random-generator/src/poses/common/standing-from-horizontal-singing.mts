import { PoseDefine } from "../resolver.mjs";

export const standingFromHorizontalSinging = {
  expectedBackgroundType: `standing`,
  cameraAngle: `from-horizontal`,
  entries: [
    `singing`,
    `hand up`,
    `looking at viewer`,
    `microphone`,
    `holding microphone`,
    // TODO: `music note`
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
    zettaiRyouiki: true,
    insideOfThighs: true,
    upskirt: false,
  },
} as const satisfies PoseDefine;
