import { Visibility } from "@tenpamk2/sd-tag-defines";
import { PoseTag, TagEntry } from "../../index.mjs";
import { BackgroundType, CameraAngle } from "../backgrounds/backgrounds.mjs";
import { EmotionKey } from "../emotions/emotions.mjs";
import { OutfitDefine } from "../outfits/outfits.mjs";
import { nearCleanFloorFromAboveLyingReachingTowardsViewer } from "./common/near-clean-floor-from-above-lying-reaching-towards-viewer.mjs";
import { standingArmsBehindBack } from "./common/standing-common-arms-behind-back.mjs";

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
  "near-clean-floor-from-above-lying-reaching-towards-viewer":
    nearCleanFloorFromAboveLyingReachingTowardsViewer(),
  "standing-from-above-arms-behind-back": standingArmsBehindBack(`from-above`),
  "standing-from-below-arms-behind-back": standingArmsBehindBack(`from-below`),
  "standing-from-horizontal-arms-behind-back":
    standingArmsBehindBack(`from-horizontal`),
} as const satisfies Record<string, PoseDefine>;

export const specialPoseTable = {} as const satisfies Record<
  string,
  PoseDefine
>;

export const poseTable = {
  ...commonPoseTable,
  ...specialPoseTable,
} as const satisfies Record<string, PoseDefine>;

export type PoseTable = typeof poseTable;
export type PoseKey = keyof PoseTable;
