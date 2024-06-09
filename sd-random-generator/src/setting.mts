import { Setting, Txt2ImgSetting } from "./setting-define.mjs";
import {
  checkpointAndVAEPreset,
  imageResolutionPreset,
} from "./setting-presets/root.mjs";

const portrait = {
  key: `portrait`,
  fixedPrompt: `score_9, score_8_up, score_7_up, 1girl, solo,\n`,
  txt2imgBodyJson: {
    negative_prompt: `cameltoe, empty eyes, realistic`,
    sampler_name: `Euler a`,
    steps: 25,
    ...imageResolutionPreset.sdxl.portrait,
    cfg_scale: 5,
    denoising_strength: 0.2,
    enable_hr: true,
    hr_scale: 2,
    hr_upscaler: "4x-AnimeSharp",
    hr_second_pass_steps: 0,
  },
  characters: [
    {
      keys: [
        // ...charactersPreset.default[0].keys,
        // `re-zero-emilia-eternal2kpp`,
        // `re-zero-ram-eternal2kpp`,
        `re-zero-rem-eternal2kpp`,
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
        // `tenshi-tsuki-noel`,
        // `higehiro-sayu`,
        // `amaburi-isuzu-h-madoka`,
        // `amaburi-isuzu-nochekaiser`,
        // `new-game-aoba-nochekaiser`,
        // `new-game-hifumi-nochekaiser`,
        // `futoku-no-guild-tokishikko`,
        // `tenshi-sama-mahiru`,
        // `prisma-illya-illya`,
        // `working-popura`,
        // `sasuoni-shiba-honoka-nochekaiser`,
        // `sasuoni-shiba-mizuki-nochekaiser`,
        // `blend-s-mafuyu-ibukimakisiko`,
        // `blend-s-kaho-ibukimakisiko`,
        // `blend-s-kaho-ibukimakisiko-double-bun`,
      ],
      // outfits: [
      //   // { key: `nun` },
      //   // { key: `tennis-uniform` },
      //   // { key: `harem-outfit` },
      //   // { key: `race-queen` },
      //   // { key: `prisma-illya-magical-girl-illya` },
      //   // { key: `rokudenashi-bikini-rumia` },
      //   // { key: `rokudenashi-school-uniform-summer` },
      //   // { key: `rokudenashi-school-uniform-winter` },
      //   // { key: `new-game-suit-aoba` },
      //   { key: `sports-bikini` },
      // ],
      // outfits: (
      //   [
      //     // `race-queen`,
      //     // `sukumizu`,
      //     // `naked-towel`,
      //     // `bikini`,
      //     // `china-dress`,
      //     // `denim-bikini`,
      //     // `gym-uniform`,
      //     // `school-uniform-bowtie`,
      //   ] as OutfitKey[]
      // ).map((key) => ({
      //   key,
      //   backgrounds: [
      //     {
      //       key: `colorful-heart-backgrounds-standing`,
      //       poses: [
      //         {
      //           key: `standing-from-above-from-behind-leaning-forward`,
      //         },
      //         {
      //           key: `standing-from-below-from-behind-leaning-forward`,
      //         },
      //         {
      //           key: `standing-from-horizontal-from-behind-leaning-forward`,
      //         },
      //       ],
      //     },
      //   ],
      // })),
    },
  ],
} as const satisfies Txt2ImgSetting;

const landscape = {
  ...portrait,
  key: `landscape`,
  probability: 0.5,
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
    ...[
      // checkpointAndVAEPreset.sdxl.autismmixDPO,
      // checkpointAndVAEPreset.sdxl.autismmixConfetti,
      checkpointAndVAEPreset.sdxl.ebaraPony2,
      // checkpointAndVAEPreset.sdxl.tponynai,
    ].map((sdxl) => ({
      optionsBodyJson: {
        ...sdxl,
      },
      batchGeneration: 100,
      txt2imgSettings: [portrait, landscape],
    })),
  ],
} as const satisfies Setting;

// TODO: Move vitest ↓
// console.assert(
//   settings.some((s) => 0 < s.batchGeneration),
//   "`batchGeneration` must be an integer greater than 0",
// );
