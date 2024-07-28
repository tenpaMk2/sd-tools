import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "near-clean-floor": {
    "from-above": {
      entries: [
        `indoors`,
        `bedroom`,
        `carpet`,
        `pink carpet`,
        `bed`,
        `on floor`,
      ],
    },
    "from-horizontal": {
      entries: [
        `indoors`,
        `bedroom`,
        `carpet`,
        `pink carpet`,
        `bed`,
        `on floor`,
        `window`,
      ],
    },
  },
  "sitting-on": {
    "from-above": {
      entries: [`indoors`, `bedroom`, `carpet`, `pink carpet`, `bed`, `on bed`],
    },
    "from-below": {
      entries: [`indoors`, `bedroom`, `bed`, `on bed`, `ceiling light`],
    },
    "from-horizontal": {
      entries: [`indoors`, `bedroom`, `bed`, `on bed`, `window`],
    },
  },
  "standing": {
    "from-above": {
      entries: [`indoors`, `bedroom`, `carpet`, `pink carpet`, `bed`],
    },
    "from-below": {
      entries: [`indoors`, `bedroom`, `ceiling light`],
    },
    "from-horizontal": {
      entries: [`indoors`, `bedroom`, `carpet`, `pink carpet`, `bed`, `window`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const bedroom = ({
  backgroundType,
}: {
  backgroundType: BackgroundType;
}): BackgroundDefine =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: true,
  }) as const satisfies BackgroundDefine;
