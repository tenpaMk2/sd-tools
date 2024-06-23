import type { Visibility } from "@tenpamk2/sd-tag-defines";
import type { PoseTag, TagEntry } from "../../index.mjs";
import type {
  BackgroundType,
  CameraAngle,
} from "../backgrounds/backgrounds.mjs";
import type { EmotionKey } from "../emotions/emotions.mjs";
import type { OutfitDefine } from "../outfits/outfits.mjs";
import { nearCleanFloorAllFoursFromBehind } from "./common/near-clean-floor-all-fours-from-behind.mjs";
import { nearCleanFloorAllFours } from "./common/near-clean-floor-all-fours.mjs";
import { nearCleanFloorFromAboveLyingReachingTowardsViewer } from "./common/near-clean-floor-from-above-lying-reaching-towards-viewer.mjs";
import { nearCleanFloorKneelingSpreadLegs } from "./common/near-clean-floor-kneeling-spread-legs.mjs";
import { nearCleanFloorLyingOnBack } from "./common/near-clean-floor-lying-on-back.mjs";
import { nearCleanFloorLyingOnStomach } from "./common/near-clean-floor-lying-on-stomach.mjs";
import { nearCleanFloorThePose } from "./common/near-clean-floor-the-pose.mjs";
import { nearCleanFloorWariza } from "./common/near-clean-floor-wariza.mjs";
import { sittingOnSitting } from "./common/sitting-on-sitting.mjs";
import { standingArmsUp } from "./common/standing-arms-up.mjs";
import { standingArmsBehindBack } from "./common/standing-common-arms-behind-back.mjs";
import { standingContrapposto } from "./common/standing-contrapposto.mjs";
import { standingDoubleV } from "./common/standing-double-v.mjs";
import { standingFromSide } from "./common/standing-from-side.mjs";
import { standingGrabbingOwnBreasts } from "./common/standing-grabbing-own-breasts.mjs";
import { standingHandsOnOwnChest } from "./common/standing-hands-on-own-chest.mjs";
import { standingHandsOnOwnHips } from "./common/standing-hands-on-own-hips.mjs";
import { standingHeartHands } from "./common/standing-heart-hands.mjs";
import { standingLeaningForwardFromBehind } from "./common/standing-leaning-forward-from-behind.mjs";
import { standingLeaningForwardVArms } from "./common/standing-leaning-forward-v-arms.mjs";
import { standingLookingAheadFromSide } from "./common/standing-looking-ahead-from-side.mjs";
import { standingPawPose } from "./common/standing-paw-pose.mjs";
import { standingPortrait } from "./common/standing-portrait.mjs";
import { standingShushing } from "./common/standing-shushing.mjs";
import { standingSquatting } from "./common/standing-squatting.mjs";
import { standingTwistedTorso } from "./common/standing-twisted-torso.mjs";
import { standingV } from "./common/standing-v.mjs";
import { sittingOnSingingFromSide } from "./special/sitting-on-singing-from-side.mjs";
import { sittingOnSinging } from "./special/sitting-on-singing.mjs";
import { standingCheering } from "./special/standing-cheering.mjs";
import { standingHoldingBouquet } from "./special/standing-holding-bouquet.mjs";
import { standingHoldingVolleyball } from "./special/standing-holding-volleyball.mjs";
import { standingSinging } from "./special/standing-singing.mjs";

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
} as const satisfies Record<PoseSpecialVisibility["underboobLevel"], number>;

export type PoseDefine = {
  expectedBackgroundType: BackgroundType;
  cameraAngle: CameraAngle;
  entries: TagEntry<PoseTag>[];
  visibility: Visibility;
  specialVisibility: PoseSpecialVisibility;
  emotionProbabilitiesAtPose: Partial<Record<EmotionKey, number>>;
};

