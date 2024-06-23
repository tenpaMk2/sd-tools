// import { CharacterSetting, LoraName, Setting } from "@tenpamk2/sd-db-generator";
// import { BaseModel } from "@tenpamk2/sd-db-generator/dist/db/checkpoint.mjs";
// import { Database } from "./db.mjs";
// import { log, warn } from "./logger.mjs";

// const searchSupportedBaseModels = (loraName: LoraName): BaseModel[] => {
//   const loraTable = Database.singleton().loraTable;
//   return loraTable[loraName].supportedBaseModels ?? [];
// };

// const validateCharacter = (
//   character: CharacterSetting,
//   baseModel: BaseModel,
// ): void => {
//   const characterTable = Database.singleton().characterTable;

//   const characterData = characterTable[character.key];
//   if (!characterData?.lora) return;

//   const loraName = characterData.lora.loraName;
//   const supportedBaseModels = searchSupportedBaseModels(loraName);

//   if (supportedBaseModels.includes(baseModel)) {
//     // Valid!!
//     return;
//   }

//   warn(`Base model \`${baseModel}\` is not supported for \`${loraName}\``);
// };

// export const validateSetting = (setting: Setting): void => {
//   log(`Validating...`);

//   const checkpointTable = Database.singleton().checkpointTable;

//   for (const optionSetting of setting.optionSettings) {
//     const baseModel =
//       checkpointTable[optionSetting.optionsBodyJson.sd_model_checkpoint]
//         .baseModel;

//     for (const txt2imgSetting of optionSetting.txt2imgSettings) {
//       for (const character of txt2imgSetting.characters ?? []) {
//         validateCharacter(character, baseModel);
//       }
//     }
//   }
// };
