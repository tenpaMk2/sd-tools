import type {
  BackgroundDefine,
  BackgroundType,
  CameraAngle,
} from "../backgrounds.mjs";

type Variation = `red-curtains` | `steaming`;

const variations = {
  "red-curtains": {
    "near-clean-floor": {
      "from-above": {
        entries: [
          `bed sheet`,
          `sweat`,
          `steam`,
          `steaming body`,
          `on bed`,
          `red curtains`,
        ],
      },
      "from-horizontal": {
        entries: [
          `bed sheet`,
          `sweat`,
          `steam`,
          `steaming body`,
          `on bed`,
          `red curtains`,
          `pillow`,
          `lamp`,
        ],
      },
    },
  },
  "steaming": {
    "near-clean-floor": {
      "from-above": {
        entries: [`bed sheet`, `sweat`, `steam`, `steaming body`, `on bed`],
      },
      "from-horizontal": {
        entries: [
          `bed sheet`,
          `sweat`,
          `steam`,
          `steaming body`,
          `on bed`,
          `pillow`,
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

export const bedSheet = ({
  variation,
  backgroundType,
}:
  | {
      variation: `red-curtains`;
      backgroundType: `near-clean-floor`;
    }
  | {
      variation: `steaming`;
      backgroundType: `near-clean-floor`;
    }) =>
  ({
    backgroundType,
    ...variations[variation][backgroundType],
    removeShoes: true,
  }) as const satisfies BackgroundDefine;
