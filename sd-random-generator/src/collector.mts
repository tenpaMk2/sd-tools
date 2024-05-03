import { BackgroundDefine, backgroundTable } from "./backgrounds/resolver.mjs";
import { CharacterDefine, characterTable } from "./characters/resolver.mjs";
import { OutfitDefine, outfitTable } from "./outfits/resolver.mjs";
import { PoseDefine, poseTable } from "./poses/resolver.mjs";
import {
  BackgroundSetting,
  CharacterSetting,
  OutfitSetting,
  PoseSetting,
  Setting,
} from "./setting-define.mjs";
import { backgroundsPreset } from "./setting-presets/background.mjs";
import { outfitsPreset } from "./setting-presets/outfit.mjs";
import { posesPreset } from "./setting-presets/pose.mjs";

export type PoseCollectedData = {
  key: string;
  probability: number;
  pose: PoseDefine;
};

const collectPose = ({ key, probability }: PoseSetting) =>
  ({
    key,
    probability: probability ?? 1,
    pose: poseTable[key],
  }) satisfies PoseCollectedData;

export type BackgroundCollectedData = {
  key: string;
  probability: number;
  background: BackgroundDefine;
  poses: PoseCollectedData[];
};

const collectBackground = ({ key, probability, poses }: BackgroundSetting) => {
  const background = backgroundTable[key];

  return {
    key,
    probability: probability ?? 1,
    background,
    poses: (poses ?? posesPreset[key])
      .map(collectPose)
      .filter(({ pose }) => pose.cameraAngle in background)
      .filter(
        ({ pose }) => pose.expectedBackgroundType === background.backgroundType,
      ),
  } satisfies BackgroundCollectedData;
};

export type OutfitCollectedData = {
  key: string;
  probability: number;
  outfit: OutfitDefine;
  backgrounds: BackgroundCollectedData[];
};

const collectOutfit = ({ key, probability, backgrounds }: OutfitSetting) =>
  ({
    key,
    probability: probability ?? 1,
    outfit: outfitTable[key],
    backgrounds: (backgrounds ?? backgroundsPreset[key]).map(collectBackground),
  }) satisfies OutfitCollectedData;

export type CharacterCollectedData = {
  key: string;
  probability: number;
  character: CharacterDefine;
  outfits: OutfitCollectedData[];
};

const collectCharacter = ({ keys, probability, outfits }: CharacterSetting) =>
  keys.map((key) => ({
    key,
    probability: probability ?? 1,
    character: characterTable[key],
    outfits: (outfits ?? outfitsPreset[key]).map(collectOutfit),
  })) satisfies CharacterCollectedData[];

export type RootCollectedData = {
  key: string;
  probability: number;
  fixedPrompt: string;
  batchGeneration: number;
  optionsBodyJson: Setting["optionsBodyJson"];
  txt2imgBodyJson: Setting["txt2imgBodyJson"];
  characters: CharacterCollectedData[];
};

export const collect = (settings: Setting[]) =>
  settings.map(
    ({
      key,
      probability,
      fixedPrompt,
      batchGeneration,
      optionsBodyJson,
      txt2imgBodyJson,
      characters,
    }) => ({
      key,
      probability: probability ?? 1,
      fixedPrompt,
      batchGeneration,
      optionsBodyJson,
      txt2imgBodyJson,
      characters: characters.map(collectCharacter).flat(),
    }),
  ) satisfies RootCollectedData[];
