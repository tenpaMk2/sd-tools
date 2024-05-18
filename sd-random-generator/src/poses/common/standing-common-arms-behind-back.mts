import { PoseDefine } from "../poses.mjs";

type Variation = `from-above` | `from-below` | `from-horizontal`;

const commonEntries = [
  `cowboy shot`,
  `arms behind back`,
  `looking at viewer`,
] as const satisfies PoseDefine["entries"];

const commonSpecialVisibility = {
  armpits: false,
  hangingBreasts: false,
  tautClothes: true,
  cleavage: true,
  sideboob: false,
  backboob: false,
  underboobLevel: `from horizontal`,
  zettaiRyouiki: true,
  insideOfThighs: true,
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
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
    },
    "from-below": {
      ...commonSpecialVisibility,
      underboobLevel: `from below`,
      upskirt: true,
    },
    "from-horizontal": commonSpecialVisibility,
  } as const satisfies { [k in Variation]: PoseDefine["specialVisibility"] },
} as const;

export const standingArmsBehindBack = (variation: Variation) =>
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
      wristAndHand: false,
      aroundBody: true,
    },
    specialVisibility: variationParts.specialVisibility[variation],
  }) as const satisfies PoseDefine;
