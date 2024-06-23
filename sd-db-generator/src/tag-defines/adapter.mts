export { allVisibilityKeys, tagVisibilities } from "@tenpamk2/sd-tag-defines";
export type {
  BackgroundTag,
  BreastSizeTag,
  CharacterNameTag,
  EmotionTag,
  SeriesNameTag,
  SpecialTag,
  VisibilityKey,
} from "@tenpamk2/sd-tag-defines";
import type {
  BackgroundTag,
  BodyFeatureTag,
  BodyOutfitTag,
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
import type {
  LoraCharacterTriggerWordsTag,
  LoraOutfitTriggerWordsTag,
} from "../db/lora.mjs";

export type Tag =
  | BackgroundTag
  | BodyOutfitTag
  | BodyFeatureTag
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
  | BodyFeatureTag
  | HairTag
  | GlassesTag
  | FaceTag;
