import { BodyTag } from "./tag-defines/body.mjs";
import { FaceTag } from "./tag-defines/face.mjs";
import { GlassesTag } from "./tag-defines/glasses.mjs";
import { HairTag } from "./tag-defines/hair.mjs";
import { HeadOutfitTag } from "./tag-defines/head-outfit.mjs";
import { OutfitTag } from "./tag-defines/outfit.mjs";
import { allBodyVisibilities } from "./visibility-defines/body.mjs";
import { allFaceVisibilities } from "./visibility-defines/face.mjs";
import { allGlassesVisibilities } from "./visibility-defines/glasses.mjs";
import { allHairVisibilities } from "./visibility-defines/hair.mjs";
import { allHeadOutfitVisibilities } from "./visibility-defines/head-outfit.mjs";
import { allOutfitVisibilities } from "./visibility-defines/outfit.mjs";

export const allVisibilityKeys = [
  `frontHead`,
  `sideHead`,
  `backHead`,
  `frontBreast`,
  `sideBreast`,
  `backBreast`,
  `frontMidriff`,
  `sideMidriff`,
  `backMidriff`,
  `frontHipAndThigh`,
  `sideHipAndThigh`,
  `backHipAndThigh`,
  `foot`,
  `wristAndHand`,
  `aroundBody`,
] as const satisfies string[];
export type VisibilityKeys = (typeof allVisibilityKeys)[number];

export type Visibility = Readonly<{
  [k in VisibilityKeys]: boolean;
}>;

export const tagVisibilities = {
  ...allBodyVisibilities,
  ...allFaceVisibilities,
  ...allGlassesVisibilities,
  ...allHairVisibilities,
  ...allHeadOutfitVisibilities,
  ...allOutfitVisibilities,
} as const satisfies {
  [K in
    | BodyTag
    | FaceTag
    | GlassesTag
    | HairTag
    | HeadOutfitTag
    | OutfitTag]: Visibility;
};
