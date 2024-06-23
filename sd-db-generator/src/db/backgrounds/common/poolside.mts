import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "near-clean-floor": {
    "from-above": {
      entries: [`outdoors`, `pool`, `poolside`, `wet`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `pool`, `poolside`, `wet`],
    },
  },
  "sitting-on": {
    "from-above": {
      entries: [`outdoors`, `pool`, `poolside`, `wet`, `partially submerged`],
    },
    "from-below": {
      entries: [
        `outdoors`,
        `pool`,
        `poolside`,
        `wet`,
        `partially submerged`,
        `blue sky`,
      ],
    },
    "from-horizontal": {
      entries: [`outdoors`, `pool`, `poolside`, `wet`, `partially submerged`],
    },
  },
  "standing": {
    "from-above": {
      entries: [`outdoors`, `pool`, `poolside`, `wet`],
    },
    "from-below": {
      entries: [`outdoors`, `poolside`, `wet`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `pool`, `poolside`, `wet`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const poolside = ({
  backgroundType,
}: {
  backgroundType: BackgroundType;
}) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
