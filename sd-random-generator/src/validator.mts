import { characterTable } from "./characters/characters.mjs";
import { log, warn } from "./logger.mjs";
import {
  BaseModel,
  CharacterSetting,
  Setting,
  checkpointInfo,
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

// TODO: Define each type for the readbility of VSCode tooltip.

const validateCharacter = (
  character: CharacterSetting,
  baseModel: BaseModel,
): void => {
  const characterData = characterTable[character.key];
  if (!characterData?.lora) return;

  const loraName = characterData.lora.tag;
  const supportedBaseModels = searchSupportedBaseModels(loraName);

  if (supportedBaseModels.includes(baseModel)) {
    // Valid!!
    return;
  }

  warn(`Base model \`${baseModel}\` is not supported for \`${loraName}\``);
};

export const validateSetting = (setting: Setting): void => {
  log(`Validating...`);

  for (const optionSetting of setting.optionSettings) {
    const baseModel =
      checkpointInfo[optionSetting.optionsBodyJson.sd_model_checkpoint]
        .baseModel;

    for (const txt2imgSetting of optionSetting.txt2imgSettings) {
      for (const character of txt2imgSetting.characters) {
        validateCharacter(character, baseModel);
      }
    }
  }
};
