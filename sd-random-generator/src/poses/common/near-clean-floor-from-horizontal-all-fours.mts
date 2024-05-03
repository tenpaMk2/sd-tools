import { PoseDefine } from "../resolver.mjs";

export const nearCleanFloorFromHorizontalAllFours = {
  expectedBackgroundType: `near-clean-floor`,
  cameraAngle: `from-horizontal`,
  entries: [
    `all fours`,
    `breasts`,
    `looking at viewer`,
    [{ entries: [`backlighting`] }, { entries: [] }], // TODO: Move `backlighting` to background defines.
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
    frontHipAndThigh: true,
    sideHipAndThigh: true,
    backHipAndThigh: false,
    foot: false,
    wristAndHand: true,
    aroundBody: true,
  },
  specialVisibility: {
    armpits: false,
    hangingBreasts: true,
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
