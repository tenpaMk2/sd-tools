import { BackgroundKey } from "../backgrounds/resolver.mjs";
import { getKeys } from "../libs/utility.mjs";
import { PoseKey, commonPoseTable, poseTable } from "../poses/resolver.mjs";
import { PoseSetting } from "../setting-define.mjs";

const monoPosesPresetsMap = Object.fromEntries(
  getKeys(poseTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<PoseKey, PoseSetting[]>(),
  ),
) as { [k in PoseKey]: PoseSetting[] };

const defaultPreset = getKeys(commonPoseTable).map((key) => ({
  key,
})) satisfies PoseSetting[];

export const posesPreset = {
  ...monoPosesPresetsMap,

  "default": defaultPreset,

  "cafe": defaultPreset,
  "ocean": defaultPreset,
  "beach-standing": defaultPreset,
  "beach-near-clean-floor": defaultPreset,
  "colorful-backgrounds-standing": defaultPreset,
  "colorful-heart-backgrounds-standing": defaultPreset,
  "colorful-backgrounds-near-clean-floor": defaultPreset,
  "colorful-heart-backgrounds-near-clean-floor": defaultPreset,
  "steaming-bed-sheet": defaultPreset,
  "grass-blue-sky": defaultPreset,
  "grass": defaultPreset,
  "casino": defaultPreset,
  "city": defaultPreset,
  "wedding-standing": [
    ...defaultPreset,
    {
      key: `standing-from-above-holding-bouquet`,
      probability: defaultPreset.length,
    },
    {
      key: `standing-from-below-holding-bouquet`,
      probability: defaultPreset.length,
    },
    {
      key: `standing-from-horizontal-holding-bouquet`,
      probability: defaultPreset.length,
    },
  ],
  "wedding-near-clean-floor": defaultPreset,
  "christmas-standing": defaultPreset,
  "christmas-near-clean-floor": defaultPreset,
  "classroom-chalkboard": defaultPreset,
  "classroom-window": defaultPreset,
  "karaoke-box-standing": [
    { key: `standing-from-horizontal-singing` },
    { key: `standing-from-horizontal-singing-from-side` },
  ],
  "karaoke-box-sitting-on": [{ key: `sitting-on-from-horizontal-singing` }],
  "night-rooftop": defaultPreset,
  "night-moon": defaultPreset,
} as const satisfies {
  [k in PoseKey | `default` | BackgroundKey]: PoseSetting[];
};
