import {
  BreastSizeTag,
  CharacterNameTag,
  EmotionTag,
  SeriesNameTag,
} from "@tenpamk2/sd-tag-defines";
import { LoraEntry, NormalEntry } from "../prompt-define.mjs";
import { CharacterFeatureTag } from "../tag-defines/adapter.mjs";
import { LoraCharacterTriggerWordsTag } from "../tag-defines/lora.mjs";
import { kaguyaSamaAi } from "./kaguya-sama/kaguya-sama-ai.mjs";
import { kaguyaSamaChikaNochekaiser } from "./kaguya-sama/kaguya-sama-chika-nochekaiser.mjs";
import { kaguyaSamaChika } from "./kaguya-sama/kaguya-sama-chika.mjs";
import { kaguyaSamaKaguya } from "./kaguya-sama/kaguya-sama-kaguya.mjs";
import { kaguyaSamaMiko } from "./kaguya-sama/kaguya-sama-miko.mjs";

/**
 * Character define.
 */
export type CharacterDefine = Readonly<{
  /**
   * Lora define.
   */
  lora: LoraEntry | null;
  /**
   * Lora character trigger words define.
   * If the trigger words is duplicate with the character name, it should not be set.
   */
  loraCharacterTriggerWordEntries: NormalEntry<LoraCharacterTriggerWordsTag>[];
  /**
   * Series name.
   */
  seriesNameEntries: NormalEntry<SeriesNameTag>[];
  /**
   * Character name.
   */
  characterNameEntries: NormalEntry<CharacterNameTag>[];
  /**
   * Character feature defines.
   */
  characterFeatureEntries: NormalEntry<CharacterFeatureTag>[];
  /**
   * Breast size define.
   */
  breastSize: BreastSizeTag;
  /**
   * Does she have fang?
   */
  fang: boolean;
  /**
   * Emotion defines.
   */
  emotionEntries: NormalEntry<EmotionTag>[];
}>;

// TODO: stomach tattoo. Idea: hook `navel` tag.

export const characterTable = {
  "kaguya-sama-ai": kaguyaSamaAi(),
  "kaguya-sama-chika-nochekaiser": kaguyaSamaChikaNochekaiser(),
  "kaguya-sama-chika": kaguyaSamaChika(),
  "kaguya-sama-kaguya": kaguyaSamaKaguya(),
  "kaguya-sama-miko": kaguyaSamaMiko(),
} as const satisfies {
  [k: string]: CharacterDefine;
};

export type CharacterKey = keyof typeof characterTable;
