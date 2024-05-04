import { readFileSync } from "fs";
import { parse } from "yaml";
import { Setting } from "./setting-define.mjs";

type TypeString =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "function"
  | "symbol"
  | "undefined";

const validateArray = (value: any, name: string) => {
  if (!Array.isArray(value)) {
    throw new Error(`\`${name}\` is not \`Array\` . It must be \`Array\` .`);
  }
};

const validateType = (value: any, types: TypeString[], name: string) => {
  const thisType = typeof value;
  if (!types.includes(thisType as TypeString)) {
    throw new Error(
      `\`${name}\` is \`${thisType}\` . It must be \`[${types}]\`.`,
    );
  }
};

const validate = (yaml: any) => {
  validateType(
    yaml?.exporting?.promptExportingBatchSize,
    [`number`],
    `yaml.exporting.promptExportingBatchSize`,
  );
  validateType(
    yaml?.exporting?.maxExportingRandomPrompts,
    [`number`],
    `yaml.exporting.maxExportingRandomPrompts`,
  );
  validateType(yaml?.generateForever, [`boolean`], `yaml.generateForever`);
  validateType(yaml?.machine?.ip, [`string`], `yaml.machine.ip`);
  validateType(yaml?.machine?.port, [`number`], `yaml.machine.port`);
  validateArray(yaml?.generations, `yaml.generations`);

  for (const [index, generation] of yaml.generations.entries()) {
    validateType(generation.key, [`string`], `generation[${index}].key`);
    validateType(
      generation.probability,
      [`number`, `undefined`],
      `generation[${index}].probability`,
    );
    validateType(
      generation.fixedPrompt,
      [`string`],
      `generation[${index}].fixedPrompt`,
    );
    validateType(
      generation.batchGeneration,
      [`number`],
      `generation[${index}].batchGeneration`,
    );
    validateType(
      generation.optionsBodyJson?.sd_model_checkpoint,
      [`string`],
      `generation[${index}].optionsBodyJson.sd_model_checkpoint`,
    );
    validateType(
      generation.optionsBodyJson?.sd_vae,
      [`string`],
      `generation[${index}].optionsBodyJson.sd_vae`,
    );
    validateType(
      generation.optionsBodyJson?.samples_format,
      [`string`, `undefined`],
      `generation[${index}].optionsBodyJson.samples_format`,
    );
    validateType(
      generation.optionsBodyJson?.jpeg_quality,
      [`number`, `undefined`],
      `generation[${index}].optionsBodyJson.jpeg_quality`,
    );
    validateType(
      generation.optionsBodyJson?.webp_lossless,
      [`boolean`, `undefined`],
      `generation[${index}].optionsBodyJson.webp_lossless`,
    );
    validateType(
      generation.txt2imgBodyJson?.negative_prompt,
      [`string`, `undefined`],
      `generation[${index}].txt2imgBodyJson.negative_prompt`,
    );
    validateType(
      generation.txt2imgBodyJson?.sampler_name,
      [`string`, `undefined`],
      `generation[${index}].txt2imgBodyJson.sampler_name`,
    );
    validateType(
      generation.txt2imgBodyJson?.steps,
      [`number`, `undefined`],
      `generation[${index}].txt2imgBodyJson.steps`,
    );
    validateType(
      generation.txt2imgBodyJson?.width,
      [`number`, `undefined`],
      `generation[${index}].txt2imgBodyJson.width`,
    );
    validateType(
      generation.txt2imgBodyJson?.height,
      [`number`, `undefined`],
      `generation[${index}].txt2imgBodyJson.height`,
    );
    validateType(
      generation.txt2imgBodyJson?.cfg_scale,
      [`number`, `undefined`],
      `generation[${index}].txt2imgBodyJson.cfg_scale`,
    );
    validateType(
      generation.txt2imgBodyJson?.denoising_strength,
      [`number`, `undefined`],
      `generation[${index}].txt2imgBodyJson.denoising_strength`,
    );
    validateType(
      generation.txt2imgBodyJson?.enable_hr,
      [`boolean`, `undefined`],
      `generation[${index}].txt2imgBodyJson.enable_hr`,
    );
    validateType(
      generation.txt2imgBodyJson?.hr_scale,
      [`number`, `undefined`],
      `generation[${index}].txt2imgBodyJson.hr_scale`,
    );
    validateType(
      generation.txt2imgBodyJson?.hr_upscaler,
      [`string`, `undefined`],
      `generation[${index}].txt2imgBodyJson.hr_upscaler`,
    );
    validateType(
      generation.txt2imgBodyJson?.hr_second_pass_steps,
      [`number`, `undefined`],
      `generation[${index}].txt2imgBodyJson.hr_second_pass_steps`,
    );

    // TODO: Validate `characters` .
  }
};

export const readSettingFromYAML = (yamlPath: string): Setting => {
  const str = readFileSync(yamlPath, `utf8`);
  const yaml = parse(str);

  validate(yaml);

  return yaml as Setting;
};
