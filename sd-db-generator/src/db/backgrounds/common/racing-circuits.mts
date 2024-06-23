import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "sitting-on": {
    "from-above": {
      entries: [
        `outdoors`,
        `racetrack`,
        `racecar`,
        `race vehicle`,
        `tire`,
        `confetti`,
        `on vehicle`,
      ],
    },
    "from-below": {
      entries: [
        `outdoors`,
        `racecar`,
        `race vehicle`,
        `confetti`,
        `on vehicle`,
        `blue sky`,
      ],
    },
    "from-horizontal": {
      entries: [
        `outdoors`,
        `racetrack`,
        `racecar`,
        `race vehicle`,
        `tire`,
        `confetti`,
        `on vehicle`,
        `blue sky`,
      ],
    },
  },
  "standing": {
    "from-above": {
      entries: [`outdoors`, `racetrack`, `racecar`, `race vehicle`, `confetti`],
    },
    "from-below": {
      entries: [`outdoors`, `racecar`, `race vehicle`, `confetti`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `racetrack`, `racecar`, `race vehicle`, `confetti`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const racingCircuit = ({
  backgroundType,
}: {
  backgroundType: `sitting-on` | `standing`;
}) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
