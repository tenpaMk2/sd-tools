import { BackgroundDefine, backgroundTable } from "./backgrounds/resolver.mjs";
import { CharacterDefine, characterTable } from "./characters/resolver.mjs";
import { OutfitDefine, outfitTable } from "./outfits/resolver.mjs";
import { PoseDefine, poseTable } from "./poses/resolver.mjs";
import {
  BackgroundSetting,
  CharacterSetting,
  GenerationSetting,
  OutfitSetting,
  PoseSetting,
  Setting,
} from "./setting-define.mjs";
import { backgroundsPreset } from "./setting-presets/background.mjs";
import { outfitsPreset } from "./setting-presets/outfit.mjs";
import { posesPreset } from "./setting-presets/pose.mjs";

type Option = { customDefine?: Setting["customDefine"] };

export type PoseCollectedData = {
  key: string;
  probability: number;
  pose: PoseDefine;
};

const collectPose = ({ key, probability }: PoseSetting, option: Option = {}) =>
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

const collectBackground = (
  { key, probability, poses }: BackgroundSetting,
  option: Option = {},
) => {
  const background = backgroundTable[key];

  return {
    key,
    probability: probability ?? 1,
    background,
    poses: (poses ?? posesPreset[key] ?? posesPreset.default)
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

const collectOutfit = (
  { key, probability, backgrounds }: OutfitSetting,
  option: Option = {},
) => {
  const outfit = outfitTable[key] ?? option.customDefine?.outfits?.[key];

  if (!outfit) throw new Error(`Outfit \`${key}\` not found.`);

  return {
    key,
    probability: probability ?? 1,
    outfit,
    backgrounds: (backgrounds ?? backgroundsPreset[key]).map(collectBackground),
  } satisfies OutfitCollectedData;
};

export type CharacterCollectedData = {
  key: string;
  probability: number;
  character: CharacterDefine;
  outfits: OutfitCollectedData[];
};

const collectCharacter = (
  { keys, probability, outfits }: CharacterSetting,
  option: Option = {},
) =>
  keys.map((key) => {
    const character =
      characterTable[key] ?? option.customDefine?.characters?.[key];

    if (!character) throw new Error(`Character \`${key}\` not found.`);

    const targetOutfits =
      outfits ?? outfitsPreset[key] ?? outfitsPreset.default;

    return {
      key,
      probability: probability ?? 1,
      character,
      outfits: targetOutfits.map((o) => collectOutfit(o, option)),
    };
  }) satisfies CharacterCollectedData[];

export type RootCollectedData = {
  key: string;
  probability: number;
  fixedPrompt: string;
  batchGeneration: number;
  optionsBodyJson: GenerationSetting["optionsBodyJson"];
  txt2imgBodyJson: GenerationSetting["txt2imgBodyJson"];
  characters: CharacterCollectedData[];
};

export const collect = (
  generationSettings: GenerationSetting[],
  option: Option = {},
) =>
  generationSettings.map(
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
      characters: characters.map((c) => collectCharacter(c, option)).flat(),
    }),
  ) satisfies RootCollectedData[];
