import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "standing": {
    "from-above": { entries: [`indoors`, `casino`, `playing card`] },
    "from-below": { entries: [`indoors`, `casino`, `playing card`, `ceiling`] },
    "from-horizontal": { entries: [`indoors`, `casino`, `playing card`] },
  },
  "sitting-on": {
    "from-above": { entries: [`indoors`, `casino`, `playing card`, `on desk`] },
    "from-horizontal": {
      entries: [`indoors`, `casino`, `playing card`, `on desk`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const casino = ({
  backgroundType,
}: {
  backgroundType: `sitting-on` | `standing`;
}): BackgroundDefine =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
