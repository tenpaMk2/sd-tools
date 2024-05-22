import { BackgroundKey } from "../backgrounds/backgrounds.mjs";
import { getKeys } from "../libs/utility.mjs";
import { PoseKey, commonPoseTable, poseTable } from "../poses/poses.mjs";
import { PoseSetting } from "../setting-define.mjs";

const monoPosesPresetsMap = Object.fromEntries(
  getKeys(poseTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<PoseKey, PoseSetting[]>(),
  ),
) as Record<PoseKey, PoseSetting[]>;

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
      probability: defaultPreset.length / 3,
    },
    {
      key: `standing-from-below-holding-bouquet`,
      probability: defaultPreset.length / 3,
    },
    {
      key: `standing-from-horizontal-holding-bouquet`,
      probability: defaultPreset.length / 3,
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
  "blue-sky-confetti-for-cheering": defaultPreset,
  "sun-sky": defaultPreset,
  "volleyball-gym-near-clean-floor": defaultPreset,
  "volleyball-gym-standing": [
    ...defaultPreset,
    {
      key: `standing-from-above-holding-volleyball`,
      probability: defaultPreset.length / 3,
    },
    {
      key: `standing-from-below-holding-volleyball`,
      probability: defaultPreset.length / 3,
    },
    {
      key: `standing-from-horizontal-holding-volleyball`,
      probability: defaultPreset.length / 3,
    },
    {
      key: `standing-from-horizontal-volleyball-from-side`,
      probability: (defaultPreset.length / 3) * 2,
    },
  ],
  "gym-storeroom-near-clean-floor": defaultPreset,
  "gym-storeroom-standing": defaultPreset,
  "garden": defaultPreset,
  "poolside-near-clean-floor": defaultPreset,
  "poolside-standing": defaultPreset,
  "onsen-standing": defaultPreset,
  "onsen-near-clean-floor": defaultPreset,
} as const satisfies Record<PoseKey | `default` | BackgroundKey, PoseSetting[]>;
