import { PoseDefine } from "../../resolver.mjs";
import { fromHorizontalSinging } from "./singing.mjs";

export const fromHorizontalSingingFromSide = {
  entries: [
    ...fromHorizontalSinging.entries.filter((t) =>
      [`looking at viewer`].some((j) => t !== j),
    ),
    `from side`,
    `profile`,
    `looking ahead`,
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
