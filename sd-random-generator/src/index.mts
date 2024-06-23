import { program } from "commander";
import { collect } from "./collector.mjs";
import { Database } from "./db.mjs";
import { generate } from "./image-generator.mjs";
import { log } from "./logger.mjs";
import { Txt2imgGenerator } from "./txt2img-generator.mjs";

/**
 * Parse command line arguments.
 */

program.option(
  `-d, --db-dir <path>`,
  `Database directory path for the YAML files.`,
);
program.parse(process.argv);
const options = program.opts<Record<`dbDir`, string>>();

/**
 * Main.
 */

const main = async () => {
  Database.setDbDir(options["dbDir"]);

  const setting = Database.singleton().defaultSetting; // TODO

  // validateSetting(setting);

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
