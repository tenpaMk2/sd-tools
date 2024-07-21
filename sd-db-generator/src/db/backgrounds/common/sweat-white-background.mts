import type {
  BackgroundDefine,
  BackgroundEntries,
  BackgroundType,
} from "../backgrounds.mjs";

type Variation = `normal`;

const commonEntries = [
  `simple background`,
  `white background`,
  `sweat`,
  `steam`,
  `steaming body`,
] as const satisfies BackgroundEntries;

const entries = {
  normal: [...commonEntries],
} as const satisfies Record<Variation, BackgroundEntries>;

export const sweatWhiteBackground = ({
  variation,
  backgroundType,
}: {
  variation: Variation;
  backgroundType: BackgroundType;
}) =>
  ({
    backgroundType,
    "from-above": {
      entries: entries[variation],
    },
    "from-below": {
      entries: entries[variation],
    },
    "from-horizontal": {
      entries: entries[variation],
    },
    "removeShoes": false,
  }) as const satisfies BackgroundDefine;
