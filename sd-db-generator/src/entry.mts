import type { LoraName, Tag } from "./index.mjs";

export type LoraEntry = {
  loraName: LoraName;
  probabilityAndWeights: { probability: number; weight: number }[];
};

export type TagEntry<T extends Tag> =
  | T
  | { tag: T; weight: number }
  | { probability?: number; entries: TagEntry<T>[] }[];
