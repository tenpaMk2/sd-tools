import { fromHorizontalAllFours } from "../../common/from-horizontal/all-fours.mjs";
import { PoseDefine } from "../../resolver.mjs";

export const fromHorizontalOnBedAllFours = {
  ...fromHorizontalAllFours,
  entries: [...fromHorizontalAllFours.entries, `on bed`],
} as const satisfies PoseDefine;
