import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "near-clean-floor": {
    "from-above": {
      entries: [`outdoors`, `tennis court`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `tennis court`, `tennis net`],
    },
  },
  "sitting-on": {
    "from-above": {
      entries: [`outdoors`, `tennis court`, `bench`, `on bench`],
    },
    "from-below": {
      entries: [`outdoors`, `fence`, `bench`, `on bench`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `tennis court`, `bench`, `on bench`, `fence`],
    },
  },
  "standing": {
    "from-above": {
      entries: [`outdoors`, `tennis court`],
    },
    "from-below": {
      entries: [`outdoors`, `fence`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `tennis court`, `fence`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const tennisCourt = ({
  backgroundType,
}: {
  backgroundType: BackgroundType;
}) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
