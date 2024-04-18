import { fromAboveLyingOnStomach } from "../../common/from-above/lying-on-stomach.mjs";
import { PoseDefine } from "../../resolver.mjs";

export const fromAboveOnBedLyingOnStomach = {
  ...fromAboveLyingOnStomach,
  entries: [...fromAboveLyingOnStomach.entries, `on bed`],
} as const satisfies PoseDefine;
