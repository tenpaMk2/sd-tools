import { PoseDefine } from "../poses.mjs";

export const standingFromBelowCheeringWithPomPoms = {
  expectedBackgroundType: `standing`,
  cameraAngle: `from-below`,
  entries: [
    `from below`,
    `cheering`,
    `holding pom poms`,
    `pom pom \\(cheerleading\\)`,
    [{ entries: [`arms up`] }, { entries: [`arm up`] }],
    [{ entries: [`leg up`] }, { entries: [] }],
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
    frontHipAndThigh: true,
    sideHipAndThigh: true,
    backHipAndThigh: false,
    foot: false,
    wristAndHand: true,
    aroundBody: true,
  },
  specialVisibility: {
    armpits: true,
    hangingBreasts: false,
    tautClothes: true,
    cleavage: false,
    sideboob: true,
    backboob: false,
    underboobLevel: `from below`,
    zettaiRyouiki: false,
    insideOfThighs: false,
    upskirt: true,
  },
} as const satisfies PoseDefine;
