import { Tag as OriginalTag } from "@tenpamk2/sd-tag-defines";
import {
  LoraCharacterTriggerWordsTag,
  LoraOutfitTriggerWordsTag,
} from "./lora.mjs";

export type Tag =
  | OriginalTag
  | LoraCharacterTriggerWordsTag
  | LoraOutfitTriggerWordsTag;
