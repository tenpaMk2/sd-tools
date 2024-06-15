import {
  BackgroundTag,
  BodyOutfitTag,
  BodyTag,
  BreastSizeTag,
  CameraTag,
  CharacterNameTag,
  EmotionTag,
  FaceTag,
  GlassesTag,
  HairTag,
  HeadOutfitTag,
  HoldingItemTag,
  HoldingPoseTag,
  PoseTag as OriginalPoseTag,
  SeriesNameTag,
  SpecialTag,
} from "@tenpamk2/sd-tag-defines";
import {
  LoraCharacterTriggerWordsTag,
  LoraOutfitTriggerWordsTag,
} from "../db/lora.mjs";

export type Tag =
  | BackgroundTag
  | BodyOutfitTag
  | BodyTag
  | BreastSizeTag
  | CameraTag
  | CharacterNameTag
  | EmotionTag
  | FaceTag
  | GlassesTag
  | HairTag
  | HeadOutfitTag
  | HoldingItemTag
  | HoldingPoseTag
  | OriginalPoseTag
  | SeriesNameTag
  | SpecialTag
  | LoraCharacterTriggerWordsTag
  | LoraOutfitTriggerWordsTag;

export type PoseTag =
  | CameraTag
  | HoldingItemTag
  | HoldingPoseTag
  | OriginalPoseTag;

export type OutfitTag = HeadOutfitTag | BodyOutfitTag;

export type CharacterFeatureTag =
  | HeadOutfitTag
  | BodyTag
  | HairTag
  | GlassesTag
  | FaceTag;
