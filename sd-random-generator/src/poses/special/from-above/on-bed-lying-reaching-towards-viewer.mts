import { fromAboveLyingReachingTowardsViewer } from "../../common/from-above/lying-reaching-towards-viewer.mjs";
import { PoseDefine } from "../../resolver.mjs";

export const fromAboveOnBedLyingReachingTowardsViewer = {
  ...fromAboveLyingReachingTowardsViewer,
  entries: [...fromAboveLyingReachingTowardsViewer.entries, `on bed`],
} as const satisfies PoseDefine;
