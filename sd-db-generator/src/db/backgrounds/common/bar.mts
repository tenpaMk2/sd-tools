import type {
  BackgroundDefine,
  BackgroundEntries,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const commonEntries = [
  `indoors`,
  `bar \\(place\\)`,
  `alcohol`,
  `beer`,
  `beer mug`,
  `stool`,
] as const satisfies BackgroundEntries;

const cameraAngle = {
  "sitting-on": {
    "from-above": { entries: [...commonEntries, `on stool`] },
    "from-below": { entries: [...commonEntries, `on stool`] },
    "from-horizontal": { entries: [...commonEntries, `on stool`] },
  },
  "standing": {
    "from-above": { entries: [...commonEntries] },
    "from-below": { entries: [...commonEntries] },
    "from-horizontal": { entries: [...commonEntries] },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const bar = ({
  backgroundType,
}: {
  backgroundType: `sitting-on` | `standing`;
}) =>
  ({
    backgroundType: backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
