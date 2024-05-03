import { Visibility } from "@tenpamk2/sd-tag-defines";
import { BackgroundType, CameraAngle } from "../backgrounds/resolver.mjs";
import { OutfitDefine } from "../outfits/resolver.mjs";
import { NormalEntry } from "../prompt-define.mjs";
import { PoseTag } from "../tag-defines/adapter.mjs";
import { nearCleanFloorFromAboveLying } from "./common/near-clean-floor-from-above-lying.mjs";
import { nearCleanFloorFromAboveWariza } from "./common/near-clean-floor-from-above-wariza.mjs";
import { nearCleanFloorFromHorizontalAllFoursFromBehind } from "./common/near-clean-floor-from-horizontal-all-fours-from-behind.mjs";
import { nearCleanFloorFromHorizontalAllFours } from "./common/near-clean-floor-from-horizontal-all-fours.mjs";
import { nearCleanFloorFromHorizontalKneelingSpreadLegs } from "./common/near-clean-floor-from-horizontal-kneeling-spread-legs.mjs";
import { standingFromAboveFromSideLookingAhead } from "./common/standing-from-above-from-side-looking-ahead.mjs";
import { standingFromAboveGrabbingOwnBreasts } from "./common/standing-from-above-grabbing-own-breasts.mjs";
import { standingFromBelowSquatting } from "./common/standing-from-below-squatting.mjs";
import { standingFromHorizontalContrapposto } from "./common/standing-from-horizontal-contrapposto.mjs";
import { standingFromHorizontalHeartHands } from "./common/standing-from-horizontal-heart-hands.mjs";

export type PoseSpecialVisibility = Omit<
  OutfitDefine["specialVisibility"],
  "underboobLevel"
> &
  Readonly<{
    underboobLevel: `from below` | `from horizontal` | `invisible`;
    upskirt: boolean;
  }>;

export const PoseUnderboobLevelOrder = {
  "from below": 0,
  "from horizontal": 1,
  "invisible": 2,
} as const satisfies {
  [k in PoseSpecialVisibility["underboobLevel"]]: number;
};

export type PoseDefine = {
  expectedBackgroundType: BackgroundType;
  cameraAngle: CameraAngle;
  entries: NormalEntry<PoseTag>[];
  visibility: Visibility;
  specialVisibility: PoseSpecialVisibility;
};

export const poseTable = {
  "near-clean-floor-from-above-wariza": nearCleanFloorFromAboveWariza,
  "near-clean-floor-from-above-lying": nearCleanFloorFromAboveLying,
  "near-clean-floor-from-horizontal-all-fours-from-behind":
    nearCleanFloorFromHorizontalAllFoursFromBehind,
  "near-clean-floor-from-horizontal-all-fours":
    nearCleanFloorFromHorizontalAllFours,
  "near-clean-floor-from-horizontal-kneeling-spread-legs":
    nearCleanFloorFromHorizontalKneelingSpreadLegs,
  "standing-standing-from-above-from-side-looking-ahead":
    standingFromAboveFromSideLookingAhead,
  "standing-from-above-grabbing-own-breasts":
    standingFromAboveGrabbingOwnBreasts,
  "standing-from-below-squatting": standingFromBelowSquatting,
  "standing-from-horizontal-contrapposto": standingFromHorizontalContrapposto,
  "standing-from-horizontal-heart-hands": standingFromHorizontalHeartHands,
} as const satisfies {
  [k: string]: PoseDefine;
};

export type PoseKey = keyof typeof poseTable;
