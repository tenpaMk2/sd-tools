import { BackgroundKey } from "../backgrounds/resolver.mjs";
import { getKeys } from "../libs/utility.mjs";
import { PoseKey, poseTable } from "../poses/resolver.mjs";
import { PoseSetting } from "../setting-define.mjs";

const defaultPreset = [
  { key: `near-clean-floor-from-above-wariza` },
  { key: `near-clean-floor-from-above-lying` },
  { key: `standing-from-horizontal-contrapposto` },
] as const satisfies PoseSetting[];

const monoPosesPresetsMap = Object.fromEntries(
  getKeys(poseTable).reduce(
    (acc, key) => acc.set(key, [{ key }]),
    new Map<PoseKey, PoseSetting[]>(),
  ),
) as { [k in PoseKey]: PoseSetting[] };

export const posesPreset = {
  ...monoPosesPresetsMap,
  "default": defaultPreset,
  "cafe": defaultPreset,
  "ocean": defaultPreset,
  "steaming-bed-sheet": defaultPreset,
} as const satisfies {
  [k in PoseKey | `default` | BackgroundKey]: PoseSetting[];
};
