import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  standing: {
    "from-above": {
      entries: [`outdoors`, `cityscape`, `city lights`, `rooftop`, `night`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `cityscape`, `city lights`, `rooftop`, `night`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const nightRooftop = ({
  backgroundType,
}: {
  backgroundType: `standing`;
}) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
