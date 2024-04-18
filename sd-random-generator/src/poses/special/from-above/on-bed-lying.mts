import { fromAboveLying } from "../../common/from-above/lying.mjs";
import { PoseDefine } from "../../resolver.mjs";

export const fromAboveOnBedLying = {
  ...fromAboveLying,
  entries: [...fromAboveLying.entries, `on bed`],
} as const satisfies PoseDefine;
