export const allHoldingPoseTags = [
  `holding ball`,
  `holding book`,
  `holding bouquet`,
  `holding cup`,
  `holding microphone`,
  `holding pom poms`,
  `holding racket`,
  `holding tennis racket`,
] as const satisfies readonly string[];
export type HoldingPoseTag = (typeof allHoldingPoseTags)[number];

export const allHoldingItemTags = [
  `beer mug`,
  `book`,
  `bouquet`,
  `cup`,
  `microphone`,
  `pom pom \\(cheerleading\\)`,
  `tennis ball`,
  `tennis racket`,
  `volleyball \\(object\\)`,
] as const satisfies readonly string[];
export type HoldingItemTag = (typeof allHoldingItemTags)[number];
