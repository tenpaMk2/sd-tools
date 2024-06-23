import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "near-clean-floor": {
    "from-above": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`],
    },
  },
  "sitting-on": {
    "from-above": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`, `partially submerged`],
    },
    "from-below": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`, `partially submerged`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`, `partially submerged`],
    },
  },
  "standing": {
    "from-above": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`],
    },
    "from-below": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const onsen = ({ backgroundType }: { backgroundType: BackgroundType }) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
