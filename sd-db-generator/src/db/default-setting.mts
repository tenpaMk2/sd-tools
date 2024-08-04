import type {
  CharacterSetting,
  Setting,
  Txt2ImgSetting,
} from "../setting-define.mjs";
import { checkpointAndVaePreset } from "./setting-presets/checkpoint-and-vae.mjs";
import { imageResolutionPreset } from "./setting-presets/image-resolution.mjs";

const portrait = {
  key: `portrait`,
  fixedPrompt: `score_9,\n`,
  txt2imgBodyJson: {
    negative_prompt: ``,
    // sampler_name: `Euler a`,
    sampler_name: `DPM++ 3M SDE`,
    scheduler: `Automatic`,
    // sampler_name: `DPM++ 3M SDE Exponential`,
    // sampler_name: `Restart`,
    steps: 35,
    ...imageResolutionPreset["sdxl-portrait"],
    cfg_scale: 5,
    denoising_strength: 0.2,
    enable_hr: true,
    hr_scale: 2,
    hr_upscaler: "4x-AnimeSharp",
    hr_second_pass_steps: 20,
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
  characters: (
    [
      // ...charactersPreset.baseCharacters,
      // { key: `eromanga-sensei-muramasa-little-jelly` },
      // { key: `eromanga-sensei-tomoe-little-jelly` },
      // { key: `isekai-nonbiri-nouka-rurushi-little-jelly` },
      { key: `isekai-nonbiri-nouka-ann-little-jelly` },
    ] satisfies CharacterSetting[]
  ).map(
    (c): CharacterSetting => ({
      ...c,
      // outfits: (
      //   [
      //     // ...outfitsPreset.default,
      //     // { key: `babydoll` },
      //     // { key: `bikini-frill` },
      //     // { key: `bikini-o-ring` },
      //     // { key: `bikini-tie` },
      //     // { key: `bridal-lingerie` },
      //     // { key: `camisole-denim-shorts` },
      //     // { key: `cheerleader` },
      //     // { key: `china-dress` },
      //     // { key: `cow-print-bikini` },
      //     // { key: `denim-bikini` },
      //     // { key: `harem-outfit` },
      //     // { key: `maid-bikini` },
      //     // { key: `micro-bikini` },
      //     // { key: `naked-towel` },
      //     // { key: `playboy-bunny` },
      //     // { key: `revealing-miko` },
      //     // { key: `santa-bikini` },
      //     // { key: `sports-bikini` },
      //     // { key: `sukumizu-thighhighs` },
      //     // { key: `sukumizu` },
      //     // { key: `tank-top-dolphin-shorts` },
      //     // { key: `sundress` },
      //     // { key: `dirndl` },
      //     // { key: `undressing-shirt` },
      //     // { key: `naked-shirt` },
      //     { key: `eromanga-sensei-kimono-muramasa-little-jelly` },
      //     { key: `eromanga-sensei-serafuku-muramasa-little-jelly` },
      //     { key: `eromanga-sensei-sundress-muramasa-little-jelly` },
      //   ] satisfies OutfitSetting[]
      // ).map((o) => ({
      //   ...o,
      //   // backgrounds: [
      //   //   {
      //   //     key: `sweat-white-background-standing-for-armpit`,
      //   //     // poses: [{ key: `standing-from-horizontal-arm-up-from-side` }],
      //   //   },
      //   // ] satisfies BackgroundSetting[],
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
      // checkpointAndVaePreset.aaaautismRestart,
      // checkpointAndVaePreset.aniMixV9XlV25,
      // checkpointAndVaePreset.hentaiCinematicPony2,
      // checkpointAndVaePreset.evaclausmix,
      // checkpointAndVaePreset.malaAnimeMix,
      checkpointAndVaePreset.boleromix,
      // checkpointAndVaePreset.snowpony,
    ].map((sdxl) => ({
      optionsBodyJson: {
        ...sdxl,
      },
      batchGeneration: 100,
      txt2imgSettings: [portrait, landscape],
    })),
  ],
} as const satisfies Setting;
