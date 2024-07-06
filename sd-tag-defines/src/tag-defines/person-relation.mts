export const allPersonRelationTags = [
  `couple`,
  `girl sandwich`,
  `harem`,
  `hetero`,
  `husband and wife`,
  `husband and wives`,
  `siblings`,
  `solo focus`,
  `solo`,
  `yuri`,
] as const satisfies readonly string[];
export type PersonRelationTag = (typeof allPersonRelationTags)[number];
