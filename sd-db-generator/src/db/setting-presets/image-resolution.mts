export type ImageResolutionPresetDefine = {
  width: number;
  height: number;
};

export const imageResolutionPreset = {
  "sd1-square": {
    width: 512,
    height: 512,
  },
  "sd1-portrait": {
    width: 512,
    height: 768,
  },
  "sd1-landscape": {
    width: 768,
    height: 512,
  },
  "sd1-tall": {
    width: 512,
    height: 912,
  },
  "sd1-widescreen": {
    width: 768,
    height: 512,
  },
  "sdxl-square": {
    width: 1024,
    height: 1024,
  },
  "sdxl-portrait": {
    width: 896,
    height: 1152,
  },
  "sdxl-landscape": {
    width: 1152,
    height: 896,
  },
  /**
   * 9:16.
   * Not reccomened because this cause long torso problem.
   */
  "sdxl-tall": {
    width: 768,
    height: 1344,
  },
  "sdxl-widescreen": {
    width: 1344,
    height: 768,
  },
} as const satisfies Record<string, ImageResolutionPresetDefine>;

export type ImageResolutionPreset = typeof imageResolutionPreset;
export type ImageResolutionPresetKey = keyof ImageResolutionPreset;
