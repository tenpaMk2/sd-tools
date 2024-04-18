import { BackgroundTag } from "./background.mjs";
import { BreastSizeTag, CharacterFeatureTag } from "./character-feature.mjs";
import { CharacterNameTag } from "./character-name.mjs";
import { EmotionTag } from "./emotion.mjs";
import { OutfitAndExposureTag } from "./outfit-and-exposure.mjs";
import { PoseTag } from "./pose.mjs";
import { SeriesNameTag } from "./series-name.mjs";
import { SpecialTag } from "./special.mjs";

export type PersonTag =
  | SeriesNameTag
  | CharacterNameTag
  | CharacterFeatureTag
  | BreastSizeTag
  | OutfitAndExposureTag
  | EmotionTag
  | PoseTag
  | SpecialTag;

export type Tag = PersonTag | BackgroundTag;
