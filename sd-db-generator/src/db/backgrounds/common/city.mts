import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "sitting-on": {
    "from-above": { entries: [`outdoors`, `city`, `day`, `bench`, `on bench`] },
    "from-horizontal": {
      entries: [`outdoors`, `city`, `day`, `bench`, `on bench`],
    },
  },
  "standing": {
    "from-above": { entries: [`outdoors`, `city`, `day`, `road`] },
    "from-below": { entries: [`outdoors`, `city`, `day`, `building`] },
    "from-horizontal": { entries: [`outdoors`, `city`, `day`] },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const city = ({
  backgroundType,
}: {
  backgroundType: `sitting-on` | `standing`;
}) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
