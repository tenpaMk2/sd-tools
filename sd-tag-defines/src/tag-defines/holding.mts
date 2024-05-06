export const allHoldingPoseTags = [
  `holding ball`,
  `holding bouquet`,
  `holding microphone`,
  `holding pom poms`,
] as const satisfies readonly string[];
export type HoldingPoseTag = (typeof allHoldingPoseTags)[number];

export const allHoldingItemTags = [
  `bouquet`,
  `microphone`,
  `pom pom \\(cheerleading\\)`,
  `volleyball \\(object\\)`,
] as const satisfies readonly string[];
export type HoldingItemTag = (typeof allHoldingItemTags)[number];
