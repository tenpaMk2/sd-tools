import { BackgroundKey } from "./backgrounds/backgrounds.mjs";
import { CharacterKey } from "./characters/characters.mjs";
import { OutfitKey } from "./outfits/outfits.mjs";
import { PoseKey } from "./poses/poses.mjs";

export const allCheckpoints = [
  `vividorangemix_v10.safetensors`,
  `vividorangemix_v10NSFW.safetensors`,
  `calicomix_v75.safetensors`,
  `calicomixFlatani_v10.safetensors`,
  `7thAnimeXLPonyA_v10.safetensors`,
  `autismmixSDXL_autismmixConfetti.safetensors`,
  `chacolebaramixxl_v21.safetensors`,
  `ebara_pony_1.bakedVAE.safetensors`,
  `hamefkawaiimix_typelight.safetensors`,
  `ponyDiffusionV6XL_v6StartWithThisOne.safetensors`,
  `ponymagine91_gamma.safetensors`,
  `raemoraXL_v10.safetensors`,
] as const satisfies string[];
export type Checkpoint = (typeof allCheckpoints)[number];

export type BaseModel = `SD1.5` | `Pony` | `Animagine`;

export const checkpointInfo = {
  "vividorangemix_v10.safetensors": { baseModel: `SD1.5` },
  "vividorangemix_v10NSFW.safetensors": { baseModel: `SD1.5` },
  "calicomix_v75.safetensors": { baseModel: `SD1.5` },
  "calicomixFlatani_v10.safetensors": { baseModel: `SD1.5` },
  "7thAnimeXLPonyA_v10.safetensors": { baseModel: `Pony` },
  "autismmixSDXL_autismmixConfetti.safetensors": { baseModel: `Pony` },
  "chacolebaramixxl_v21.safetensors": { baseModel: `Pony` },
  "ebara_pony_1.bakedVAE.safetensors": { baseModel: `Pony` },
  "hamefkawaiimix_typelight.safetensors": { baseModel: `Pony` },
  "ponyDiffusionV6XL_v6StartWithThisOne.safetensors": { baseModel: `Pony` },
  "ponymagine91_gamma.safetensors": { baseModel: `Pony` }, // Also supports `Animagine` .
  "raemoraXL_v10.safetensors": { baseModel: `Pony` },
} as const satisfies Record<Checkpoint, { baseModel: BaseModel }>;

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

export type Txt2ImgSetting = Readonly<{
  key: string; // Txt2img generation name.
  probability?: number;
  fixedPrompt: string;

  txt2imgBodyJson: {
    negative_prompt: string;
    sampler_name: Sampler;
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
    hr_upscaler: Upscaler;
    hr_second_pass_steps: number;
  };
  characters: CharacterSetting[];
}>;

export type OptionSetting = Readonly<{
  key?: string;
  optionsBodyJson: {
    /**
     * Checkpoint (model).
     * Recommend to use preset values from `checkpointAndVAEPreset`.
     */
    sd_model_checkpoint: Checkpoint;
    /**
     * VAE.
     * Recommend to use preset values from `checkpointAndVAEPreset`.
     */
    sd_vae: VAE;
    /**
     * Saved images format.
     * Default is `png` .
     */
    samples_format?: `png` | `jpg` | `webp`;
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

  /**
   * The number of generations using the same setting.
   * After this number of times an image is generated, the next setting is used to start the generation.
   * Don't confuse with the batch size and batch count in Stable Diffusion web UI (or Forge).
   */
  batchGeneration: number;

  txt2imgSettings: Txt2ImgSetting[];
}>;

export type Setting = Readonly<{
  export: {
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

  optionSettings: OptionSetting[];
}>;

// TODO: Change portrait image and landscape image. (Consider `dutch angle` )
// TODO: Support 2 girls setting.
