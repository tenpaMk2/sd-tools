import { PoseDefine } from "../../resolver.mjs";

export const fromHorizontalThePoseHeadRest = {
  entries: [
    `lying`,
    `on stomach`,
    `the pose`,
    `head rest`,
    `breasts`,
    `looking at viewer`,
  ],
  visibility: {
    frontHead: true,
    sideHead: true,
    backHead: false,
    frontBreast: true,
    sideBreast: true,
    backBreast: false,
    frontMidriff: false,
    sideMidriff: false,
    backMidriff: false,
    frontHipAndThigh: false,
    sideHipAndThigh: true,
    backHipAndThigh: false,
    foot: true,
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
    underboobLevel: `invisible`,
    zettaiRyouiki: false,
    insideOfThighs: false,
    upskirt: false,
  },
} as const satisfies PoseDefine;
