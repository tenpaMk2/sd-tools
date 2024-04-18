import { PoseDefine } from "../../resolver.mjs";
import { fromHorizontalArmsUp } from "../from-horizontal/arms-up.mjs";

export const fromBelowArmsUp = {
  ...fromHorizontalArmsUp,
  entries: [...fromHorizontalArmsUp.entries, `from below`, `looking down`],
  specialVisibility: {
    ...fromHorizontalArmsUp.specialVisibility,
    underboobLevel: `from below`,
    upskirt: true,
  },
} as const satisfies PoseDefine;
