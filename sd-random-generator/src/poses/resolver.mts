import { PoseTag, Visibility } from "@tenpamk2/sd-tag-defines";
import { BackgroundType } from "../backgrounds/resolver.mjs";
import { OutfitDefine } from "../outfits/resolver.mjs";
import { NormalEntry } from "../prompt-define.mjs";
import { fromAboveFromSideLookingAhead } from "./common/from-above/from-side-looking-ahead.mjs";
import { fromAboveFullBodyLying } from "./common/from-above/full-body-lying.mjs";
import { fromAboveGrabbingOwnBreasts } from "./common/from-above/grabbing-own-breasts.mjs";
import { fromAboveHandsOnOwnChest } from "./common/from-above/hands-on-own-chests.mjs";
import { fromAboveLyingOnStomach } from "./common/from-above/lying-on-stomach.mjs";
import { fromAboveLyingReachingTowardsViewer } from "./common/from-above/lying-reaching-towards-viewer.mjs";
import { fromAboveLying } from "./common/from-above/lying.mjs";
import { fromAbovePawPose } from "./common/from-above/paw-pose.mjs";
import { fromAboveShushing } from "./common/from-above/shushing.mjs";
import { fromAboveStanding } from "./common/from-above/standing.mjs";
import { fromAboveWariza } from "./common/from-above/wariza.mjs";
import { fromBelowArmsUp } from "./common/from-below/arms-up.mjs";
import { fromBelowFromSideProfile } from "./common/from-below/from-side-profile.mjs";
import { fromBelowFromSide } from "./common/from-below/from-side.mjs";
import { fromBelowPawPose } from "./common/from-below/paw-pose.mjs";
import { fromBelowSquatting } from "./common/from-below/squatting.mjs";
import { fromBelowUpperBody } from "./common/from-below/upper-body.mjs";
import { fromHorizontalAllFours } from "./common/from-horizontal/all-fours.mjs";
import { fromHorizontalArmsUp } from "./common/from-horizontal/arms-up.mjs";
import { fromHorizontalContrapposto } from "./common/from-horizontal/contrapposto.mjs";
import { fromHorizontalDoubleV } from "./common/from-horizontal/double-v.mjs";
import { fromHorizontalFromSideLookingAhead } from "./common/from-horizontal/from-side-looking-ahead.mjs";
import { fromHorizontalHandsOnOwnHips } from "./common/from-horizontal/hands-on-own-hips.mjs";
import { fromHorizontalHeartHands } from "./common/from-horizontal/heart-hands.mjs";
import { fromHorizontalKneelingSpreadLegs } from "./common/from-horizontal/kneeling-spread-legs.mjs";
import { fromHorizontalPawPose } from "./common/from-horizontal/paw-pose.mjs";
import { fromHorizontalPortrait } from "./common/from-horizontal/portrait.mjs";
import { fromHorizontalSingingFromSide } from "./common/from-horizontal/singing-from-side.mjs";
import { fromHorizontalSinging } from "./common/from-horizontal/singing.mjs";
import { fromHorizontalThePoseHeadRest } from "./common/from-horizontal/the-pose-head-rest.mjs";
import { fromHorizontalTwistedTorso } from "./common/from-horizontal/twisted-torso.mjs";
import { fromHorizontalUndressingFromSide } from "./common/from-horizontal/undressing-from-side.mjs";
import { fromHorizontalV } from "./common/from-horizontal/v.mjs";
import { fromAboveHoldingBouquet } from "./special/from-above/holding-bouquet.mjs";
import { fromAboveOnBedLyingOnStomach } from "./special/from-above/on-bed-lying-on-stomach.mjs";
import { fromAboveOnBedLyingReachingTowardsViewer } from "./special/from-above/on-bed-lying-reaching-towards-viewer.mjs";
import { fromAboveOnBedLying } from "./special/from-above/on-bed-lying.mjs";
import { fromAboveOnBedWariza } from "./special/from-above/on-bed-wariza.mjs";
import { fromBelowCheeringWithPomPoms } from "./special/from-below/cheering-with-pom-poms.mjs";
import { fromBelowHoldingBouquet } from "./special/from-below/holding-bouquet.mjs";
import { fromHorizontalHoldingBouquet } from "./special/from-horizontal/holding-bouquet.mjs";
import { fromHorizontalOnBedAllFoursFromBehind } from "./special/from-horizontal/on-bed-all-fours-from-behind.mjs";
import { fromHorizontalOnBedAllFours } from "./special/from-horizontal/on-bed-all-fours.mjs";
import { fromHorizontalOnBedThePoseHeadRest } from "./special/from-horizontal/on-bed-the-pose-head-rest.mjs";

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
  invisible: 2,
} as const satisfies {
  [k in PoseSpecialVisibility["underboobLevel"]]: number;
};

