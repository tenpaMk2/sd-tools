import { CharacterKey } from "../../index.mjs";
import { OutfitSetting } from "../../setting-define.mjs";

export type OutfitsPresetKey = `default` | CharacterKey;

export const outfitsPreset = {
  "default": [
    {
      key: `bikini`,
    },
  ],

  "slow-loop-hiyori-ibukimakisiko": [
    {
      key: `slow-loop-school-uniform-hiyori-ibukimakisiko`,
    },
  ],
  "slow-loop-koharu-ibukimakisiko": [
    {
      key: `slow-loop-school-uniform-koharu-ibukimakisiko`,
    },
  ],
  "slow-loop-koi-ibukimakisiko": [
    {
      key: `slow-loop-school-uniform-koi-ibukimakisiko`,
    },
  ],
} as const satisfies Record<OutfitsPresetKey, OutfitSetting[]>;

export type OutfitsPreset = typeof outfitsPreset;
