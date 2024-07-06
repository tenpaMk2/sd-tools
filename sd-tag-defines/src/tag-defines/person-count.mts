export const allPersonCountTags = [
  `1boy`,
  `1girl`,
  `2boys`,
  `2girls`,
  `3boys`,
  `3girls`,
  `4boys`,
  `4girls`,
  `5boys`,
  `5girls`,
  `6+boys`,
  `6+girls`,
  `multiple boys`,
  `multiple girls`,
] as const satisfies readonly string[];
export type PersonCountTag = (typeof allPersonCountTags)[number];
