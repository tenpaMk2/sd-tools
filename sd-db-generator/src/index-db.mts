import { program } from "commander";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { stringify as stringifyYaml } from "yaml";
import { backgroundTable } from "./db/backgrounds/backgrounds.mjs";
import { characterTable } from "./db/characters/characters.mjs";
import { checkpointTable } from "./db/checkpoint.mjs";
import { defaultSetting } from "./db/default-setting.mjs";
import { emotionTable } from "./db/emotions/emotions.mjs";
import { emotionProbabilitiesAtEmotionType } from "./db/emotions/probabilities-at-emotion-type.mjs";
import { loraTable } from "./db/lora.mjs";
import { outfitTable } from "./db/outfits/outfits.mjs";
import { poseTable } from "./db/poses/poses.mjs";
import { samplerTable } from "./db/sampler.mjs";
import { backgroundsPreset } from "./db/setting-presets/background.mjs";
import { charactersPreset } from "./db/setting-presets/character.mjs";
import { checkpointAndVaePreset } from "./db/setting-presets/checkpoint-and-vae.mjs";
import { imageResolutionPreset } from "./db/setting-presets/image-resolution.mjs";
import { outfitsPreset } from "./db/setting-presets/outfit.mjs";
import { posesPreset } from "./db/setting-presets/pose.mjs";
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
exportYaml(outfitTable, join(options.output, `outfit.yaml`));
exportYaml(backgroundTable, join(options.output, `background.yaml`));
exportYaml(poseTable, join(options.output, `pose.yaml`));
exportYaml(emotionTable, join(options.output, `emotion.yaml`));
exportYaml(
  emotionProbabilitiesAtEmotionType,
  join(options.output, `emotion-probabilities-at-emotion-type.yaml`),
);

exportYaml(
  checkpointAndVaePreset,
  join(options.output, `checkpoint-and-vae-preset.yaml`),
);
exportYaml(
  imageResolutionPreset,
  join(options.output, `image-resolution-preset.yaml`),
);
exportYaml(charactersPreset, join(options.output, `characters-preset.yaml`));
exportYaml(outfitsPreset, join(options.output, `outfits-preset.yaml`));
exportYaml(backgroundsPreset, join(options.output, `backgrounds-preset.yaml`));
exportYaml(posesPreset, join(options.output, `poses-preset.yaml`));

exportYaml(checkpointTable, join(options.output, `checkpoint.yaml`));
exportYaml(loraTable, join(options.output, `lora.yaml`));
exportYaml(samplerTable, join(options.output, `sampler.yaml`));
exportYaml(upscalerTable, join(options.output, `upscaler.yaml`));
exportYaml(vaeTable, join(options.output, `vae.yaml`));

exportYaml(defaultSetting, join(options.output, `default-setting.yaml`));
