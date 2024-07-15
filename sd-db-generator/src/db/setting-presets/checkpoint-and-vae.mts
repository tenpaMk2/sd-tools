import type { CheckpointName } from "../checkpoint.mjs";
import type { VaeName } from "../vae.mjs";

export type CheckpointAndVaePresetDefine = {
  sd_model_checkpoint: CheckpointName;
  sd_vae: VaeName;
};

export const checkpointAndVaePreset = {
  vividorangemix: {
    sd_model_checkpoint: `vividorangemix_v10.safetensors`,
    sd_vae: `blessed2.vae.safetensors`,
  },
  vividorangemixNSFW: {
    sd_model_checkpoint: `vividorangemix_v10NSFW.safetensors`,
    sd_vae: `blessed2.vae.safetensors`,
  },
  calico: {
    sd_model_checkpoint: `calicomix_v75.safetensors`,
    sd_vae: `None`,
  },
  calicoFlat: {
    sd_model_checkpoint: `calicomixFlatani_v10.safetensors`,
    sd_vae: `None`,
  },
  seventhAnime: {
    sd_model_checkpoint: `7thAnimeXLPonyA_v10.safetensors`,
    sd_vae: `None`,
  },
  autismmixConfetti: {
    sd_model_checkpoint: `autismmixSDXL_autismmixConfetti.safetensors`,
    sd_vae: `None`,
  },
  autismmixDPO: {
    sd_model_checkpoint: `autismmixSDXL_autismmixDPO.safetensors`,
    sd_vae: `None`,
  },
  chacolEbara: {
    sd_model_checkpoint: `chacolebaramixxl_v21.safetensors`,
    sd_vae: `None`,
  },
  ebaraPony: {
    sd_model_checkpoint: `ebara_pony_1.bakedVAE.safetensors`,
    sd_vae: `None`,
  },
  ebaraPony2: {
    sd_model_checkpoint: `ebara_pony_2.1.safetensors`,
    sd_vae: `None`,
  },
  hassakuXlHentai: {
    sd_model_checkpoint: `hassakuXLHentai_v13.safetensors`,
    sd_vae: `None`,
  },
  hamefkawaii: {
    sd_model_checkpoint: `hamefkawaiimix_typelight.safetensors`,
    sd_vae: `None`,
  },
  pony: {
    sd_model_checkpoint: `ponyDiffusionV6XL_v6StartWithThisOne.safetensors`,
    sd_vae: `None`,
  },
  ponymagine: {
    sd_model_checkpoint: `ponymagine91_gamma.safetensors`,
    sd_vae: `None`,
  },
  pvcStyle: {
    sd_model_checkpoint: `PVCStyleModelMovable_pony151.safetensors`,
    sd_vae: `None`,
  },
  momoiro: {
    sd_model_checkpoint: `momoiropony_v14.safetensors`,
    sd_vae: `None`,
  },
  tponynai: {
    sd_model_checkpoint: `tPonynai3_v51WeightOptimized.safetensors`,
    sd_vae: `None`,
  },
  aaaautismRestart: {
    sd_model_checkpoint: `aaaautismPonyFinetune_aaaaReStart.safetensors`,
    sd_vae: `None`,
  },
  aniMixV9XlV25: {
    sd_model_checkpoint: `animixv9xlAnimetvMix_animixv9xlV25REV.safetensors`,
    sd_vae: `None`,
  },
  hentaiCinematicPony2: {
    sd_model_checkpoint: `hentaiCinematicPony_v2.safetensors`,
    sd_vae: `None`,
  },
} as const satisfies Record<string, CheckpointAndVaePresetDefine>;

export type CheckpointAndVaePreset = typeof checkpointAndVaePreset;
export type CheckpointAndVaePresetKey = keyof CheckpointAndVaePreset;
