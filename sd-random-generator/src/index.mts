import { Command } from "commander";
import packageJson from "../package.json";
import { collect } from "./collector.mjs";
import { generate } from "./image-generator.mjs";
import { PromptGenerator } from "./prompt-generator.mjs";
import { setSetting, setting, staticSetting } from "./setting.mjs";
import { validateSetting } from "./validator.mjs";

// TODO: logging library

const program = new Command();
program.name(packageJson.name);
program.description(packageJson.description);
program.version(packageJson.version);
program.option(`-y, --yaml <path>`, `The path for the setting YAML file.`);
program.parse();
const options = program.opts();

const main = async () => {
  const newSetting = staticSetting;
  setSetting(newSetting);

  validateSetting(setting);

  const collectedData = collect(setting);
  const generationData = {
    ...collectedData,
    options: collectedData.options.map((option) => ({
      ...option,
      promptGenerator: new PromptGenerator(option),
    })),
  };

  // Export and generate image asynchronously at the same time.
  const promises = [
    // exportPrompts(generationDatas),
    // exportAsCSV(join("outputs", "visibility.csv")),
    generate(generationData),
  ];
  await Promise.all(promises);
};

main();
