export type UpscalerDefine = Readonly<{}>;

/**
 * Upscaler table. The key is the upscaler name.
 * @example "Euler a"
 */
export const upscalerTable = {
  "4x-AnimeSharp": {},
  "4x-UltraSharp": {},
  "Latent": {},
  "R-ESRGAN 4x+ Anime6B": {},
  "R-ESRGAN 4x+": {},
} as const satisfies Record<string, UpscalerDefine>;

export type UpscalerTable = typeof upscalerTable;
export type UpscalerName = keyof UpscalerTable;
