export const allPoseTags = [
  `all fours`,
  `arm up`,
  `arms behind back`,
  `arms behind head`,
  `arms up`,
  `backlighting`, // Hard classification
  `cheering`,
  `clothes lift`,
  `contrapposto`,
  `double v`,
  `grabbing own breast`,
  `grabbing`,
  `hand up`,
  `hands on lap`,
  `hands on own cheek`,
  `hands on own chest`,
  `hands on own face`,
  `hands on own hips`,
  `hands on own knees`,
  `hands on own thighs`,
  `hands up`,
  `head rest`,
  `heart hands`,
  `incoming hug`,
  `index finger raised`,
  `kneeling`,
  `leaning forward`,
  `leg up`,
  `legs up`,
  `looking ahead`,
  `looking at viewer`,
  `looking away`,
  `looking back`,
  `looking down`,
  `looking up`,
  `lying`,
  `on back`,
  `on bed`,
  `on side`,
  `on stomach`,
  `paw pose`,
  `playing sports`,
  `presenting armpit`,
  `profile`, // Hard classification
  `reaching towards viewer`,
  `shushing`,
  `singing`,
  `sitting`,
  `spread legs`,
  `squatting`,
  `standing`,
  `the pose`,
  `twisted torso`,
  `undressing`,
  `upturned eyes`,
  `v arms`,
  `v`,
  `wariza`,
] as const satisfies readonly string[];
export type PoseTag = (typeof allPoseTags)[number];
