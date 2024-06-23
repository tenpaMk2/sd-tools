import {
  BackgroundKey,
  CharacterKey,
  CheckpointName,
  OutfitKey,
  PoseKey,
  SamplerName,
  UpscalerName,
  VaeName,
} from "./index.mjs";

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
  key: CharacterKey;
  probability?: number;
  outfits?: OutfitSetting[];
}>;

export type Txt2ImgSetting = Readonly<{
  key: string; // Txt2img generation name.
  probability?: number;
  fixedPrompt: string;

  txt2imgBodyJson: {
    negative_prompt: string;
    sampler_name: SamplerName;
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
    hr_upscaler: UpscalerName;
    hr_second_pass_steps: number;
  };
  characters?: CharacterSetting[];
}>;

export type OptionSetting = Readonly<{
  key?: string;
  optionsBodyJson: {
    /**
     * Checkpoint (model).
     * Recommend to use preset values from `checkpointAndVAEPreset`.
     */
    sd_model_checkpoint: CheckpointName;
    /**
     * VAE.
     * Recommend to use preset values from `checkpointAndVAEPreset`.
     */
    sd_vae: VaeName;
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
