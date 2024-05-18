import { characterTable } from "./characters/resolver.mjs";
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
  for (const characterKey of character.keys) {
    const characterData = characterTable[characterKey];
    if (!characterData?.lora) continue;

    const loraName = characterData.lora.tag;
    const supportedBaseModels = searchSupportedBaseModels(loraName);

    if (supportedBaseModels.includes(baseModel)) {
      // Valid!!
      continue;
    }
    console.warn(
      `Base model \`${baseModel}\` is not supported for \`${loraName}\``,
    );
  }
};

export const validateSetting = (setting: Setting): void => {
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
