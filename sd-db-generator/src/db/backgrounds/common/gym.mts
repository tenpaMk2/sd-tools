import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

type Variation = `volleyball`;

const variations = {
  volleyball: {
    "near-clean-floor": {
      "from-above": {
        entries: [`indoors`, `volleyball`, `gym`, `wooden floor`],
      },
      "from-below": {
        entries: [
          `indoors`,
          `volleyball`,
          `gym`,
          `volleyball net`,
          `blurry background`,
        ],
      },
      "from-horizontal": {
        entries: [
          `indoors`,
          `volleyball`,
          `gym`,
          `volleyball net`,
          `wooden floor`,
          `blurry background`,
        ],
      },
    },
    "standing": {
      "from-above": {
        entries: [
          `indoors`,
          `volleyball`,
          `gym`,
          `volleyball net`,
          `wooden floor`,
        ],
      },
      "from-below": {
        entries: [
          `indoors`,
          `volleyball`,
          `gym`,
          `volleyball net`,
          `blurry background`,
        ],
      },
      "from-horizontal": {
        entries: [
          `indoors`,
          `volleyball`,
          `gym`,
          `volleyball net`,
          `wooden floor`,
          `blurry background`,
        ],
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

export const gym = ({
  variation,
  backgroundType,
}: {
  variation: `volleyball`;
  backgroundType: `near-clean-floor` | `standing`;
}) =>
  ({
    backgroundType,
    ...variations[variation][backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
