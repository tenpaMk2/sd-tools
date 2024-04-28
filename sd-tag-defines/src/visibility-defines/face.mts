import { FaceTag } from "../tag-defines/face.mjs";
import { Visibility } from "../visibility.mjs";

const preset = {
  face: {
    frontHead: true,
    sideHead: false,
    backHead: false,
    frontBreast: false,
    sideBreast: false,
    backBreast: false,
    frontMidriff: false,
    sideMidriff: false,
    backMidriff: false,
    frontHipAndThigh: false,
    sideHipAndThigh: false,
    backHipAndThigh: false,
    foot: false,
    wristAndHand: false,
    aroundBody: false,
  },
} as const satisfies { [k: string]: Visibility };

const allEyebrowsVisibilities = {
  "eyebrows": preset.face,
  "short eyebrows": preset.face,
  "thick eyebrows": preset.face,
  "hikimayu": preset.face,
} as const satisfies { [key in FaceTag]?: Visibility };

const allEyesColorVisibilities = {
  "aqua eyes": preset.face,
  "black eyes": preset.face,
  "blue eyes": preset.face,
  "brown eyes": preset.face,
  "green eyes": preset.face,
  "grey eyes": preset.face,
  "orange eyes": preset.face,
  "pink eyes": preset.face,
  "purple eyes": preset.face,
  "red eyes": preset.face,
  "white eyes": preset.face,
  "yellow eyes": preset.face,
} as const satisfies { [key in FaceTag]?: Visibility };

const allEyesVisibilities = {
  "sparkling eyes": preset.face,
  "star-shaped pupils": preset.face,
  "+ +": preset.face,
  "symbol-shaped pupils": preset.face,
  "heterocromia": preset.face,
  "tsurime": preset.face,
  "tareme": preset.face,
  "jitome": preset.face,
} as const satisfies { [key in FaceTag]?: Visibility };

const allEyelashesVisibilities = {
  "eyelashes": preset.face,
  "long eyelashes": preset.face,
  "thick eyelashes": preset.face,
} as const satisfies { [key in FaceTag]?: Visibility };

const allDistinguishableFaceVisibilities = {
  "aqua forehead gemstone": preset.face,
  "black forehead gemstone": preset.face,
  "blue forehead gemstone": preset.face,
  "brown forehead gemstone": preset.face,
  "green forehead gemstone": preset.face,
  "grey forehead gemstone": preset.face,
  "orange forehead gemstone": preset.face,
  "pink forehead gemstone": preset.face,
  "purple forehead gemstone": preset.face,
  "red forehead gemstone": preset.face,
  "white forehead gemstone": preset.face,
  "yellow forehead gemstone": preset.face,
} as const satisfies { [key in FaceTag]?: Visibility };

export const allFaceVisibilities = {
  ...allEyebrowsVisibilities,
  ...allEyesColorVisibilities,
  ...allEyesVisibilities,
  ...allEyelashesVisibilities,
  ...allDistinguishableFaceVisibilities,
  "facial mark": preset.face,
  "forehead jewel": preset.face,
  "forehead": preset.face,
  "mole under eye": preset.face,
} as const satisfies { [key in FaceTag]: Visibility };
