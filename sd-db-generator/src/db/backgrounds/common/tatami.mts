import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "near-clean-floor": {
    "from-above": {
      entries: [`indoors`, `tatami`, `on floor`],
    },
    "from-horizontal": {
      entries: [`indoors`, `tatami`, `on floor`],
    },
  },
  "sitting-on": {
    "from-above": {
      entries: [`indoors`, `tatami`, `on floor`],
    },
    "from-horizontal": {
      entries: [`indoors`, `tatami`, `on floor`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const tatami = ({
  backgroundType,
}: {
  backgroundType: `near-clean-floor` | `sitting-on`;
}) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: true,
  }) as const satisfies BackgroundDefine;