export const commonPoseTable = {
  "near-clean-floor-from-above-all-fours-from-behind":
    nearCleanFloorAllFoursFromBehind(`from-above`),
  "near-clean-floor-from-above-kneeling-spread-legs":
    nearCleanFloorKneelingSpreadLegs(`from-above`),
  "near-clean-floor-from-above-lying-on-back":
    nearCleanFloorLyingOnBack(`from-above`),
  "near-clean-floor-from-above-lying-on-stomach":
    nearCleanFloorLyingOnStomach(`from-above`),
  "near-clean-floor-from-above-lying-reaching-towards-viewer":
    nearCleanFloorFromAboveLyingReachingTowardsViewer(),
  "near-clean-floor-from-above-the-pose": nearCleanFloorThePose(`from-above`),
  "near-clean-floor-from-above-wariza": nearCleanFloorWariza(`from-above`),
  "near-clean-floor-from-below-all-fours-from-behind":
    nearCleanFloorAllFoursFromBehind(`from-below`),
  "near-clean-floor-from-below-all-fours": nearCleanFloorAllFours(`from-below`),
  "near-clean-floor-from-below-kneeling-spread-legs":
    nearCleanFloorKneelingSpreadLegs(`from-below`),
  "near-clean-floor-from-below-wariza": nearCleanFloorWariza(`from-below`),
  "near-clean-floor-from-horizontal-all-fours-from-behind":
    nearCleanFloorAllFoursFromBehind(`from-horizontal`),
  "near-clean-floor-from-horizontal-all-fours":
    nearCleanFloorAllFours(`from-horizontal`),
  "near-clean-floor-from-horizontal-kneeling-spread-legs":
    nearCleanFloorKneelingSpreadLegs(`from-horizontal`),
  "near-clean-floor-from-horizontal-lying-on-stomach":
    nearCleanFloorLyingOnStomach(`from-horizontal`),
  "near-clean-floor-from-horizontal-the-pose":
    nearCleanFloorThePose(`from-horizontal`),
  "near-clean-floor-from-horizontal-wariza":
    nearCleanFloorWariza(`from-horizontal`),
  "sitting-from-above-on-sitting": sittingOnSitting(`from-above`),
  "sitting-from-below-on-sitting": sittingOnSitting(`from-below`),
  "sitting-from-horizontal-on-sitting": sittingOnSitting(`from-horizontal`),
  "standing-from-above-arms-behind-back": standingArmsBehindBack(`from-above`),
  "standing-from-above-arms-up": standingArmsUp(`from-above`),
  "standing-from-above-contrapposto": standingContrapposto(`from-above`),
  "standing-from-above-double-v": standingDoubleV(`from-above`),
  "standing-from-above-from-side": standingFromSide(`from-above`),
  "standing-from-above-grabbing-own-breasts":
    standingGrabbingOwnBreasts(`from-above`),
  "standing-from-above-hands-on-own-chest":
    standingHandsOnOwnChest(`from-above`),
  "standing-from-above-hands-on-own-hips": standingHandsOnOwnHips(`from-above`),
  "standing-from-above-heart-hands": standingHeartHands(`from-above`),
  "standing-from-above-leaning-forward-from-behind":
    standingLeaningForwardFromBehind(`from-above`),
  "standing-from-above-leaning-forward-v-arms":
    standingLeaningForwardVArms(`from-above`),
  "standing-from-above-looking-ahead":
    standingLookingAheadFromSide(`from-above`),
  "standing-from-above-paw-pose": standingPawPose(`from-above`),
  "standing-from-above-portrait": standingPortrait(`from-above`),
  "standing-from-above-shushing": standingShushing(`from-above`),
  "standing-from-above-squatting": standingSquatting(`from-above`),
  "standing-from-above-twisted-torso": standingTwistedTorso(`from-above`),
  "standing-from-above-v": standingV(`from-above`),
  "standing-from-below-arms-behind-back": standingArmsBehindBack(`from-below`),
  "standing-from-below-arms-up": standingArmsUp(`from-below`),
  "standing-from-below-contrapposto": standingContrapposto(`from-below`),
  "standing-from-below-double-v": standingDoubleV(`from-below`),
  "standing-from-below-from-side": standingFromSide(`from-below`),
  "standing-from-below-grabbing-own-breasts":
    standingGrabbingOwnBreasts(`from-below`),
  "standing-from-below-hands-on-own-chest":
    standingHandsOnOwnChest(`from-below`),
  "standing-from-below-hands-on-own-hips": standingHandsOnOwnHips(`from-below`),
  "standing-from-below-heart-hands": standingHeartHands(`from-below`),
  "standing-from-below-leaning-forward-from-behind":
    standingLeaningForwardFromBehind(`from-below`),
  "standing-from-below-leaning-forward-v-arms":
    standingLeaningForwardVArms(`from-below`),
  "standing-from-below-paw-pose": standingPawPose(`from-below`),
  "standing-from-below-portrait": standingPortrait(`from-below`),
  "standing-from-below-shushing": standingShushing(`from-below`),
  "standing-from-below-squatting": standingSquatting(`from-below`),
  "standing-from-below-twisted-torso": standingTwistedTorso(`from-below`),
  "standing-from-below-v": standingV(`from-below`),
  "standing-from-horizontal-arms-behind-back":
    standingArmsBehindBack(`from-horizontal`),
  "standing-from-horizontal-arms-up": standingArmsUp(`from-horizontal`),
  "standing-from-horizontal-contrapposto":
    standingContrapposto(`from-horizontal`),
  "standing-from-horizontal-double-v": standingDoubleV(`from-horizontal`),
  "standing-from-horizontal-from-side": standingFromSide(`from-horizontal`),
  "standing-from-horizontal-grabbing-own-breasts":
    standingGrabbingOwnBreasts(`from-horizontal`),
  "standing-from-horizontal-hands-on-own-chest":
    standingHandsOnOwnChest(`from-horizontal`),
  "standing-from-horizontal-hands-on-own-hips":
    standingHandsOnOwnHips(`from-horizontal`),
  "standing-from-horizontal-heart-hands": standingHeartHands(`from-horizontal`),
  "standing-from-horizontal-leaning-forward-from-behind":
    standingLeaningForwardFromBehind(`from-horizontal`),
  "standing-from-horizontal-leaning-forward-v-arms":
    standingLeaningForwardVArms(`from-horizontal`),
  "standing-from-horizontal-looking-ahead":
    standingLookingAheadFromSide(`from-horizontal`),
  "standing-from-horizontal-paw-pose": standingPawPose(`from-horizontal`),
  "standing-from-horizontal-portrait": standingPortrait(`from-horizontal`),
  "standing-from-horizontal-shushing": standingShushing(`from-horizontal`),
  "standing-from-horizontal-squatting": standingSquatting(`from-horizontal`),
  "standing-from-horizontal-twisted-torso":
    standingTwistedTorso(`from-horizontal`),
  "standing-from-horizontal-v": standingV(`from-horizontal`),
} as const satisfies Record<string, PoseDefine>;

