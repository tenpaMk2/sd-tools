export const allHoldingPoseTags = [
  `holding ball`,
  `holding bouquet`,
  `holding microphone`,
  `holding racket`,
  `holding tennis racket`,
  `holding pom poms`,
] as const satisfies readonly string[];
export type HoldingPoseTag = (typeof allHoldingPoseTags)[number];

export const allHoldingItemTags = [
  `bouquet`,
  `microphone`,
  `pom pom \\(cheerleading\\)`,
  `tennis ball`,
  `tennis racket`,
  `volleyball \\(object\\)`,
] as const satisfies readonly string[];
export type HoldingItemTag = (typeof allHoldingItemTags)[number];
