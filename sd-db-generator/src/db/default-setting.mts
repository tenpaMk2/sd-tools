import type { Setting, Txt2ImgSetting } from "../setting-define.mjs";
import { checkpointAndVaePreset } from "./setting-presets/checkpoint-and-vae.mjs";
import { imageResolutionPreset } from "./setting-presets/image-resolution.mjs";

const portrait = {
  key: `portrait`,
  // fixedPrompt: `score_9, score_8_up, score_7_up, 1girl, solo,\n`,
  fixedPrompt: `score_9, 1girl, solo, \n`,
  txt2imgBodyJson: {
    // negative_prompt: `cameltoe, empty eyes, realistic`,
    negative_prompt: ``,
    sampler_name: `Euler a`,
    steps: 25,
    ...imageResolutionPreset["sdxl-portrait"],
    cfg_scale: 5,
    denoising_strength: 0.2,
    enable_hr: false,
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

  characters: [
    ...(
      [
        `kaguya-sama-ai-nochekaiser`,
        `kaguya-sama-miko-nochekaiser`,
        // "to-love-ru-haruna-nochekaiser",
        // "to-love-ru-lala-nochekaiser",
        // "to-love-ru-momo-nochekaiser",
        // "to-love-ru-nana-nochekaiser",
        // `strike-witches-yoshika-gwess`,
        // `strike-witches-yoshika-witch-gwess`,
        // `boufuri-sally-king-dong`,
        // ...charactersPreset.default[0].keys,
        // `goblin-slayer-cow-girl-eternal2kpp`,
        // `goblin-slayer-priestess-eternal2kpp`,
        // `futoku-no-guild-enome-zedotasco`,
        // `to-love-ru-haruna-nochekaiser`,
        // `to-love-ru-nana-nochekaiser`,
        // `to-love-ru-lala-nochekaiser`,
        // `to-love-ru-momo-nochekaiser`,
        // `lycoris-recoil-takina-nochekaiser`,
        // `hyouka-eru-chenkin`,
        // `atelier-ryza-nochekaiser`,
        // `slow-loop-hiyori-ibukimakisiko`,
        // `slow-loop-koharu-ibukimakisiko`,
        // `slow-loop-koi-ibukimakisiko`,
        // `eromanga-sensei-elf-eternal2kpp`,
        // `eromanga-sensei-megumi-eternal2kpp`,
        // `eromanga-sensei-sagiri-eternal2kpp`,
        // `spy-family-yor-eternal2kpp-thorn-princess`,
        // `spy-family-yor-eternal2kpp`,
        // `kaguya-sama-kaguya-eternal2kpp`,
        // `kaguya-sama-chika-eternal2kpp`,
        // `re-zero-emilia-eternal2kpp`,
        // `re-zero-ram-eternal2kpp`,
        // `re-zero-rem-eternal2kpp`,
        // `danmachi-aiz-eternal2kpp`,
        // `danmachi-eina-eternal2kpp`,
        // `danmachi-haruhime-eternal2kpp`,
        // `danmachi-hestia-eternal2kpp`,
        // `danmachi-lili-eternal2kpp`,
        // `danmachi-ryu-eternal2kpp`,
        // `new-game-nene-eternal2kpp`,
        // `new-game-rin-eternal2kpp`,
        // `new-game-kou-eternal2kpp`,
        // `new-game-yun-eternal2kpp`,
        // `new-game-hajime-eternal2kpp`,
        // `new-game-hifumi-eternal2kpp`,
        // `new-game-aoba-eternal2kpp`,
        // `tenshi-tsuki-noel-zedotasco`,
        // `higehiro-sayu`,
        // `amaburi-isuzu-h-madoka`,
        // `amaburi-isuzu-nochekaiser`,
        // `new-game-aoba-nochekaiser`,
        // `new-game-hifumi-nochekaiser`,
        // `futoku-no-guild-tokishikko`,
        // `tenshi-sama-mahiru-jibunsagasinotabi`,
        // `prisma-illya-illya-flujoru`,
        // `working-popura`,
        // `sasuoni-honoka-nochekaiser`,
        // `sasuoni-mizuki-nochekaiser`,
        // `blend-s-mafuyu-ibukimakisiko`,
        // `blend-s-kaho-ibukimakisiko`,
        // `blend-s-kaho-ibukimakisiko-double-bun`,
      ] as const
    ).map((key) => ({
      key,
      outfits: (
        [
          // `micro-bikini`,
          // `race-queen`,
          // `sukumizu`,
          // `naked-towel`,
          // `bikini`,
          // `china-dress`,
          // `denim-bikini`,
          // `gym-uniform`,
          // `school-uniform-bowtie`,
        ] as const
      ).map((key) => ({
        key,
        // backgrounds: [
        //   {
        //     key: `colorful-heart-backgrounds-standing`,
        //     poses: [
        //       {
        //         key: `standing-from-above-from-behind-leaning-forward`,
        //       },
        //       {
        //         key: `standing-from-below-from-behind-leaning-forward`,
        //       },
        //       {
        //         key: `standing-from-horizontal-from-behind-leaning-forward`,
        //       },
        //     ],
        //   },
        // ],
      })),
    })),
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
      checkpointAndVaePreset.tponynai,
      checkpointAndVaePreset.hassakuXlHentai,
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
