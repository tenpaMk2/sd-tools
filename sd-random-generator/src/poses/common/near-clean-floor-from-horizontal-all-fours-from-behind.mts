import { PoseDefine } from "../poses.mjs";

export const nearCleanFloorFromHorizontalAllFoursFromBehind = {
  expectedBackgroundType: `near-clean-floor`,
  cameraAngle: `from-horizontal`,
  entries: [
    `all fours`,
    `from behind`,
    `ass focus`,
    `looking at viewer`,
    `looking back`,
    [{ entries: [`profile`] }, { entries: [] }], // TODO: exclude `one eye closed` when `profile` .
  ],
  visibility: {
    frontHead: true,
    sideHead: true,
    backHead: false,
    frontBreast: false,
    sideBreast: false,
    backBreast: true,
    frontMidriff: false,
    sideMidriff: false,
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
    insideOfThighs: false,
    upskirt: true,
  },
} as const satisfies PoseDefine;
