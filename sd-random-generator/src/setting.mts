import { Setting, Txt2ImgSetting } from "./setting-define.mjs";
import {
  checkpointAndVAEPreset,
  imageResolutionPreset,
} from "./setting-presets/root.mjs";

const portrait = {
  key: `portrait`,
  fixedPrompt: `score_9, score_8_up, score_7_up, source_anime, 1girl, solo, megami magazine,\n`,
  txt2imgBodyJson: {
    negative_prompt: `cameltoe, empty eyes, realistic`,
    sampler_name: `Euler a`,
    steps: 25,
    ...imageResolutionPreset.sdxl.portrait,
    cfg_scale: 5,
    denoising_strength: 0.2,
    enable_hr: false,
    hr_scale: 2,
    hr_upscaler: "4x-AnimeSharp",
    hr_second_pass_steps: 0,
  },
  characters: [
    {
      keys: [
        `blend-s-mafuyu-ibukimakisiko`,
        // `blend-s-kaho-ibukimakisiko`,
        // `blend-s-kaho-ibukimakisiko-double-bun`,
      ],
      // keys: charactersPreset.default[0].keys,
      // outfits: outfitsPreset.temp,
    },
  ],
} as const satisfies Txt2ImgSetting;

const landscape = {
  ...portrait,
  key: `landscape`,
  txt2imgBodyJson: {
    ...portrait.txt2imgBodyJson,
    ...imageResolutionPreset.sdxl.landscape,
  },
} as const satisfies Txt2ImgSetting;

export const setting = {
  export: {
    promptExportingBatchSize: 1000,
    maxExportingRandomPrompts: 1000,
  },
  generateForever: true,
  machine: {
    ip: `192.168.10.3`,
    port: 7860,
  },
  optionSettings: [
    {
      optionsBodyJson: {
        ...checkpointAndVAEPreset.sdxl.autismmixConfetti,
      },
      batchGeneration: 100,
      txt2imgSettings: [portrait, landscape],
    },
  ],
} as const satisfies Setting;

// TODO: Move vitest ↓
// console.assert(
//   settings.some((s) => 0 < s.batchGeneration),
//   "`batchGeneration` must be an integer greater than 0",
// );
