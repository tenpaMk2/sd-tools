import { PoseDefine } from "../resolver.mjs";

export const standingFromBelowHoldingBouquet = {
  expectedBackgroundType: `standing`,
  cameraAngle: `from-below`,
  entries: [
    `from below`,
    `upper body`,
    `holding bouquet`,
    `bouquet`,
    `looking down`,
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
    frontHipAndThigh: false,
    sideHipAndThigh: false,
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
    insideOfThighs: false,
    upskirt: false,
  },
} as const satisfies PoseDefine;
