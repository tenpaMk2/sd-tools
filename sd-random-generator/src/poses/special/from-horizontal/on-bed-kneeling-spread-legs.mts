import { fromHorizontalKneelingSpreadLegs } from "../../common/from-horizontal/kneeling-spread-legs.mjs";
import { PoseDefine } from "../../resolver.mjs";

export const fromHorizontalOnBedKneelingSpreadLegs = {
  ...fromHorizontalKneelingSpreadLegs,
  entries: [...fromHorizontalKneelingSpreadLegs.entries, `on bed`],
} as const satisfies PoseDefine;
