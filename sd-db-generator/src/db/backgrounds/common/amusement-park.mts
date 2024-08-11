import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  standing: {
    "from-below": {
      entries: [`outdoors`, `amusement park`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `amusement park`, `balloon`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const amusementPark = ({
  backgroundType,
}: {
  backgroundType: `standing`;
}): BackgroundDefine =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
