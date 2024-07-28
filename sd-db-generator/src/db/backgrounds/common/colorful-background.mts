import type {
  BackgroundDefine,
  BackgroundEntries,
  BackgroundType,
} from "../backgrounds.mjs";

type Variation = `normal` | `heart`;

const commonEntries = [
  `simple background`,
  [
    { entries: [`blue background`] },
    { entries: [`pink background`], probability: 2 },
    { entries: [`red background`] },
    { entries: [`white background`], probability: 3 },
    { entries: [`yellow background`] },
  ],
] as const satisfies BackgroundEntries;

const entries = {
  normal: [...commonEntries],
  heart: [...commonEntries, `heart background`],
} as const satisfies Record<Variation, BackgroundEntries>;

export const colorfulBackground = ({
  variation,
  backgroundType,
}: {
  variation: Variation;
  backgroundType: BackgroundType;
}): BackgroundDefine =>
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
