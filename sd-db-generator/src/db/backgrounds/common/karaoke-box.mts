import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  "standing": {
    "from-above": { entries: [`indoors`, `karaoke`, `karaoke-box`] },
    "from-below": { entries: [`indoors`, `karaoke`, `karaoke-box`] },
    "from-horizontal": {
      entries: [`indoors`, `karaoke`, `karaoke-box`],
    },
  },
  "sitting-on": {
    "from-above": { entries: [`indoors`, `karaoke`, `karaoke-box`] },
    "from-below": { entries: [`indoors`, `karaoke`, `karaoke-box`] },
    "from-horizontal": {
      entries: [`indoors`, `karaoke`, `karaoke-box`, `couch`, `on couch`],
    },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const karaokeBox = ({
  backgroundType,
}: {
  backgroundType: `standing` | `sitting-on`;
}) =>
  ({
    backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
