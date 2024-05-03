import { BackgroundKey } from "./backgrounds/resolver.mjs";
import { CharacterKey } from "./characters/resolver.mjs";
import { OutfitKey } from "./outfits/resolver.mjs";
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
    nameHash: `ebara_pony_1.bakedVAE.safetensors`,
    baseModel: `Pony`,
  },
  {
    nameHash: `ponyDiffusionV6XL_v6StartWithThisOne.safetensors`,
    baseModel: `Pony`,
  },
  {
    nameHash: `chacolebaramixxl_v21.safetensors`,
    baseModel: `Pony`,
  },
] as const satisfies { nameHash: string; baseModel: BaseModel }[];
export type Checkpoint = (typeof allCheckpoints)[number];

const allVAEs = [
  `None`,
  `blessed2.vae.safetensors`,
] as const satisfies string[];
export type VAE = (typeof allVAEs)[number];

const allSamplers = [`Restart`, `Euler a`] as const satisfies string[];
type Sampler = (typeof allSamplers)[number];

const allUpscalers = [`4x-AnimeSharp`] as const satisfies string[];
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

export type GlobalSetting = Readonly<{
  /**
   * The number of prompts to be exported at once.
   * Increase or decrease this value to adjust the memory usage.
   */
  promptExportingBatchSize: number;

  /**
   * The maximum number of random prompts to be exported.
   */
  maxExportingRandomPrompts: number;

  /**
   * If `true`, the generation continues forever.
   * After the last setting is generated, the first setting is used.
   */
  generateForever: boolean;
}>;

export type MachineSetting = Readonly<{
  ip: string;
  port: number;
}>;

export type Setting = Readonly<{
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
    sd_model_checkpoint: Checkpoint["nameHash"];
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
    cfg_scale: 2 | 3 | 4 | 5 | 6 | 7;
    /**
     * The denoising strength.
     * Recommended values are `0.2` for Pony, `0.4` for SD1.5.
     */
    denoising_strength: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6;
    enable_hr: boolean;
    hr_scale: 1.5 | 2 | 2.5;
    hr_upscaler: Upscaler;
    hr_second_pass_steps: 0 | 30;
  };
  characters: CharacterSetting[];
}>;

// TODO: Change portrait image and landscape image. (Consider `dutch angle` )
// TODO: Support 2 girls setting.
