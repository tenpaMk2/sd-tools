import {
  BackgroundDefine,
  backgroundTable,
} from "./backgrounds/backgrounds.mjs";
import {
  CharacterDefine,
  CharacterKey,
  characterTable,
} from "./characters/characters.mjs";
import { OutfitDefine, outfitTable } from "./outfits/outfits.mjs";
import { PoseDefine, poseTable } from "./poses/poses.mjs";
import {
  BackgroundSetting,
  CharacterSetting,
  OptionSetting,
  OutfitSetting,
  PoseSetting,
  Setting,
  Txt2ImgSetting,
} from "./setting-define.mjs";
import { backgroundsPreset } from "./setting-presets/background.mjs";
import { charactersPreset } from "./setting-presets/character.mjs";
import { outfitsPreset } from "./setting-presets/outfit.mjs";
import { posesPreset } from "./setting-presets/pose.mjs";

export type PoseCollectedData = Omit<PoseSetting, "probability"> & {
  probability: number;
  pose: PoseDefine;
};

const collectPose = ({ key, probability }: PoseSetting): PoseCollectedData => ({
  key,
  probability: probability ?? 1,
  pose: poseTable[key],
});

export type BackgroundCollectedData = Omit<
  BackgroundSetting,
  "probability" | "poses"
> & {
  probability: number;
  background: BackgroundDefine;
  poses: PoseCollectedData[];
};

const collectBackground = ({
  key,
  probability,
  poses,
}: BackgroundSetting): BackgroundCollectedData => {
  const background = backgroundTable[key];

  const targetPoses =
    poses?.length === 0
      ? posesPreset.default
      : poses ?? posesPreset[key] ?? posesPreset.default;

  const filteredPoses = targetPoses
    .map(collectPose)
    .filter(({ pose }) => pose.cameraAngle in background)
    .filter(
      ({ pose }) => pose.expectedBackgroundType === background.backgroundType,
    );

  if (filteredPoses.length === 0) {
    throw new Error(`Error: No valid poses for background ${key}`);
  }

  return {
    key,
    probability: probability ?? 1,
    background,
    poses: filteredPoses,
  };
};

export type OutfitCollectedData = Omit<
  OutfitSetting,
  "probability" | "backgrounds"
> & {
  probability: number;
  outfit: OutfitDefine;
  backgrounds: BackgroundCollectedData[];
};

const collectOutfit = ({
  key,
  probability,
  backgrounds,
}: OutfitSetting): OutfitCollectedData => {
  const outfit = outfitTable[key];

  const targetBackgrounds =
    backgrounds?.length === 0
      ? backgroundsPreset.default
      : backgrounds ?? backgroundsPreset[key] ?? backgroundsPreset.default;

  return {
    key,
    probability: probability ?? 1,
    outfit,
    backgrounds: targetBackgrounds.map(collectBackground),
  };
};

export type CharacterCollectedData = Omit<
  CharacterSetting,
  "keys" | "probability" | "outfits"
> & {
  key: CharacterKey;
  probability: number;
  character: CharacterDefine;
  outfits: OutfitCollectedData[];
};

const collectCharacter = ({
  key,
  probability,
  outfits,
}: CharacterSetting): CharacterCollectedData => {
  const character = characterTable[key];

  const targetOutfits =
    outfits?.length === 0
      ? outfitsPreset.default
      : outfits ?? outfitsPreset[key] ?? outfitsPreset.default;

  return {
    key,
    probability: probability ?? 1,
    character,
    outfits: targetOutfits.map(collectOutfit),
  };
};

export type Txt2imgCollectedData = Omit<
  Txt2ImgSetting,
  "probability" | "characters"
> & {
  probability: number;
  characters: CharacterCollectedData[];
};

const collectTxt2imgData = ({
  key,
  probability,
  fixedPrompt,
  txt2imgBodyJson,
  characters,
}: Txt2ImgSetting): Txt2imgCollectedData => {
  const targetCharacters =
    characters?.length === 0
      ? charactersPreset.default
      : characters ?? charactersPreset.default;

  return {
    key,
    probability: probability ?? 1,
    fixedPrompt,
    txt2imgBodyJson,
    characters: targetCharacters.map(collectCharacter),
  };
};

export type OptionCollectedData = Omit<
  OptionSetting,
  "key" | "txt2imgSettings"
> & {
  key: string;
  txt2imgs: Txt2imgCollectedData[];
};

const collectOption = ({
  key,
  optionsBodyJson,
  batchGeneration,
  txt2imgSettings,
}: OptionSetting): OptionCollectedData => ({
  key: key ?? "undefined",
  optionsBodyJson,
  batchGeneration,
  txt2imgs: txt2imgSettings.map(collectTxt2imgData),
});

export type RootCollectedData = Omit<Setting, "optionSettings"> & {
  options: OptionCollectedData[];
};

export const collect = (setting: Setting): RootCollectedData => ({
  export: setting.export,
  generateForever: setting.generateForever,
  machine: setting.machine,
  options: setting.optionSettings.map(collectOption),
});
