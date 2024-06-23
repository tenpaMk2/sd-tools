import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "standing": {
    "from-below": {
      entries: [`night`, `night sky`, `moon`],
    },
  },
  "sitting-on": {
    "from-below": {
      entries: [`night`, `night sky`, `moon`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const nightMoon = ({
  backgroundType,
}: {
  backgroundType: `sitting-on` | `standing`;
}) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
