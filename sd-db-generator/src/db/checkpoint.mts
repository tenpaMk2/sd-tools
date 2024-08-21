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
  "aaaautismPonyFinetune_aaaaReStart.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/353543/aaaautism-or-pony-finetune-mix?modelVersionId=630950`,
    ).toString(),
  },
  "animixv9xlAnimetvMix_animixv9xlV25REV.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/454878/animixv9xl-animetv-mixanime-screencap?modelVersionId=641236`,
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
  "boleromixPony_v141VAE.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/448716?modelVersionId=629179`,
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
  "catdash_v10.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/658613?modelVersionId=736922`,
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
  "evaclausmixPonyXL_v21.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/418105/evaclausmix-pony-xl`,
    ).toString(),
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
  "hentaiCinematicPony_v2.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/492705/hentaicinematicpony?modelVersionId=637173`,
    ).toString(),
  },
  "isolicePonyXL_isolice.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/664573?modelVersionId=743719`,
    ).toString(),
  },
  "malaAnimeMixNSFW_v60.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/442163?modelVersionId=659529`,
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
  "snowpony_v10.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/522596?modelVersionId=580625`,
    ).toString(),
  },
  "sweetMix_xlPonyV11.safetensors": {
    baseModel: `Pony`,
    url: new URL(
      `https://civitai.com/models/18927?modelVersionId=698745`,
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