export type PoseDefine = {
  entries: NormalEntry<PoseTag>[];
  visibility: Visibility;
  specialVisibility: PoseSpecialVisibility;
};

export const poseTable = {
  "from-above": {
    "from-side-looking-ahead": fromAboveFromSideLookingAhead,
    "full-body-lying": fromAboveFullBodyLying,
    "grabbing-own-breasts": fromAboveGrabbingOwnBreasts,
    "hands-on-own-chest": fromAboveHandsOnOwnChest,
    "lying-on-stomach": fromAboveLyingOnStomach,
    "lying-reaching-towards-viewer": fromAboveLyingReachingTowardsViewer,
    lying: fromAboveLying,
    "paw-pose": fromAbovePawPose,
    shushing: fromAboveShushing,
    standing: fromAboveStanding,
    wariza: fromAboveWariza,
    "holding-bouquet": fromAboveHoldingBouquet,
    "on-bed-lying-on-stomach": fromAboveOnBedLyingOnStomach,
    "on-bed-lying-reaching-towards-viewer":
      fromAboveOnBedLyingReachingTowardsViewer,
    "on-bed-lying": fromAboveOnBedLying,
    "on-bed-wariza": fromAboveOnBedWariza,
  },
  "from-below": {
    "arms-up": fromBelowArmsUp,
    "from-side": fromBelowFromSide,
    "from-side-profile": fromBelowFromSideProfile,
    "paw-pose": fromBelowPawPose,
    squatting: fromBelowSquatting,
    "upper-body": fromBelowUpperBody,
    "cheering-with-pom-poms": fromBelowCheeringWithPomPoms,
    "holding-bouquet": fromBelowHoldingBouquet,
  },
  "from-horizontal": {
    "all-fours-from-behind": fromHorizontalAllFours,
    "all-fours": fromHorizontalAllFours,
    "arms-up": fromHorizontalArmsUp,
    contrapposto: fromHorizontalContrapposto,
    "double-v": fromHorizontalDoubleV,
    "from-side-looking-ahead": fromHorizontalFromSideLookingAhead,
    "hands-on-own-hips": fromHorizontalHandsOnOwnHips,
    "heart-hands": fromHorizontalHeartHands,
    "kneeling-spread-legs": fromHorizontalKneelingSpreadLegs,
    "paw-pose": fromHorizontalPawPose,
    portrait: fromHorizontalPortrait,
    "singing-from-side": fromHorizontalSingingFromSide,
    singing: fromHorizontalSinging,
    "the-pose-head-rest": fromHorizontalThePoseHeadRest,
    "twisted-torso": fromHorizontalTwistedTorso,
    v: fromHorizontalV,
    "holding-bouquet": fromHorizontalHoldingBouquet,
    "on-bed-all-fours-from-behind": fromHorizontalOnBedAllFoursFromBehind,
    "on-bed-all-fours": fromHorizontalOnBedAllFours,
    "on-bed-kneeling-spread-legs": fromHorizontalKneelingSpreadLegs,
    "on-bed-the-pose-head-rest": fromHorizontalOnBedThePoseHeadRest,
    "undressing-from-side": fromHorizontalUndressingFromSide,
  },
} as const satisfies {
  [k in BackgroundType]: {
    [k: string]: PoseDefine;
  };
};

export type PoseKey = Readonly<{
  "from-above": keyof (typeof poseTable)["from-above"];
  "from-below": keyof (typeof poseTable)["from-below"];
  "from-horizontal": keyof (typeof poseTable)["from-horizontal"];
}>;

// TODO: Karaoke
