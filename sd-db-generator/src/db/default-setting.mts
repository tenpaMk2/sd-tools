import type {
  CharacterSetting,
  OutfitSetting,
  Setting,
  Txt2ImgSetting,
} from "../setting-define.mjs";
import { charactersPreset } from "./setting-presets/character.mjs";
import { checkpointAndVaePreset } from "./setting-presets/checkpoint-and-vae.mjs";
import { imageResolutionPreset } from "./setting-presets/image-resolution.mjs";

const portrait = {
  key: `portrait`,
  fixedPrompt: `score_9,\n`,
  txt2imgBodyJson: {
    negative_prompt: ``,
    sampler_name: `DPM++ 3M SDE`,
    scheduler: `Automatic`,
    steps: 35,
    ...imageResolutionPreset["sdxl-portrait"],
    cfg_scale: 5,
    denoising_strength: 0.3,
    enable_hr: true,
    hr_scale: 2,
    hr_upscaler: "4x-AnimeSharp",
    hr_second_pass_steps: 20,
    alwayson_scripts: {
      ADetailer: {
        args: [
          true,
          false,
          {
            ad_model: "face_yolov8n.pt",
            ad_mask_min_ratio: 0.02,
            ad_mask_max_ratio: 1.0,
            // ad_inpaint_width: 512,
            // ad_inpaint_height: 512,
            // ad_use_steps: true,
            // ad_steps: 28,
          },
        ],
      },
    },
  },

  extensions: {
    // freeuIntegrated: {
    //   enable: true,
    //   b1: 1.3,
    //   b2: 1.4,
    //   s1: 0.9,
    //   s2: 0.2,
    // },
  },

  // characters: charactersPreset.default,
  characters: [
    ...(
      [
        ...charactersPreset.baseCharacters,
        // { key: `sematsuka-regina-judge-naegi` },
        // { key: `sematsuka-riselia-judge-naegi` },
      ] satisfies CharacterSetting[]
    ).map(
      (c): CharacterSetting => ({
        ...c,
        outfits: (
          [
            // ...outfitsPreset.default,
            // { key: `floral-print-bikini-frill` },
            // { key: `floral-print-bikini-o-ring` },
            // { key: `floral-print-bikini-tie` },
            // { key: `white-bikini` },
            { key: `playboy-bunny` },
          ] satisfies OutfitSetting[]
        ).map((o) => ({
          ...o,
          // backgrounds: [
          //   {
          //     key: `sweat-white-background-standing-for-armpit`,
          //     // poses: [{ key: `standing-from-horizontal-arm-up-from-side` }],
          //   },
          // ] satisfies BackgroundSetting[],
        })),
      }),
    ),
  ],
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
      checkpointAndVaePreset.hassakuXlHentai,
      // checkpointAndVaePreset.pvcStyle,
      // checkpointAndVaePreset.aaaautismRestart,
      // checkpointAndVaePreset.aniMixV9XlV25,
      // checkpointAndVaePreset.hentaiCinematicPony2,
      // checkpointAndVaePreset.evaclausmix,
      // checkpointAndVaePreset.malaAnimeMix,
      checkpointAndVaePreset.boleromix,
      // checkpointAndVaePreset.snowpony,
      // checkpointAndVaePreset.isolice,
      // checkpointAndVaePreset.catdash,
      // checkpointAndVaePreset.sweetmix,
      // checkpointAndVaePreset.snowpony,
    ].map((sdxl) => ({
      optionsBodyJson: {
        ...sdxl,
      },
      batchGeneration: 100,
      txt2imgSettings: [portrait, landscape],
    })),
    // {
    //   optionsBodyJson: { ...checkpointAndVaePreset.snowpony },
    //   batchGeneration: 100,
    //   txt2imgSettings: [
    //     {
    //       ...portrait,
    //       txt2imgBodyJson: {
    //         ...portrait.txt2imgBodyJson,
    //         negative_prompt: `realistic, photorealistic`,
    //       },
    //     },
    //     {
    //       ...landscape,
    //       txt2imgBodyJson: {
    //         ...landscape.txt2imgBodyJson,
    //         negative_prompt: `realistic, photorealistic`,
    //       },
    //     },
    //   ],
    // },
  ],
} as const satisfies Setting;
