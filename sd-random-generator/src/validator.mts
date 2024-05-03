import { characterTable } from "./characters/resolver.mjs";
import {
  BaseModel,
  CharacterSetting,
  Checkpoint,
  Setting,
  allCheckpoints,
} from "./setting-define.mjs";
import { LoraNameTag, allLoras } from "./tag-defines/lora.mjs";

const searchSupportedBaseModels = (loraName: LoraNameTag): BaseModel[] => {
  for (const lora of allLoras) {
    if (lora.loraName === loraName) {
      return lora.supportedBaseModels;
    }
  }
  return [];
};

const validateCharacter = (
  character: CharacterSetting,
  baseModel: Checkpoint["baseModel"],
): void => {
  for (const characterKey of character.keys) {
    const characterData = characterTable[characterKey];
    if (!characterData.lora) continue;

    const loraName = characterData.lora.tag;
    const supportedBaseModels = searchSupportedBaseModels(loraName);

    if (supportedBaseModels.includes(baseModel)) {
      // Valid!!
      continue;
    }
    throw new Error(`Base model ${baseModel} is not supported for ${loraName}`);
  }
};

const searchBaseModel = (
  nameHash: Checkpoint["nameHash"],
): Checkpoint["baseModel"] => {
  for (const checkpoint of allCheckpoints) {
    if (checkpoint.nameHash === nameHash) {
      return checkpoint.baseModel;
    }
  }
  throw new Error(`Base model not found for ${nameHash}`);
};

export const validateSettings = (settings: Setting[]): void => {
  for (const setting of settings) {
    const baseModel = searchBaseModel(
      setting.optionsBodyJson.sd_model_checkpoint,
    );

    for (const character of setting.characters) {
      validateCharacter(character, baseModel);
    }
  }
};
