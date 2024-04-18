import { join } from "node:path";
import { exportPrompts } from "./exporter.mjs";
import { build } from "./builders/common.mjs";
import { collect } from "./collector.mjs";
import { settings } from "./setting.mjs";
// import { exportAsCSV } from "./tag-defines/visibility.mjs";
import { generate } from "./generator.mjs";
import { validateSettings } from "./validator.mjs";

const main = async () => {
  console.log(`Prompt build`);
  console.time(`Prompt build`);

  validateSettings(settings);

  const collectedDatas = collect(settings);

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
