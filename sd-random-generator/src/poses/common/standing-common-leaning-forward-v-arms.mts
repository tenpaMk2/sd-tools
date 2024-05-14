import { PoseDefine } from "../resolver.mjs";

type Variation = `from-above` | `from-below` | `from-horizontal`;

const commonEntries = [
  `cowboy shot`,
  `leaning forward`,
  `v arms`,
  `looking at viewer`,
] as const satisfies PoseDefine["entries"];

const commonSpecialVisibility = {
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
} as const satisfies PoseDefine["specialVisibility"];

const variationParts = {
  cameraAngle: {
    "from-above": `from-above`,
    "from-below": `from-below`,
    "from-horizontal": `from-horizontal`,
  } as const satisfies { [k in Variation]: PoseDefine["cameraAngle"] },
  entries: {
    "from-above": [...commonEntries, `from above`, `looking up`],
    "from-below": [...commonEntries, `from below`, `looking down`],
    "from-horizontal": commonEntries,
  } as const satisfies { [k in Variation]: PoseDefine["entries"] },
  specialVisibility: {
    "from-above": {
      ...commonSpecialVisibility,
    },
    "from-below": {
      ...commonSpecialVisibility,
    },
    "from-horizontal": commonSpecialVisibility,
  } as const satisfies { [k in Variation]: PoseDefine["specialVisibility"] },
} as const;

export const standingLeaningForwardVArms = (variation: Variation) =>
  ({
    expectedBackgroundType: `standing`,
    cameraAngle: variationParts.cameraAngle[variation],
    entries: variationParts.entries[variation],
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
    specialVisibility: variationParts.specialVisibility[variation],
  }) as const satisfies PoseDefine;
