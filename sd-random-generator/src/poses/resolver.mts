import { Visibility } from "@tenpamk2/sd-tag-defines";
import { BackgroundType, CameraAngle } from "../backgrounds/resolver.mjs";
import { OutfitDefine } from "../outfits/resolver.mjs";
import { NormalEntry } from "../prompt-define.mjs";
import { PoseTag } from "../tag-defines/adapter.mjs";
import { nearCleanFloorFromAboveLying } from "./common/near-clean-floor-from-above-lying.mjs";
import { nearCleanFloorFromAboveWariza } from "./common/near-clean-floor-from-above-wariza.mjs";
import { standingFromHorizontalContrapposto } from "./common/standing-from-horizontal-contrapposto.mjs";

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
  "standing-from-horizontal-contrapposto": standingFromHorizontalContrapposto,
} as const satisfies {
  [k: string]: PoseDefine;
};

export type PoseKey = keyof typeof poseTable;
