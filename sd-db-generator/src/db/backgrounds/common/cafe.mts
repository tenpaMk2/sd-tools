import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

const cameraAngle = {
  standing: {
    "from-horizontal": { entries: [`indoors`, `cafe`, `window`] },
  },
} as const satisfies Partial<
  Record<
    BackgroundType,
    Partial<Record<CameraAngle, BackgroundDefine["from-horizontal"]>>
  >
>;

export const cafe = ({ backgroundType }: { backgroundType: `standing` }) =>
  ({
    backgroundType: backgroundType,
    ...cameraAngle[backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
