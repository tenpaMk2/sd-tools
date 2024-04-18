import { fromHorizontalThePoseHeadRest } from "../../common/from-horizontal/the-pose-head-rest.mjs";
import { PoseDefine } from "../../resolver.mjs";

export const fromHorizontalOnBedThePoseHeadRest = {
  ...fromHorizontalThePoseHeadRest,
  entries: [...fromHorizontalThePoseHeadRest.entries, `on bed`],
} as const satisfies PoseDefine;
