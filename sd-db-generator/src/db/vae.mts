type VaeDefine = Readonly<{}>;

/**
 * VAE table. The key is the VAE name.
 * @example `blessed2.vae.safetensors`
 */
export const vaeTable = {
  "None": {},
  "blessed2.vae.safetensors": {},
} as const satisfies Record<string, VaeDefine>;

export type VaeName = keyof typeof vaeTable;
