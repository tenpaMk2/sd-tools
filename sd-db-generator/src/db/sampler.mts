type SamplerDefine = Readonly<{}>;

/**
 * Sampler table. The key is the sampler name.
 * @example "Euler a"
 */
export const samplerTable = {
  "DPM++ 2M Karras": {},
  "Euler a": {},
  "Restart": {},
} as const satisfies Record<string, SamplerDefine>;

export type SamplerName = keyof typeof samplerTable;
