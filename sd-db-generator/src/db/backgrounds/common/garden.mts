import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "sitting-on": {
    "from-above": {
      entries: [`outdoors`, `garden`, `flower`, `bench`, `on bench`],
    },
    "from-below": {
      entries: [
        `outdoors`,
        `garden`,
        `flower`,
        `blue sky`,
        `bench`,
        `on bench`,
      ],
    },
    "from-horizontal": {
      entries: [`outdoors`, `garden`, `flower`, `bench`, `on bench`],
    },
  },
  "standing": {
    "from-above": {
      entries: [`outdoors`, `garden`, `flower`],
    },
    "from-below": {
      entries: [`outdoors`, `garden`, `flower`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `garden`, `flower`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const garden = ({
  backgroundType,
}: {
  backgroundType: `sitting-on` | `standing`;
}) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
