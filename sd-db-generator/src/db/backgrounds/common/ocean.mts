import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  standing: {
    "from-above": {
      entries: [`outdoors`, `ocean`, `blue sky`, `wet`, `partially submerged`],
    },
    "from-below": { entries: [`outdoors`, `blue sky`, `ocean`] }, // TODO: splashing
    "from-horizontal": {
      entries: [`outdoors`, `ocean`, `blue sky`, `wet`, `partially submerged`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const ocean = ({
  backgroundType,
}: {
  backgroundType: `standing`;
}): BackgroundDefine =>
  ({
    backgroundType: `standing`,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
