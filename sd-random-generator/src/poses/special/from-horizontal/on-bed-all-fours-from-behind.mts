import { fromHorizontalAllFoursFromBehind } from "../../common/from-horizontal/all-fours-from-behind.mjs";
import { PoseDefine } from "../../resolver.mjs";

export const fromHorizontalOnBedAllFoursFromBehind = {
  ...fromHorizontalAllFoursFromBehind,
  entries: [...fromHorizontalAllFoursFromBehind.entries, `on bed`],
} as const satisfies PoseDefine;
