import { CharacterSetting } from "../../setting-define.mjs";
import { CharacterKey } from "../characters/characters.mjs";

export type CharactersPresetKey = `default` | CharacterKey;

export type CharactersPreset = Record<CharactersPresetKey, CharacterSetting[]>;

export const charactersPreset = {
  "default": [
    { key: `slow-loop-hiyori-ibukimakisiko` },
    { key: `slow-loop-koharu-ibukimakisiko` },
    { key: `slow-loop-koi-ibukimakisiko` },
  ],

  "slow-loop-hiyori-ibukimakisiko": [{ key: `slow-loop-hiyori-ibukimakisiko` }],
  "slow-loop-koharu-ibukimakisiko": [{ key: `slow-loop-koharu-ibukimakisiko` }],
  "slow-loop-koi-ibukimakisiko": [{ key: `slow-loop-koi-ibukimakisiko` }],
} as const satisfies CharactersPreset;
