import { Command } from "commander";
import { readFileSync } from "fs";
import { parse } from "yaml";
import packageJson from "../package.json";
import { build } from "./builders/common.mjs";
import { collect } from "./collector.mjs";
import { exportPrompts } from "./exporter.mjs";
import { generate } from "./generator.mjs";
import { Setting } from "./setting-define.mjs";
import { setSetting, setting, staticSetting } from "./setting.mjs";
import { validateSettings } from "./validator.mjs";

const program = new Command();
program.name(packageJson.name);
program.description(packageJson.description);
program.version(packageJson.version);
program.option(`-y, --yaml <path>`, `The path for the setting YAML file.`);
program.parse();
const options = program.opts();

const readYAML = (yamlPath: string): Setting => {
  const str = readFileSync(yamlPath, `utf8`);
  const yaml = parse(str);

  // TODO: validation
  return yaml as Setting;
};

const main = async () => {
  const newSetting = options.yaml ? readYAML(options.yaml) : staticSetting;
  setSetting(newSetting);

  console.log(setting.generations.map(({ key }) => key));
  console.log(`Prompt build`);
  console.time(`Prompt build`);

  validateSettings(setting.generations);

  const collectedDatas = collect(setting.generations);

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
