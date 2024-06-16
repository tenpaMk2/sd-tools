import { BackgroundTag } from "@tenpamk2/sd-tag-defines";
import { TagEntry } from "../../entry.mjs";

export type CameraAngle = `from-above` | `from-below` | `from-horizontal`;
export type BackgroundType = `standing` | `near-clean-floor` | `sitting-on`;

export type BackgroundDefine = Partial<
  Record<
    CameraAngle,
    {
      entries: TagEntry<BackgroundTag>[];
    }
  >
> & {
  backgroundType: BackgroundType;
  removeShoes: boolean;
};

const colorfulBackgroundEntries = [
  `simple background`,
  [
    { entries: [`blue background`] },
    { entries: [`pink background`], probability: 2 },
    { entries: [`red background`] },
    { entries: [`white background`], probability: 3 },
    { entries: [`yellow background`] },
  ],
] as const satisfies TagEntry<BackgroundTag>[];

const colorfulBackgroundStanding = {
  "backgroundType": `standing`,
  "from-above": {
    entries: colorfulBackgroundEntries,
  },
  "from-below": {
    entries: colorfulBackgroundEntries,
  },
  "from-horizontal": {
    entries: colorfulBackgroundEntries,
  },
  "removeShoes": false,
} as const satisfies BackgroundDefine;

export const backgroundTable = {
  "colorful-backgrounds-standing": colorfulBackgroundStanding,
  "colorful-backgrounds-near-clean-floor": {
    ...colorfulBackgroundStanding,
    backgroundType: `near-clean-floor`,
  },
} as const satisfies Record<string, BackgroundDefine>;

export type BackgroundTable = typeof backgroundTable;
export type BackgroundKey = keyof BackgroundTable;
