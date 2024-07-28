import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "near-clean-floor": {
    "from-above": {
      entries: [`indoors`, `book`, `bookshelf`, `book stack`, `wooden floor`],
    },
    "from-horizontal": {
      entries: [`indoors`, `book`, `bookshelf`, `book stack`, `wooden floor`],
    },
  },
  "sitting-on": {
    "from-above": {
      entries: [
        `indoors`,
        `book`,
        `bookshelf`,
        `book stack`,
        `wooden floor`,
        `chair`,
        `wooden chair`,
        `on chair`,
      ],
    },
    "from-below": {
      entries: [
        `indoors`,
        `book`,
        `bookshelf`,
        `book stack`,
        `chair`,
        `wooden chair`,
        `on chair`,
      ],
    },
    "from-horizontal": {
      entries: [
        `indoors`,
        `book`,
        `bookshelf`,
        `book stack`,
        `chair`,
        `wooden chair`,
        `on chair`,
      ],
    },
  },
  "standing": {
    "from-above": {
      entries: [`indoors`, `book`, `bookshelf`, `book stack`, `wooden floor`],
    },
    "from-below": {
      entries: [`indoors`, `book`, `bookshelf`, `book stack`],
    },
    "from-horizontal": {
      entries: [`indoors`, `book`, `bookshelf`, `book stack`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const bookshelf = ({
  backgroundType,
}: {
  backgroundType: BackgroundType;
}): BackgroundDefine =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: true,
  }) as const satisfies BackgroundDefine;
