import { OutfitKey } from "../../index.mjs";
import { BackgroundSetting } from "../../setting-define.mjs";

export type BackgroundsPresetKey = `default` | OutfitKey;

export type BackgroundsPreset = Record<
  BackgroundsPresetKey,
  BackgroundSetting[]
>;

export const backgroundsPreset = {
  "default": [
    { key: `colorful-backgrounds-standing` },
    { key: `colorful-backgrounds-near-clean-floor` },
  ],

  /**
   * Common outfits.
   */

  "bikini": [
    { key: `colorful-backgrounds-standing` },
    { key: `colorful-backgrounds-near-clean-floor` },
  ],

  /**
   * Character specific outfits.
   */

  "slow-loop-school-uniform-hiyori-ibukimakisiko": [
    { key: `colorful-backgrounds-standing` },
    { key: `colorful-backgrounds-near-clean-floor` },
  ],
  "slow-loop-school-uniform-koharu-ibukimakisiko": [
    { key: `colorful-backgrounds-standing` },
    { key: `colorful-backgrounds-near-clean-floor` },
  ],
  "slow-loop-school-uniform-koi-ibukimakisiko": [
    { key: `colorful-backgrounds-standing` },
    { key: `colorful-backgrounds-near-clean-floor` },
  ],
} as const satisfies BackgroundsPreset;
