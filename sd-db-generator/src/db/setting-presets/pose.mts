import { PoseSetting } from "../../setting-define.mjs";
import { BackgroundKey } from "../backgrounds/backgrounds.mjs";

export type PosesPresetKey = `default` | BackgroundKey;

export const posesPreset = {
  "default": [
    { key: `standing-from-above-arms-behind-back` },
    { key: `standing-from-below-arms-behind-back` },
    { key: `standing-from-horizontal-arms-behind-back` },
  ],

  "colorful-backgrounds-standing": [
    { key: `standing-from-above-arms-behind-back` },
    { key: `standing-from-below-arms-behind-back` },
    { key: `standing-from-horizontal-arms-behind-back` },
  ],
  "colorful-backgrounds-near-clean-floor": [
    { key: `near-clean-floor-from-above-lying-reaching-towards-viewer` },
  ],
} as const satisfies Record<PosesPresetKey, PoseSetting[]>;

export type PosesPreset = typeof posesPreset;
