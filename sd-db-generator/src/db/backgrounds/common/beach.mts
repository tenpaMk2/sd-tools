import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "standing": {
    "from-above": { entries: [`outdoors`, `beach`] },
    "from-below": {
      entries: [
        `outdoors`,
        `beach`,
        [
          { entries: [`blue sky`], probability: 2 },
          { entries: [`sunset`, `orange sky`] },
        ],
      ],
    },
    "from-horizontal": {
      entries: [
        `outdoors`,
        `beach`,
        [
          { entries: [`blue sky`], probability: 2 },
          { entries: [`sunset`, `orange sky`] },
        ],
      ],
    },
  },
  "near-clean-floor": {
    "from-above": { entries: [`outdoors`, `beach`] },
    "from-below": {
      entries: [
        `outdoors`,
        `beach`,
        `palm tree`,
        [
          { entries: [`blue sky`], probability: 2 },
          { entries: [`sunset`, `orange sky`] },
        ],
      ],
    },
    "from-horizontal": {
      entries: [
        `outdoors`,
        `beach`,
        `palm tree`,
        [
          { entries: [`blue sky`], probability: 2 },
          { entries: [`sunset`, `orange sky`] },
        ],
      ],
    },
  },
  "sitting-on": {
    "from-above": { entries: [`outdoors`, `beach`, `on ground`] },
    "from-below": {
      entries: [
        `outdoors`,
        `beach`,
        `palm tree`,
        [
          { entries: [`blue sky`], probability: 2 },
          { entries: [`sunset`, `orange sky`] },
        ],
      ],
    },
    "from-horizontal": {
      entries: [
        `outdoors`,
        `beach`,
        `palm tree`,
        `on ground`,
        [
          { entries: [`blue sky`], probability: 2 },
          { entries: [`sunset`, `orange sky`] },
        ],
      ],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const beach = ({ backgroundType }: { backgroundType: BackgroundType }) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
