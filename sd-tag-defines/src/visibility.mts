import { BodyFeatureTag } from "./tag-defines/body-feature.mjs";
import { BodyOutfitTag } from "./tag-defines/body-outfit.mjs";
import { FaceTag } from "./tag-defines/face.mjs";
import { GlassesTag } from "./tag-defines/glasses.mjs";
import { HairTag } from "./tag-defines/hair.mjs";
import { HeadOutfitTag } from "./tag-defines/head-outfit.mjs";
import { allBodyFeatureVisibilities } from "./visibility-defines/body-feature.mjs";
import { allBodyOutfitVisibilities } from "./visibility-defines/body-outfit.mjs";
import { allFaceVisibilities } from "./visibility-defines/face.mjs";
import { allGlassesVisibilities } from "./visibility-defines/glasses.mjs";
import { allHairVisibilities } from "./visibility-defines/hair.mjs";
import { allHeadOutfitVisibilities } from "./visibility-defines/head-outfit.mjs";

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
export type VisibilityKey = (typeof allVisibilityKeys)[number];

export type Visibility = Record<VisibilityKey, boolean>;

export const tagVisibilities = {
  ...allBodyFeatureVisibilities,
  ...allFaceVisibilities,
  ...allGlassesVisibilities,
  ...allHairVisibilities,
  ...allHeadOutfitVisibilities,
  ...allBodyOutfitVisibilities,
} as const satisfies Record<
  | BodyOutfitTag
  | BodyFeatureTag
  | FaceTag
  | GlassesTag
  | HairTag
  | HeadOutfitTag,
  Visibility
>;
