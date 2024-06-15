import { program } from "commander";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { parse as parseYaml, stringify as stringifyYaml } from "yaml";
import { characterTable } from "./db/characters/characters.mjs";
import { checkpointTable } from "./db/checkpoint.mjs";
import { loraTable } from "./db/lora.mjs";
import { samplerTable } from "./db/sampler.mjs";
import { upscalerTable } from "./db/upscaler.mjs";
import { vaeTable } from "./db/vae.mjs";
import { log } from "./logger.mjs";

/**
 * Parse command line arguments.
 */

program.option(
  `-o, --output <path>`,
  `Output directory path for the YAML files.`,
  `outputs`,
);
program.parse(process.argv);
const options = program.opts<Record<`output`, string>>();

/**
 * Main.
 */

const exportYaml = (data: unknown, filepath: string) => {
  log(`Exporting to \`${filepath}\` ...`);

  const yamlString = stringifyYaml(data);
  writeFileSync(filepath, yamlString);
};

mkdirSync(options.output, { recursive: true });

exportYaml(characterTable, join(options.output, `character.yaml`));
exportYaml(checkpointTable, join(options.output, `checkpoint.yaml`));
exportYaml(loraTable, join(options.output, `lora.yaml`));
exportYaml(samplerTable, join(options.output, `sampler.yaml`));
exportYaml(upscalerTable, join(options.output, `upscaler.yaml`));
exportYaml(vaeTable, join(options.output, `vae.yaml`));

/**
 * temp
 */

const content = readFileSync(join(options.output, `character.yaml`), `utf8`);
const hoge = parseYaml(content);

console.log(JSON.stringify(hoge));
