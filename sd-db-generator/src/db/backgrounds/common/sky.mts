import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

type Variation = `blue-sky` | `orange-sky`;

const variations = {
  "blue-sky": {
    standing: {
      "from-below": {
        entries: [`outdoors`, `day`, `blue sky`, `cloud`, `sunlight`],
      },
      "from-horizontal": {
        entries: [`outdoors`, `day`, `blue sky`],
      },
    },
  },
  "orange-sky": {
    standing: {
      "from-below": {
        entries: [`outdoors`, `day`, `orange sky`, `cloud`],
      },
      "from-horizontal": {
        entries: [`outdoors`, `day`, `sunset`, `orange sky`],
      },
    },
  },
} as const satisfies Record<
  Variation,
  Partial<
    Record<
      BackgroundType,
      Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
    >
  >
>;
export const sky = ({
  variation,
  backgroundType,
}:
  | {
      variation: `blue-sky`;
      backgroundType: `standing`;
    }
  | {
      variation: `orange-sky`;
      backgroundType: `standing`;
    }) =>
  ({
    backgroundType,
    ...variations[variation][backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
