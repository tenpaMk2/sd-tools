export {
  BackgroundTag,
  BreastSizeTag,
  CharacterNameTag,
  EmotionTag,
  SeriesNameTag,
  SpecialTag,
  VisibilityKey,
  allVisibilityKeys,
  tagVisibilities,
} from "@tenpamk2/sd-tag-defines";
import {
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
  allDistinguishableBodyFeatureTags,
  allDistinguishableHeadOutfitTags,
  allDistinguishableOutfitTags,
} from "@tenpamk2/sd-tag-defines";
import {
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

export const allDistinguishableTags = {
  ...allDistinguishableBodyFeatureTags,
  ...allDistinguishableHeadOutfitTags,
  ...allDistinguishableOutfitTags,
} as const;
export type DistinguishableTag = keyof typeof allDistinguishableTags;
