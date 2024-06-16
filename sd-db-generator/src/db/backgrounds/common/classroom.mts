import {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

type Variation = `chalkboard` | `window`;

const variations = {
  chalkboard: {
    "sitting-on": {
      "from-below": {
        entries: [
          `indoors`,
          `classroom`,
          `chalkboard`,
          `ceiling`,
          `school desk`,
          `on desk`,
        ],
      },
      "from-horizontal": {
        entries: [
          `indoors`,
          `classroom`,
          `chalkboard`,
          `school desk`,
          `on desk`,
        ],
      },
    },
    "standing": {
      "from-above": { entries: [`indoors`, `classroom`, `chalkboard`] },
      "from-below": {
        entries: [`indoors`, `classroom`, `chalkboard`, `ceiling`],
      },
      "from-horizontal": { entries: [`indoors`, `classroom`, `chalkboard`] },
    },
  },
  window: {
    "sitting-on": {
      "from-above": {
        entries: [
          `indoors`,
          `classroom`,
          `window`,
          `school desk`,
          `school chair`,
          [{ entries: [`on desk`] }, { entries: [`on chair`] }],
        ],
      },
      "from-horizontal": {
        entries: [
          `indoors`,
          `classroom`,
          `window`,
          `school desk`,
          `school chair`,
          [{ entries: [`on desk`] }, { entries: [`on chair`] }],
        ],
      },
    },
    "standing": {
      "from-above": {
        entries: [
          `indoors`,
          `classroom`,
          `window`,
          `school desk`,
          `school chair`,
        ],
      },
      "from-below": {
        entries: [`indoors`, `classroom`, `window`, `school desk`],
      },
      "from-horizontal": {
        entries: [
          `indoors`,
          `classroom`,
          `window`,
          `school desk`,
          `school chair`,
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

export const classroom = ({
  variation,
  backgroundType,
}:
  | {
      variation: `chalkboard`;
      backgroundType: `sitting-on` | `standing`;
    }
  | {
      variation: `window`;
      backgroundType: `sitting-on` | `standing`;
    }) =>
  ({
    backgroundType,
    ...variations[variation][backgroundType],
    removeShoes: false,
  }) as const satisfies BackgroundDefine;
