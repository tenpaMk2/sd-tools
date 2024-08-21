export type VaeDefine = Readonly<{}>;

/**
 * VAE table. The key is the VAE name.
 * @example `blessed2.vae.safetensors`
 */
export const vaeTable = {
  "None": {},
  "blessed2.vae.safetensors": {},
  "flatpiecexlVAE_baseonA1579.safetensors": {},
} as const satisfies Record<string, VaeDefine>;

export type VaeTable = typeof vaeTable;
export type VaeName = keyof VaeTable;
