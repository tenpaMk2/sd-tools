export const allBreastSizeTags = [
  `flat chest`,
  `small breasts`,
  `medium breasts`,
  `large breasts`,
  `huge breasts`,
] as const satisfies readonly string[];
export type BreastSizeTag = (typeof allBreastSizeTags)[number];

export const BreastSizeOrder = {
  "flat chest": 1,
  "small breasts": 2,
  "medium breasts": 3,
  "large breasts": 4,
  "huge breasts": 5,
} as const satisfies Record<BreastSizeTag, number>;
