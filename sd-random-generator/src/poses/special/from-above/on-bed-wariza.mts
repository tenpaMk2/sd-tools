import { fromAboveWariza } from "../../common/from-above/wariza.mjs";
import { PoseDefine } from "../../resolver.mjs";

export const fromAboveOnBedWariza = {
  ...fromAboveWariza,
  entries: [...fromAboveWariza.entries, `on bed`],
} as const satisfies PoseDefine;
