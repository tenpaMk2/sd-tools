import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "sitting-on": {
    "from-above": {
      entries: [`indoors`, `office`, `floor`, `office chair`, `on chair`],
    },
    "from-horizontal": {
      entries: [`indoors`, `office`, `office chair`, `on chair`],
    },
  },
  "standing": {
    "from-above": {
      entries: [`indoors`, `office`, `floor`],
    },
    "from-below": {
      entries: [`indoors`, `office`, `ceiling`],
    },
    "from-horizontal": {
      entries: [`indoors`, `office`, `window`, `blurry background`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const office = ({
  backgroundType,
}: {
  backgroundType: `sitting-on` | `standing`;
}): BackgroundDefine =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
