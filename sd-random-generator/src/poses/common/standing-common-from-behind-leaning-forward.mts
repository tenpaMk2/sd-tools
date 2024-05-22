import { PoseDefine } from "../poses.mjs";

type Variation = `from-above` | `from-below` | `from-horizontal`;

const commonEntries = [
  `from behind`,
  `cowboy shot`,
  `leaning forward`,
  `looking at viewer`,
  `looking back`,
] as const satisfies PoseDefine["entries"];

const commonSpecialVisibility = {
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
} as const satisfies PoseDefine["specialVisibility"];

const variationParts = {
  entries: {
    "from-above": [...commonEntries, `from above`, `looking up`],
    "from-below": [...commonEntries, `from below`, `looking down`],
    "from-horizontal": [...commonEntries, `ass focus`],
  } as const satisfies { [k in Variation]: PoseDefine["entries"] },
  specialVisibility: {
    "from-above": {
      ...commonSpecialVisibility,
      upskirt: false,
    },
    "from-below": {
      ...commonSpecialVisibility,
    },
    "from-horizontal": commonSpecialVisibility,
  } as const satisfies { [k in Variation]: PoseDefine["specialVisibility"] },
} as const;

export const standingFromBehindLeaningForward = (variation: Variation) =>
  ({
    expectedBackgroundType: `standing`,
    cameraAngle: variation,
    entries: variationParts.entries[variation],
    visibility: {
      frontHead: true,
      sideHead: true,
      backHead: false,
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
    specialVisibility: variationParts.specialVisibility[variation],
  }) as const satisfies PoseDefine;
