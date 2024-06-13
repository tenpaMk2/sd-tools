import { PoseTag } from "../../tag-defines/adapter.mjs";
import { emotionPreset } from "../emotion-preset.mjs";
import { PoseDefine, PoseSpecialVisibility } from "../poses.mjs";

type Variation = `from-above` | `from-below` | `from-horizontal`;

const variationParts = {
  "from-above": [`from above`, `looking up`],
  "from-below": [`from below`, `looking down`],
  "from-horizontal": [],
} as const satisfies Record<Variation, PoseTag[]>;

const underboobLevel = {
  "from-above": `invisible`,
  "from-below": `from below`,
  "from-horizontal": `from horizontal`,
} as const satisfies Record<Variation, PoseSpecialVisibility["underboobLevel"]>;

const upskirt = {
  "from-above": false,
  "from-below": true,
  "from-horizontal": false,
} as const satisfies Record<Variation, PoseSpecialVisibility["upskirt"]>;

export const standingHoldingTennis = (variation: Variation) =>
  ({
    expectedBackgroundType: `standing`,
    cameraAngle: variation,
    entries: [
      ...variationParts[variation],
      [{ entries: [`holding tennis racket`] }, { entries: [`holding racket`] }],
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
      sideboob: false,
      backboob: false,
      underboobLevel: underboobLevel[variation],
      zettaiRyouiki: false,
      insideOfThighs: false,
      upskirt: upskirt[variation],
    },
    emotionProbabilitiesAtPose: emotionPreset["all-flat"],
  }) as const satisfies PoseDefine;
