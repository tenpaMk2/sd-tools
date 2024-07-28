import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "standing": {
    "from-above": {
      entries: [`indoors`, `christmas`, `christmas present`],
    },
    "from-below": {
      entries: [`indoors`, `christmas`, `christmas tree`],
    },
    "from-horizontal": {
      entries: [`indoors`, `christmas`, `christmas tree`],
    },
  },
  "near-clean-floor": {
    "from-above": {
      entries: [`indoors`, `christmas`, `christmas present`],
    },
    "from-below": {
      entries: [`indoors`, `christmas`, `christmas tree`],
    },
    "from-horizontal": {
      entries: [`indoors`, `christmas`, `christmas tree`],
    },
  },
  // TODO: `sitting-on`
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const christmas = ({
  backgroundType,
}: {
  backgroundType: `standing` | `near-clean-floor`;
}): BackgroundDefine =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: true,
  }) as const satisfies BackgroundDefine;
