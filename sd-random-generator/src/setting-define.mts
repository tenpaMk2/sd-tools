import { BackgroundKey } from "./backgrounds/resolver.mjs";
import { CharacterDefine, CharacterKey } from "./characters/resolver.mjs";
import { OutfitDefine, OutfitKey } from "./outfits/resolver.mjs";
import { PoseKey } from "./poses/resolver.mjs";

export type BaseModel = `SD1.5` | `Pony` | `Animagine`;

export const allCheckpoints = [
  {
    nameHash: `vividorangemix_v10.safetensors`,
    baseModel: `SD1.5`,
  },
  {
    nameHash: `vividorangemix_v10NSFW.safetensors`,
    baseModel: `SD1.5`,
  },
  { nameHash: `calicomix_v75.safetensors`, baseModel: `SD1.5` },
  {
    nameHash: `calicomixFlatani_v10.safetensors`,
    baseModel: `SD1.5`,
  },
  {
    nameHash: `7thAnimeXLPonyA_v10.safetensors`,
    baseModel: `Pony`,
  },
  {
    nameHash: `autismmixSDXL_autismmixConfetti.safetensors`,
    baseModel: `Pony`,
  },
  {
    nameHash: `chacolebaramixxl_v21.safetensors`,
    baseModel: `Pony`,
  },
  {
    nameHash: `ebara_pony_1.bakedVAE.safetensors`,
    baseModel: `Pony`,
  },
  {
    nameHash: `hamefkawaiimix_typelight.safetensors`,
    baseModel: `Pony`,
  },
  {
    nameHash: `ponyDiffusionV6XL_v6StartWithThisOne.safetensors`,
    baseModel: `Pony`,
  },
  {
    nameHash: `ponymagine91_gamma.safetensors`,
    baseModel: `Pony`, // Also supports `Animagine` .
  },
] as const satisfies { nameHash: string; baseModel: BaseModel }[];
export type Checkpoint = (typeof allCheckpoints)[number];

const allVAEs = [
  `None`,
  `blessed2.vae.safetensors`,
] as const satisfies string[];
export type VAE = (typeof allVAEs)[number];

const allSamplers = [
  `DPM++ 2M Karras`,
  `Euler a`,
  `Restart`,
] as const satisfies string[];
type Sampler = (typeof allSamplers)[number];

const allUpscalers = [
  `Latent`,
  `4x-AnimeSharp`,
  `4x-UltraSharp`,
  `R-ESRGAN 4x+`,
  `R-ESRGAN 4x+ Anime6B`,
] as const satisfies string[];
type Upscaler = (typeof allUpscalers)[number];

export type PoseSetting = Readonly<{
  key: PoseKey;
  probability?: number;
}>;

export type BackgroundSetting = Readonly<{
  key: BackgroundKey;
  probability?: number;
  poses?: PoseSetting[];
}>;

export type OutfitSetting = Readonly<{
  key: OutfitKey;
  probability?: number;
  backgrounds?: BackgroundSetting[];
}>;

export type CharacterSetting = Readonly<{
  keys: CharacterKey[];
  probability?: number;
  outfits?: OutfitSetting[];
}>;

export type GenerationSetting = Readonly<{
  key: string; // Generation name.
  probability?: number;
  fixedPrompt: string;
  /**
   * The number of generations using the same setting.
   * After this number of times an image is generated, the next setting is used to start the generation.
   * Don't confuse with the batch size and batch count in Stable Diffusion web UI.
   */
  batchGeneration: number;
  optionsBodyJson: {
    /**
     * Checkpoint (model).
     * Recommend to use preset values from `checkpointAndVAEPreset`.
     */
    sd_model_checkpoint: string;
    /**
     * VAE.
     * Recommend to use preset values from `checkpointAndVAEPreset`.
     */
    sd_vae: string;
    /**
     * Saved images format.
     * Default is `png` .
     */
    samples_format?: string;
    /**
     * Saved images quality of jpg. (Only for jpg format)
     * Default is `80` .
     */
    jpeg_quality?: number;
    /**
     * Lossless compression of webp. (Only for webp format)
     */
    webp_lossless?: boolean;
  };
  txt2imgBodyJson: {
    negative_prompt: string;
    sampler_name: string;
    steps: number;
    /**
     * Image width.
     * Recommend to use preset values from `imageResolutionPreset`.
     */
    width: number;
    /**
     * Image height.
     * Recommend to use preset values from `imageResolutionPreset`.
     */
    height: number;
    cfg_scale: number;
    /**
     * The denoising strength.
     * Recommended values are `0.2` for Pony, `0.4` for SD1.5.
     */
    denoising_strength: number;
    enable_hr: boolean;
    hr_scale: number;
    hr_upscaler: string;
    hr_second_pass_steps: number;
  };
  characters: CharacterSetting[];
}>;

export type Setting = Readonly<{
  exporting: {
    /**
     * The number of prompts to be exported at once.
     * Increase or decrease this value to adjust the memory usage.
     */
    promptExportingBatchSize: number;

    /**
     * The maximum number of random prompts to be exported.
     */
    maxExportingRandomPrompts: number;
  };

  /**
   * If `true`, the generation continues forever.
   * After the last setting is generated, the first setting is used.
   */
  generateForever: boolean;

  machine: {
    ip: string;
    port: number;
  };

  customDefine?: {
    characters?: { [k: string]: CharacterDefine };
    outfits?: { [k: string]: OutfitDefine };
  };

  generations: GenerationSetting[];
}>;

export type StrictSetting = Setting & {
  generations: (Setting["generations"][number] & {
    optionsBodyJson: Setting["generations"][number]["optionsBodyJson"] & {
      sd_model_checkpoint: Checkpoint["nameHash"];
      sd_vae: VAE;
      samples_format?: `png` | `jpg` | `webp`;
    };
    txt2imgBodyJson: Setting["generations"][number]["txt2imgBodyJson"] & {
      sampler_name: Sampler;
      hr_upscaler: Upscaler;
    };
  })[];
};

// TODO: Change portrait image and landscape image. (Consider `dutch angle` )
// TODO: Support 2 girls setting.
