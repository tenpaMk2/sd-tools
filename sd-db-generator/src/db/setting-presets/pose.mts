import { getKeys } from "../../libs/utility.mjs";
import { type PoseSetting } from "../../setting-define.mjs";
import { type BackgroundKey } from "../backgrounds/backgrounds.mjs";
import { commonPoseTable, poseTable, type PoseKey } from "../poses/poses.mjs";

export type PosesPresetKey = `default` | BackgroundKey;
export type PosesPreset = Record<PosesPresetKey, PoseSetting[]>;

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

  "beach-near-clean-floor": defaultPreset,
  "beach-sitting-on": defaultPreset,
  "beach-standing": defaultPreset,
  "bedroom-near-clean-floor": defaultPreset,
  "bedroom-sitting-on": defaultPreset,
  "bedroom-standing": defaultPreset,
  "bed-sheet-red-curtains-near-clean-floor": defaultPreset,
  "bed-sheet-steaming-near-clean-floor": defaultPreset,
  "blue-sky-confetti-standing-for-cheering": [
    { key: `standing-from-above-cheering` },
    { key: `standing-from-below-cheering` },
    { key: `standing-from-horizontal-cheering` },
  ],
  "blue-sky-confetti-standing": defaultPreset,
  "bookshelf-near-clean-floor": defaultPreset,
  "bookshelf-sitting-on": defaultPreset,
  "bookshelf-standing": defaultPreset,
  "cafe-standing": defaultPreset,
  "casino-sitting-on": defaultPreset,
  "casino-standing": defaultPreset,
  "christmas-near-clean-floor": defaultPreset,
  "christmas-standing": defaultPreset,
  "city-sitting-on": defaultPreset,
  "city-standing": defaultPreset,
  "classroom-chalkboard-sitting-on": defaultPreset,
  "classroom-chalkboard-standing": defaultPreset,
  "classroom-window-sitting-on": defaultPreset,
  "classroom-window-standing": defaultPreset,
  "colorful-background-near-clean-floor": defaultPreset,
  "colorful-background-sitting-on": defaultPreset,
  "colorful-background-standing": defaultPreset,
  "colorful-heart-background-near-clean-floor": defaultPreset,
  "colorful-heart-background-sitting-on": defaultPreset,
  "colorful-heart-background-standing": defaultPreset,
  "garden-sitting-on": defaultPreset,
  "garden-standing": defaultPreset,
  "gym-volleyball-near-clean-floor": defaultPreset,
  "gym-volleyball-standing": [
    { key: `standing-from-above-holding-volleyball` },
    { key: `standing-from-below-holding-volleyball` },
    { key: `standing-from-horizontal-holding-volleyball` },
  ],
  "gym-storeroom-near-clean-floor": defaultPreset,
  "gym-storeroom-sitting-on": defaultPreset,
  "gym-storeroom-standing": defaultPreset,
  "grass-near-clean-floor": defaultPreset,
  "grass-sitting-on": defaultPreset,
  "grass-standing": defaultPreset,
  "karaoke-box-sitting-on": [
    { key: `sitting-on-from-horizontal-singing` },
    { key: `sitting-on-from-horizontal-singing-from-side` },
  ],
  "karaoke-box-standing": [{ key: `standing-from-horizontal-singing` }],
  "night-rooftop-standing": defaultPreset,
  "night-moon-sitting-on": defaultPreset,
  "night-moon-standing": defaultPreset,
  "onsen-near-clean-floor": defaultPreset,
  "onsen-sitting-on": defaultPreset,
  "onsen-standing": defaultPreset,
  "ocean-standing": defaultPreset,
  "office-sitting-on": defaultPreset,
  "office-standing": defaultPreset,
  "poolside-near-clean-floor": defaultPreset,
  "poolside-sitting-on": defaultPreset,
  "poolside-standing": defaultPreset,
  "racing-circuit-sitting-on": defaultPreset,
  "racing-circuit-standing": defaultPreset,
  "sky-blue-sky-standing": defaultPreset,
  "sky-orange-sky-standing": defaultPreset,
  "tennis-court-near-clean-floor": defaultPreset,
  "tennis-court-sitting-on": defaultPreset,
  "tennis-court-standing": defaultPreset, // TODO: Forgot tennis.
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
  "wedding-sitting-on": defaultPreset,
} as const satisfies PosesPreset;
