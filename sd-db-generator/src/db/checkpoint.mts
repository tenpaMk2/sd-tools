export type BaseModel = `SD1.5` | `Pony` | `Animagine`;

type CheckpointDefine = Readonly<{ baseModel: BaseModel }>;

/**
 * Checkpoint table. The key is the checkpoint name.
 * @example `autismmixSDXL_autismmixDPO.safetensors`
 */
export const checkpointTable = {
  "7thAnimeXLPonyA_v10.safetensors": { baseModel: `Pony` },
  "autismmixSDXL_autismmixConfetti.safetensors": { baseModel: `Pony` },
  "autismmixSDXL_autismmixDPO.safetensors": { baseModel: `Pony` },
  "calicomix_v75.safetensors": { baseModel: `SD1.5` },
  "calicomixFlatani_v10.safetensors": { baseModel: `SD1.5` },
  "chacolebaramixxl_v21.safetensors": { baseModel: `Pony` },
  "ebara_pony_1.bakedVAE.safetensors": { baseModel: `Pony` },
  "ebara_pony_2.1.safetensors": { baseModel: `Pony` },
  "hamefkawaiimix_typelight.safetensors": { baseModel: `Pony` },
  "momoiropony_v14.safetensors": { baseModel: `Pony` },
  "ponyDiffusionV6XL_v6StartWithThisOne.safetensors": { baseModel: `Pony` },
  "ponymagine91_gamma.safetensors": { baseModel: `Pony` }, // Also supports `Animagine` .
  "tPonynai3_v41OptimizedFromV4.safetensors": { baseModel: `Pony` },
  "tPonynai3_v51WeightOptimized.safetensors": { baseModel: `Pony` },
  "vividorangemix_v10.safetensors": { baseModel: `SD1.5` },
  "vividorangemix_v10NSFW.safetensors": { baseModel: `SD1.5` },
} as const satisfies Record<string, CheckpointDefine>;

export type CheckpointName = keyof typeof checkpointTable;
