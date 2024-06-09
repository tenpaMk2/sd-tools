import { collect } from "./collector.mjs";
import { generate } from "./image-generator.mjs";
import { log } from "./logger.mjs";
import { setting } from "./setting.mjs";
import { Txt2imgGenerator } from "./txt2img-generator.mjs";
import { validateSetting } from "./validator.mjs";

const main = async () => {
  validateSetting(setting);

  log(`Collecting...`);
  const collectedData = collect(setting);
  const generationData = {
    ...collectedData,
    options: collectedData.options.map((option) => ({
      ...option,
      txt2imgGenerator: new Txt2imgGenerator(option),
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
