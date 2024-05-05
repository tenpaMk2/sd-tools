import { Command } from "commander";
import packageJson from "../package.json";
import { build } from "./builders/common.mjs";
import { collect } from "./collector.mjs";
import { generate } from "./generator.mjs";
import { setSetting, setting, staticSetting } from "./setting.mjs";
import { validateSettings } from "./validator.mjs";
import { readSettingFromYAML } from "./yaml.mjs";

// TODO: logging library

const program = new Command();
program.name(packageJson.name);
program.description(packageJson.description);
program.version(packageJson.version);
program.option(`-y, --yaml <path>`, `The path for the setting YAML file.`);
program.parse();
const options = program.opts();

const main = async () => {
  const newSetting = options.yaml
    ? readSettingFromYAML(options.yaml)
    : staticSetting;
  setSetting(newSetting);

  console.log(setting.generations.map(({ key }) => key));
  console.log(`Prompt build`);
  console.time(`Prompt build`);

  validateSettings(setting.generations);

  const collectedDatas = collect(setting.generations, {
    customDefine: setting.customDefine,
  });

  const randomPickers = build(collectedDatas);

  // console.log(randomPicker);
  console.timeEnd(`Prompt build`);

  // Export and generate image asynchronously at the same time.
  const promises = [
    // exportPrompts(generationDatas),
    // exportAsCSV(join("outputs", "visibility.csv")),
    generate(randomPickers),
  ];
  await Promise.all(promises);
};

main();
