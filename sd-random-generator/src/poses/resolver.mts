import { Visibility } from "@tenpamk2/sd-tag-defines";
import { BackgroundType, CameraAngle } from "../backgrounds/resolver.mjs";
import { OutfitDefine } from "../outfits/resolver.mjs";
import { NormalEntry } from "../prompt-define.mjs";
import { PoseTag } from "../tag-defines/adapter.mjs";
import { nearCleanFloorFromAboveLyingOnStomach } from "./common/near-clean-floor-from-above-lying-on-stomach.mjs";
import { nearCleanFloorFromAboveLyingReachingTowardsViewer } from "./common/near-clean-floor-from-above-lying-reaching-towards-viewer.mjs";
import { nearCleanFloorFromAboveLying } from "./common/near-clean-floor-from-above-lying.mjs";
import { nearCleanFloorFromAboveWariza } from "./common/near-clean-floor-from-above-wariza.mjs";
import { nearCleanFloorFromHorizontalAllFoursFromBehind } from "./common/near-clean-floor-from-horizontal-all-fours-from-behind.mjs";
import { nearCleanFloorFromHorizontalAllFours } from "./common/near-clean-floor-from-horizontal-all-fours.mjs";
import { nearCleanFloorFromHorizontalKneelingSpreadLegs } from "./common/near-clean-floor-from-horizontal-kneeling-spread-legs.mjs";
import { nearCleanFloorFromHorizontalThePoseHeadRest } from "./common/near-clean-floor-from-horizontal-the-pose-head-rest.mjs";
import { standingFromAboveFromSideLookingAhead } from "./common/standing-from-above-from-side-looking-ahead.mjs";
import { standingFromAboveGrabbingOwnBreasts } from "./common/standing-from-above-grabbing-own-breasts.mjs";
import { standingFromAboveHandsOnOwnChests } from "./common/standing-from-above-hands-on-own-chests.mjs";
import { standingFromAbovePawPose } from "./common/standing-from-above-paw-pose.mjs";
import { standingFromAboveShushing } from "./common/standing-from-above-shushing.mjs";
import { standingFromAboveStanding } from "./common/standing-from-above-standing.mjs";
import { standingFromBelowArmsUp } from "./common/standing-from-below-arms-up.mjs";
import { standingFromBelowFromSideProfile } from "./common/standing-from-below-from-side-profile.mjs";
import { standingFromBelowFromSide } from "./common/standing-from-below-from-side.mjs";
import { standingFromBelowPawPose } from "./common/standing-from-below-paw-pose.mjs";
import { standingFromBelowSquatting } from "./common/standing-from-below-squatting.mjs";
import { standingFromBelowUpperBody } from "./common/standing-from-below-upper-body.mjs";
import { standingFromHorizontalArmsUp } from "./common/standing-from-horizontal-arms-up.mjs";
import { standingFromHorizontalContrapposto } from "./common/standing-from-horizontal-contrapposto.mjs";
import { standingFromHorizontalDoubleV } from "./common/standing-from-horizontal-double-v.mjs";
import { standingFromHorizontalFromSideLookingAhead } from "./common/standing-from-horizontal-from-side-looking-ahead.mjs";
import { standingFromHorizontalHandsOnOwnHips } from "./common/standing-from-horizontal-hands-on-own-hips.mjs";
import { standingFromHorizontalHeartHands } from "./common/standing-from-horizontal-heart-hands.mjs";
import { standingFromHorizontalPawPose } from "./common/standing-from-horizontal-paw-pose.mjs";
import { standingFromHorizontalPortrait } from "./common/standing-from-horizontal-portrait.mjs";
import { standingFromHorizontalTwistedTorso } from "./common/standing-from-horizontal-twisted-torso.mjs";
import { standingFromHorizontalV } from "./common/standing-from-horizontal-v.mjs";
import { sittingOnFromHorizontalSinging } from "./special/sitting-on-from-horizontal-singing.mjs";
import { standingFromAboveHoldingBouquet } from "./special/standing-from-above-holding-bouquet.mjs";
import { standingFromBelowCheeringWithPomPoms } from "./special/standing-from-below-cheering-with-pom-poms.mjs";
import { standingFromBelowHoldingBouquet } from "./special/standing-from-below-holding-bouquet.mjs";
import { standingFromHorizontalHoldingBouquet } from "./special/standing-from-horizontal-holding-bouquet.mjs";
import { standingFromHorizontalSingingFromSide } from "./special/standing-from-horizontal-singing-from-side.mjs";
import { standingFromHorizontalSinging } from "./special/standing-from-horizontal-singing.mjs";

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

