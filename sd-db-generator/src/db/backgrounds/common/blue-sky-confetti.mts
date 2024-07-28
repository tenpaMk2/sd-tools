import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  standing: {
    "from-below": {
      entries: [`outdoors`, `blue sky`, `cloud`, `day`, `confetti`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `blue sky`, `day`, `confetti`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const blueSkyConfetti = ({
  backgroundType,
}: {
  backgroundType: `standing`;
}): BackgroundDefine =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
