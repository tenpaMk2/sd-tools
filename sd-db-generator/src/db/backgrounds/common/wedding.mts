import type { BackgroundDefine, BackgroundType } from "../backgrounds.mjs";

export const wedding = ({
  backgroundType,
}: {
  backgroundType: BackgroundType;
}) =>
  ({
    backgroundType,
    "from-above": {
      entries: [`wedding`, `petals`, `white background`, `falling petals`],
    },
    "from-below": {
      entries: [`wedding`, `petals`, `white background`, `falling petals`],
    },
    "from-horizontal": {
      entries: [`wedding`, `petals`, `white background`, `falling petals`],
    },
    "removeShoes": false,
  }) as const satisfies BackgroundDefine;
