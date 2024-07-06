import type {
  BackgroundDefine,
  BackgroundSetting,
  CharacterDefine,
  CharacterKey,
  CharacterSetting,
  OptionSetting,
  OutfitDefine,
  OutfitSetting,
  PoseDefine,
  PoseSetting,
  Setting,
  Txt2ImgSetting,
} from "@tenpamk2/sd-db-generator";
import { Database } from "./db.mjs";
import { isNullrishOrEmptyArray } from "./libs/utility.mjs";

export type PoseCollectedData = Omit<PoseSetting, "probability"> & {
  probability: number;
  pose: PoseDefine;
};

const collectPose = ({ key, probability }: PoseSetting): PoseCollectedData => {
  const poseTable = Database.singleton().poseTable;

  return {
    key,
    probability: probability ?? 1,
    pose: poseTable[key],
  };
};

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
  const backgroundTable = Database.singleton().backgroundTable;
  const posesPreset = Database.singleton().posesPreset;
  const background = backgroundTable[key];

  const targetPoses = isNullrishOrEmptyArray(poses)
    ? posesPreset[key] ?? posesPreset.default
    : poses;

  const filteredPoses = targetPoses
    .map(collectPose)
    .filter(({ pose }) => pose.cameraAngle in background)
    .filter(
      ({ pose }) => pose.expectedBackgroundType === background.backgroundType,
    );

  if (filteredPoses.length === 0) {
    throw new Error(`Error: No valid poses for background \`${key}\` .`);
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
  const outfitTable = Database.singleton().outfitTable;
  const backgroundsPreset = Database.singleton().backgroundsPreset;
  const outfit = outfitTable[key];

  const targetBackgrounds = isNullrishOrEmptyArray(backgrounds)
    ? backgroundsPreset[key] ?? backgroundsPreset.default
    : backgrounds;

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
  const characterTable = Database.singleton().characterTable;
  const outfitsPreset = Database.singleton().outfitsPreset;
  const character = characterTable[key];

  const targetOutfits = isNullrishOrEmptyArray(outfits)
    ? outfitsPreset[key] ?? outfitsPreset.default
    : outfits;

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
  extensions,
  characters,
}: Txt2ImgSetting): Txt2imgCollectedData => {
  const charactersPreset = Database.singleton().charactersPreset;

  const targetCharacters = isNullrishOrEmptyArray(characters)
    ? charactersPreset.default
    : characters;

  return {
    key,
    probability: probability ?? 1,
    fixedPrompt,
    txt2imgBodyJson,
    extensions,
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
