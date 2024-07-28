import { emotionPreset } from "../emotion-preset.mjs";
import type { PoseDefine } from "../poses.mjs";

type Variation = `from-above` | `from-horizontal`;

const entries = {
  "from-above": [
    `from behind`,
    `from above`,
    `lying`,
    `on stomach`,
    `looking at viewer`,
    `looking back`,
  ],
  "from-horizontal": [
    `from behind`,
    `lying`,
    `on stomach`,
    `ass focus`,
    `looking at viewer`,
    `looking back`,
  ],
} as const satisfies Record<Variation, PoseDefine["entries"]>;

const specialVisibility = {
  "from-above": {
    armpits: false,
    hangingBreasts: false,
    tautClothes: false,
    cleavage: false,
    sideboob: false,
    backboob: true,
    underboobLevel: `invisible`,
    zettaiRyouiki: false,
    insideOfThighs: false, // TODO: Reconsider.
    upskirt: false,
  },
  "from-horizontal": {
    armpits: false,
    hangingBreasts: false,
    tautClothes: false,
    cleavage: false,
    sideboob: false,
    backboob: false,
    underboobLevel: `invisible`,
    zettaiRyouiki: false,
    insideOfThighs: false,
    upskirt: true,
  },
} as const satisfies Record<Variation, PoseDefine["specialVisibility"]>;

export const nearCleanFloorLyingOnStomachFromBehind = (
  variation: Variation,
): PoseDefine =>
  ({
    expectedBackgroundType: `near-clean-floor`,
    cameraAngle: variation,
    personCountEntries: [`1girl`],
    personRelationEntries: [`solo`],
    entries: entries[variation],
    visibility: {
      frontHead: true,
      sideHead: true,
      backHead: true,
      frontBreast: false,
      sideBreast: true,
      backBreast: true,
      frontMidriff: false,
      sideMidriff: true,
      backMidriff: true,
      frontHipAndThigh: false,
      sideHipAndThigh: true,
      backHipAndThigh: true,
      foot: false,
      wristAndHand: true,
      aroundBody: true,
    },
    specialVisibility: specialVisibility[variation],
    emotionProbabilitiesAtPose: emotionPreset["default"],
  }) as const satisfies PoseDefine;
