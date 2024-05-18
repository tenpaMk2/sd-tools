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

  const targetPoses = poses ?? posesPreset[key] ?? posesPreset.default;

  return {
    key,
    probability: probability ?? 1,
    background,
    poses: targetPoses
      .map(collectPose)
      .filter(({ pose }) => pose.cameraAngle in background)
      .filter(
        ({ pose }) => pose.expectedBackgroundType === background.backgroundType,
      ),
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

  return {
    key,
    probability: probability ?? 1,
    outfit,
    backgrounds: (backgrounds ?? backgroundsPreset[key]).map(collectBackground),
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
  keys,
  probability,
  outfits,
}: CharacterSetting): CharacterCollectedData[] =>
  keys.map((key) => {
    const character = characterTable[key];

    const targetOutfits =
      outfits ?? outfitsPreset[key] ?? outfitsPreset.default;

    return {
      key,
      probability: probability ?? 1,
      character,
      outfits: targetOutfits.map(collectOutfit),
    };
  });

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
}: Txt2ImgSetting): Txt2imgCollectedData => ({
  key,
  probability: probability ?? 1,
  fixedPrompt,
  txt2imgBodyJson,
  characters: characters.map(collectCharacter).flat(),
});

export type OptionCollectedData = Omit<OptionSetting, "txt2imgSettings"> & {
  txt2imgs: Txt2imgCollectedData[];
};

const collectOption = ({
  optionsBodyJson,
  batchGeneration,
  txt2imgSettings,
}: OptionSetting): OptionCollectedData => ({
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
