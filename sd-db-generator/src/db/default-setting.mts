import type {
  CharacterSetting,
  Setting,
  Txt2ImgSetting,
} from "../setting-define.mjs";
import { checkpointAndVaePreset } from "./setting-presets/checkpoint-and-vae.mjs";
import { imageResolutionPreset } from "./setting-presets/image-resolution.mjs";

const portrait = {
  key: `portrait`,
  // fixedPrompt: `score_9, score_8_up, score_7_up, 1girl, solo,\n`,
  fixedPrompt: `score_9,\n`,
  txt2imgBodyJson: {
    // negative_prompt: `cameltoe, empty eyes, realistic`,
    negative_prompt: ``,
    sampler_name: `Euler a`,
    steps: 25,
    ...imageResolutionPreset["sdxl-portrait"],
    cfg_scale: 5,
    denoising_strength: 0.2,
    enable_hr: true,
    hr_scale: 2,
    hr_upscaler: "4x-AnimeSharp",
    hr_second_pass_steps: 0,
  },

  extensions: {
    freeuIntegrated: {
      enable: true,
      b1: 1.3,
      b2: 1.4,
      s1: 0.9,
      s2: 0.2,
    },
  },

  // characters: charactersPreset.default,
  characters: (
    [
      // ...charactersPreset.baseCharacters,
      { key: `mushoku-tensei-roxy-ibukimakisiko-pajamas` },
    ] satisfies CharacterSetting[]
  ).map(
    (c): CharacterSetting => ({
      ...c,
      // outfits: (
      //   [
      //     { key: `bikini-frill` },
      //     { key: `bikini-o-ring` },
      //     { key: `bikini-tie` },
      //   ] satisfies OutfitSetting[]
      // ).map((o) => ({
      //   ...o,
      //   // backgrounds: [
      //   //   {
      //   //     key: `colorful-heart-backgrounds-standing`,
      //   //     poses: [
      //   //       {
      //   //         key: `standing-from-above-from-behind-leaning-forward`,
      //   //       },
      //   //       {
      //   //         key: `standing-from-below-from-behind-leaning-forward`,
      //   //       },
      //   //       {
      //   //         key: `standing-from-horizontal-from-behind-leaning-forward`,
      //   //       },
      //   //     ],
      //   //   },
      //   // ],
      // })),
    }),
  ),
} as const satisfies Txt2ImgSetting;

const landscape = {
  ...portrait,
  key: `landscape`,
  probability: 0.5,
  txt2imgBodyJson: {
    ...portrait.txt2imgBodyJson,
    ...imageResolutionPreset["sdxl-landscape"],
  },
} as const satisfies Txt2ImgSetting;

export const defaultSetting = {
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
    ...[
      // checkpointAndVAEPreset.sdxl.autismmixDPO,
      checkpointAndVaePreset.ebaraPony2,
      // checkpointAndVaePreset.autismmixConfetti,
      // checkpointAndVaePreset.tponynai,
      // checkpointAndVaePreset.hassakuXlHentai,
      // checkpointAndVaePreset.pvcStyle,
    ].map((sdxl) => ({
      optionsBodyJson: {
        ...sdxl,
      },
      batchGeneration: 100,
      txt2imgSettings: [portrait, landscape],
    })),
  ],
} as const satisfies Setting;
