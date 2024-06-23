import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "standing": {
    "from-above": { entries: [`outdoors`, `grass`] },
    "from-below": { entries: [`outdoors`, `grass`, `blue sky`] },
    "from-horizontal": { entries: [`outdoors`, `grass`, `blue sky`] },
  },
  "near-clean-floor": {
    "from-above": { entries: [`outdoors`, `grass`] },
    "from-below": { entries: [`outdoors`, `grass`, `blue sky`] },
    "from-horizontal": { entries: [`outdoors`, `grass`, `blue sky`] },
  },
  "sitting-on": {
    "from-above": { entries: [`outdoors`, `grass`, `on grass`] },
    "from-horizontal": {
      entries: [`outdoors`, `grass`, `blue sky`, `on grass`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const grass = ({ backgroundType }: { backgroundType: BackgroundType }) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
