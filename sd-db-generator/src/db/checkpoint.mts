export type BaseModel = `SD1.5` | `Pony` | `Animagine`;

export type CheckpointDefine = Readonly<{
  /**
   * Base model.
   * @example `Pony`
   */
  baseModel: BaseModel;
  /**
   * URL for DL.
   */
  url: string;
}>;

/**
 * Checkpoint table. The key is the checkpoint name.
 * @example `autismmixSDXL_autismmixDPO.safetensors`
 */
export const checkpointTable = {
  "7thAnimeXLPonyA_v10.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/395554/7th-anime-xl-pony-a`,
    ).toString(),
  },
  "autismmixSDXL_autismmixConfetti.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/288584?modelVersionId=324524`,
    ).toString(),
  },
  "autismmixSDXL_autismmixDPO.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/288584?modelVersionId=324692`,
    ).toString(),
  },
  "calicomix_v75.safetensors": {
    baseModel: `SD1.5`,
    url: new URL(
      `https://civitai.com/models/49567?modelVersionId=138124`,
    ).toString(),
  },
  "calicomixFlatani_v10.safetensors": {
    baseModel: `SD1.5`,
    url: new URL(
      `https://civitai.com/models/263765/calicomix-flatani`,
    ).toString(),
  },
  "chacolebaramixxl_v21.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/353159?modelVersionId=466655`,
    ).toString(),
  },
  "ebara_pony_1.bakedVAE.safetensors": {
    baseModel: `Pony`,
    url: new URL(`https://huggingface.co/tsukihara/xl_model`).toString(),
  },
  "ebara_pony_2.1.safetensors": {
    baseModel: `Pony`,
    url: new URL(`https://huggingface.co/tsukihara/xl_model`).toString(),
  },
  "hamefkawaiimix_typelight.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/425800?modelVersionId=474429`,
    ).toString(),
  },
  "hassakuXLHentai_v13.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/376031?modelVersionId=575495`,
    ).toString(),
  },
  "momoiropony_v14.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/316882?modelVersionId=382513`,
    ).toString(),
  },
  "ponyDiffusionV6XL_v6StartWithThisOne.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/257749?modelVersionId=298112`,
    ).toString(),
  },
  "ponymagine91_gamma.safetensors": {
    baseModel: `Pony`, // Also supports `Animagine` .
    url: new URL(
      `https://civitai.com/models/391659?modelVersionId=446315`,
    ).toString(),
  },
  "PVCStyleModelMovable_pony151.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/400329?modelVersionId=471122`,
    ).toString(),
  },
  "tPonynai3_v41OptimizedFromV4.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/317902?modelVersionId=469115`,
    ).toString(),
  },
  "tPonynai3_v51WeightOptimized.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/317902?modelVersionId=533326`,
    ).toString(),
  },
  "vividorangemix_v10.safetensors": {
    baseModel: `SD1.5`,
    url: new URL(
      `https://civitai.com/models/196585?modelVersionId=221033`,
    ).toString(),
  },
  "vividorangemix_v10NSFW.safetensors": {
    baseModel: `SD1.5`,
    url: new URL(
      `https://civitai.com/models/196585?modelVersionId=251011`,
    ).toString(),
  },
} as const satisfies Record<string, CheckpointDefine>;

export type CheckpointTable = typeof checkpointTable;
export type CheckpointName = keyof CheckpointTable;
