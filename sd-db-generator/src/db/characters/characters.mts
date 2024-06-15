import {
  BreastSizeTag,
  CharacterNameTag,
  SeriesNameTag,
} from "@tenpamk2/sd-tag-defines";
import { LoraEntry, TagEntry } from "../../entry.mjs";
import { CharacterFeatureTag } from "../../tag-defines/adapter.mjs";
import { LoraCharacterTriggerWordsTag } from "../lora.mjs";
import { slowLoopHiyori } from "./slow-loop/hiyori.mjs";
import { slowLoopKoharu } from "./slow-loop/koharu.mjs";
import { slowLoopKoi } from "./slow-loop/koi.mjs";

export type EmotionType =
  | `cute`
  | `serious`
  | `tsundere`
  | `emotionless`
  | `mesugaki`;

export type CharacterDefine = Readonly<{
  /**
   * Lora define.
   */
  lora: LoraEntry | null;
  /**
   * Lora character trigger words define.
   * If the trigger words is duplicate with the character name, it should not be set.
   */
  loraCharacterTriggerWordEntries: TagEntry<LoraCharacterTriggerWordsTag>[];
  /**
   * Series name.
   */
  seriesNameEntries: TagEntry<SeriesNameTag>[];
  /**
   * Character name.
   */
  characterNameEntries: TagEntry<CharacterNameTag>[];
  /**
   * Character feature defines.
   */
  characterFeatureEntries: TagEntry<CharacterFeatureTag>[];
  /**
   * Breast size define.
   */
  breastSize: BreastSizeTag;
  /**
   * Does she have fang?
   */
  fang: boolean;
  /**
   * Emotion type.
   */
  emotionType: EmotionType;
}>;

export const characterTable = {
  "slow-loop-hiyori-ibukimakisiko": slowLoopHiyori(`ibukimakisiko`),
  "slow-loop-koharu-ibukimakisiko": slowLoopKoharu(`ibukimakisiko`),
  "slow-loop-koi-ibukimakisiko": slowLoopKoi(`ibukimakisiko`),
} as const satisfies Record<string, CharacterDefine>;

export type CharacterKey = keyof typeof characterTable;

// TODO: stomach tattoo. Idea: hook `navel` tag.
// TODO: Show character and Lora URL lists.
