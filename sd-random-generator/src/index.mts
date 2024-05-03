import { Command } from "commander";
import { readFileSync } from "fs";
import { parse } from "yaml";
import packageJson from "../package.json";
import { build } from "./builders/common.mjs";
import { collect } from "./collector.mjs";
import { exportPrompts } from "./exporter.mjs";
import { generate } from "./generator.mjs";
import { Setting } from "./setting-define.mjs";
import { settings } from "./setting.mjs";
import { validateSettings } from "./validator.mjs";

const program = new Command();
program.name(packageJson.name);
program.description(packageJson.description);
program.version(packageJson.version);
program.option(`-y, --yaml <path>`, `The path for the setting YAML file.`);
program.parse();
const options = program.opts();

const readYAML = (yamlPath: string): Setting[] => {
  const str = readFileSync(yamlPath, `utf8`);
  const yaml = parse(str);

  if (!Array.isArray(yaml)) {
    throw new Error("The root element must be a Array.");
  }

  const settings = yaml.map((y) => {
    return y as Setting;
  });

  return yaml;

  // const settings = yaml.map((y) => {
  //   const setting = merge(
  //     {
  //       key: `undefined`,
  //       probability: 1,
  //       fixedPrompt: ``,
  //       optionsBodyJson: {
  //         sd_model_checkpoint: {
  //           nameHash: `ponyDiffusionV6XL_v6StartWithThisOne.safetensors`,
  //           baseModel: `Pony`,
  //         },
  //         sd_vae: `None`,
  //         samples_format: `png`,
  //         jpeg_quality: 80,
  //         webp_lossless: false,
  //       },
  //     },
  //     options,
  //   );

  //   const validateType = (value: any, expectedType: string, name: string) => {
  //     if (typeof value !== expectedType)
  //       throw new Error(`\`${name}\` must be a ${expectedType}.`);
  //   };

  //   validateType(setting.key, `string`, `key`);
  //   validateType(setting.probability, `number`, `probability`);
  //   validateType(setting.fixedPrompt, `string`, `fixedPrompt`);
  //   validateType(setting.batchGeneration, `number`, `batchGeneration`);
  //   validateType(
  //     setting.optionsBodyJson.sd_model_checkpoint.nameHash,
  //     `string`,
  //     `optionsBodyJson.sd_model_checkpoint.nameHash`,
  //   );
  //   validateType(
  //     setting.optionsBodyJson.sd_model_checkpoint.baseModel,
  //     `string`,
  //     `optionsBodyJson.sd_model_checkpoint.baseModel`,
  //   );
  //   validateType(
  //     setting.optionsBodyJson.sd_vae,
  //     `string`,
  //     `candidate.optionsBodyJson.sd_vae`,
  //   );
  //   validateType(
  //     setting.optionsBodyJson.samples_format,
  //     `string`,
  //     `candidate.optionsBodyJson.samples_format`,
  //   );
  //   validateType(
  //     setting.optionsBodyJson.jpeg_quality,
  //     `number`,
  //     `candidate.optionsBodyJson.jpeg_quality`,
  //   );
  //   validateType(
  //     setting.optionsBodyJson.webp_lossless,
  //     `boolean`,
  //     `candidate.optionsBodyJson.webp_lossless`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.negative_prompt,
  //     `string`,
  //     `candidate.txt2imgBodyJson.negative_prompt`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.sampler_name,
  //     `string`,
  //     `candidate.txt2imgBodyJson.sampler_name`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.steps,
  //     `number`,
  //     `candidate.txt2imgBodyJson.steps`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.width,
  //     `number`,
  //     `candidate.txt2imgBodyJson.width`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.height,
  //     `number`,
  //     `candidate.txt2imgBodyJson.height`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.cfg_scale,
  //     `number`,
  //     `candidate.txt2imgBodyJson.cfg_scale`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.denoising_strength,
  //     `number`,
  //     `candidate.txt2imgBodyJson.denoising_strength`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.enable_hr,
  //     `boolean`,
  //     `candidate.txt2imgBodyJson.enable_hr`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.hr_scale,
  //     `number`,
  //     `candidate.txt2imgBodyJson.hr_scale`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.hr_upscaler,
  //     `string`,
  //     `candidate.txt2imgBodyJson.hr_upscaler`,
  //   );
  //   validateType(
  //     setting.txt2imgBodyJson.hr_second_pass_steps,
  //     `number`,
  //     `candidate.txt2imgBodyJson.hr_second_pass_steps`,
  //   );

  //   return setting as Setting;
  // });

  // return settings;
};

const main = async () => {
  const targetSettings = options.yaml ? readYAML(options.yaml) : settings;

  console.log(targetSettings.map(({ key }) => key));
  console.log(`Prompt build`);
  console.time(`Prompt build`);

  validateSettings(targetSettings);

  const collectedDatas = collect(targetSettings);

  const generationDatas = build(collectedDatas);

  console.log(generationDatas);
  console.timeEnd(`Prompt build`);

  // Export and generate image asynchronously at the same time.
  const promises = [
    exportPrompts(generationDatas),
    // exportAsCSV(join("outputs", "visibility.csv")),
    generate(generationDatas),
  ];
  await Promise.all(promises);
};

main();
