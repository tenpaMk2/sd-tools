import { PoseDefine } from "../resolver.mjs";

export const standingFromAboveFromSideLookingAhead = {
  expectedBackgroundType: `standing`,
  cameraAngle: `from-above`,
  entries: [
    `from above`,
    `from side`,
    `cowboy shot`,
    `looking ahead`,
    `breasts`,
    `profile`,
  ],
  visibility: {
    frontHead: true,
    sideHead: true,
    backHead: true,
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
    tautClothes: false,
    cleavage: false,
    sideboob: true,
    backboob: false,
    underboobLevel: `from horizontal`,
    zettaiRyouiki: false,
    insideOfThighs: false,
    upskirt: false,
  },
} as const satisfies PoseDefine;
