import { BackgroundTag } from "@tenpamk2/sd-tag-defines";
import { NormalEntry } from "../prompt-define.mjs";

export type CameraAngle = `from-above` | `from-below` | `from-horizontal`;
export type BackgroundType = `standing` | `near-clean-floor` | `sitting-on`;

export type BackgroundDefine = {
  [k in CameraAngle]?: {
    entries: NormalEntry<BackgroundTag>[];
  };
} & {
  backgroundType: BackgroundType;
  removeShoes: boolean;
};

export const backgroundTable = {
  "cafe": {
    "backgroundType": `standing`,
    "from-horizontal": { entries: [`indoors`, `cafe`] },
    "removeShoes": false,
  },
  "ocean": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `ocean`, `beach`, `blue sky`],
    },
    "from-below": { entries: [`outdoors`, `blue sky`] }, // TODO: splashing
    "from-horizontal": {
      entries: [`outdoors`, `ocean`, `wet`, `blue sky`],
    },
    "removeShoes": true,
  },
  "steaming-bed-sheet": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [
        `bed sheet`,
        `sweat`,
        `steam`,
        `steaming body`,
        // TODO: `on bed`
      ],
    },
    "removeShoes": true,
  },
} as const satisfies {
  [k in string]: BackgroundDefine;
};

export type BackgroundKey = keyof typeof backgroundTable;