export const specialPoseTable = {
  "sitting-on-from-horizontal-singing-from-side":
    sittingOnSingingFromSide(`from-horizontal`),
  "sitting-on-from-horizontal-singing": sittingOnSinging(`from-horizontal`),
  "standing-from-above-cheering": standingCheering(`from-above`),
  "standing-from-above-holding-bouquet": standingHoldingBouquet(`from-above`),
  "standing-from-above-holding-volleyball":
    standingHoldingVolleyball(`from-above`),
  "standing-from-below-cheering": standingCheering(`from-below`),
  "standing-from-below-holding-bouquet": standingHoldingBouquet(`from-below`),
  "standing-from-below-holding-volleyball":
    standingHoldingVolleyball(`from-below`),
  "standing-from-horizontal-cheering": standingCheering(`from-horizontal`),
  "standing-from-horizontal-holding-bouquet":
    standingHoldingBouquet(`from-horizontal`),
  "standing-from-horizontal-holding-volleyball":
    standingHoldingVolleyball(`from-horizontal`),
  "standing-from-horizontal-singing": standingSinging(`from-horizontal`),
} as const satisfies Record<string, PoseDefine>;

export const poseTable = {
  ...commonPoseTable,
  ...specialPoseTable,
} as const satisfies Record<string, PoseDefine>;

export type PoseTable = typeof poseTable;
export type PoseKey = keyof PoseTable;