export const commonPoseTable = {
  "near-clean-floor-from-above-lying-on-stomach":
    nearCleanFloorFromAboveLyingOnStomach,
  "near-clean-floor-from-above-lying-reaching-towards-viewer":
    nearCleanFloorFromAboveLyingReachingTowardsViewer,
  "near-clean-floor-from-above-lying": nearCleanFloorFromAboveLying,
  "near-clean-floor-from-above-wariza": nearCleanFloorFromAboveWariza,
  "near-clean-floor-from-horizontal-all-fours-from-behind":
    nearCleanFloorFromHorizontalAllFoursFromBehind,
  "near-clean-floor-from-horizontal-all-fours":
    nearCleanFloorFromHorizontalAllFours,
  "near-clean-floor-from-horizontal-kneeling-spread-legs":
    nearCleanFloorFromHorizontalKneelingSpreadLegs,
  "near-clean-floor-from-horizontal-the-pose-head-rest":
    nearCleanFloorFromHorizontalThePoseHeadRest,
  "standing-from-above-from-side-looking-ahead":
    standingFromAboveFromSideLookingAhead,
  "standing-from-above-grabbing-own-breasts":
    standingFromAboveGrabbingOwnBreasts,
  "standing-from-above-hands-on-own-chests": standingFromAboveHandsOnOwnChests,
  "standing-from-above-paw-pose": standingFromAbovePawPose,
  "standing-from-above-shushing": standingFromAboveShushing,
  "standing-from-above-standing": standingFromAboveStanding,
  "standing-from-below-arms-up": standingFromBelowArmsUp,
  "standing-from-below-from-side-profile": standingFromBelowFromSideProfile,
  "standing-from-below-from-side": standingFromBelowFromSide,
  "standing-from-below-paw-pose": standingFromBelowPawPose,
  "standing-from-below-squatting": standingFromBelowSquatting,
  "standing-from-below-upper-body": standingFromBelowUpperBody,
  "standing-from-horizontal-arms-up": standingFromHorizontalArmsUp,
  "standing-from-horizontal-contrapposto": standingFromHorizontalContrapposto,
  "standing-from-horizontal-double-v": standingFromHorizontalDoubleV,
  "standing-from-horizontal-from-side-looking-ahead":
    standingFromHorizontalFromSideLookingAhead,
  "standing-from-horizontal-hands-on-own-hips":
    standingFromHorizontalHandsOnOwnHips,
  "standing-from-horizontal-heart-hands": standingFromHorizontalHeartHands,
  "standing-from-horizontal-paw-pose": standingFromHorizontalPawPose,
  "standing-from-horizontal-portrait": standingFromHorizontalPortrait,
  "standing-from-horizontal-twisted-torso": standingFromHorizontalTwistedTorso,
  "standing-from-horizontal-v": standingFromHorizontalV,
} as const satisfies {
  [k: string]: PoseDefine;
};

export const specialPoseTable = {
  "sitting-on-from-horizontal-singing": sittingOnFromHorizontalSinging,
  "standing-from-above-holding-bouquet": standingFromAboveHoldingBouquet,
  "standing-from-below-cheering-with-pom-poms":
    standingFromBelowCheeringWithPomPoms,
  "standing-from-below-holding-bouquet": standingFromBelowHoldingBouquet,
  "standing-from-horizontal-holding-bouquet":
    standingFromHorizontalHoldingBouquet,
  "standing-from-horizontal-singing-from-side":
    standingFromHorizontalSingingFromSide,
  "standing-from-horizontal-singing": standingFromHorizontalSinging,
} as const satisfies {
  [k: string]: PoseDefine;
};

export const poseTable = {
  ...commonPoseTable,
  ...specialPoseTable,
} as const satisfies {
  [k: string]: PoseDefine;
};

export type PoseKey = keyof typeof poseTable;

// TODO: Warn if there are non-imported poses.
