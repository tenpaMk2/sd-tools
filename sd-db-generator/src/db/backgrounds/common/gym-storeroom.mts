import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "near-clean-floor": {
    "from-above": {
      entries: [`indoors`, `gym storeroom`, `mat`],
    },
    "from-below": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`, `mat`],
    },
    "from-horizontal": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`, `mat`],
    },
  },
  "sitting-on": {
    "from-above": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`],
    },
    "from-below": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`],
    },
    "from-horizontal": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`],
    },
  },
  "standing": {
    "from-above": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`],
    },
    "from-below": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`],
    },
    "from-horizontal": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const gymStoreroom = ({
  backgroundType,
}: {
  backgroundType: BackgroundType;
}) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
