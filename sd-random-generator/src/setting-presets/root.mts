import { Checkpoint, VAE } from "../setting-define.mjs";

export const checkpointAndVAEPreset = {
  sd1: {
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
  },
  sdxl: {
    seventhAnime: {
      sd_model_checkpoint: `7thAnimeXLPonyA_v10.safetensors`,
      sd_vae: `None`,
    },
    autismmixConfetti: {
      sd_model_checkpoint: `autismmixSDXL_autismmixConfetti.safetensors`,
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
      sd_model_checkpoint: `ebara_pony_2.safetensors`,
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
    momoiro: {
      sd_model_checkpoint: `momoiropony_v14.safetensors`,
      sd_vae: `None`,
    },
    tponynai: {
      sd_model_checkpoint: `tPonynai3_v51WeightOptimized.safetensors`,
      sd_vae: `None`,
    },
  },
} as const satisfies Record<
  `sd1` | `sdxl`,
  Record<
    string,
    {
      sd_model_checkpoint: Checkpoint;
      sd_vae: VAE;
    }
  >
>;

export const imageResolutionPreset = {
  sd1: {
    square: {
      width: 512,
      height: 512,
    },
    portrait: {
      width: 512,
      height: 768,
    },
    landscape: {
      width: 768,
      height: 512,
    },
    tall: {
      width: 512,
      height: 912,
    },
    widescreen: {
      width: 768,
      height: 512,
    },
  },
  sdxl: {
    square: {
      width: 1024,
      height: 1024,
    },
    portrait: {
      width: 864,
      height: 1152,
    },
    landscape: {
      width: 1152,
      height: 864,
    },
    /**
     * 9:16.
     * Not reccomened because this cause long torso problem.
     */
    tall: {
      width: 768,
      height: 1360,
    },
    widescreen: {
      width: 1360,
      height: 768,
    },
  },
} as const satisfies Record<
  `sd1` | `sdxl`,
  Record<
    `square` | `portrait` | `landscape` | `tall` | `widescreen`,
    {
      width: number;
      height: number;
    }
  >
>;
