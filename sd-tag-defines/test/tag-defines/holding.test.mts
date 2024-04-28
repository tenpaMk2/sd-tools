import { test } from "vitest";
import {
  HoldingItemTag,
  HoldingPoseTag,
  allHoldingItemTags,
  allHoldingPoseTags,
} from "../../src/tag-defines/holding.mjs";
import { testComma, testDuplication } from "../libs/utility.mjs";

test("holding duplication test", () => {
  testDuplication<HoldingItemTag>(allHoldingItemTags, `allHoldingItemTags`);
  testDuplication<HoldingPoseTag>(allHoldingPoseTags, `allHoldingPoseTags`);
});

test("holding comma test", () => {
  testComma<HoldingItemTag>(allHoldingItemTags, `allHoldingItemTags`);
  testComma<HoldingPoseTag>(allHoldingPoseTags, `allHoldingPoseTags`);
});

// test("holding pose duplication test", () => {
//   for (const poseTag of allHoldingPoses) {
//     expect(
//       allCameraTags.includes(poseTag as CameraTag),
//       `"${poseTag}" was unexpectedly found in \`allCameraTags\` .`,
//     ).toBe(false);

//     expect(
//       allPoseTags.includes(poseTag as PoseTag),
//       `"${poseTag}" was unexpectedly found in \`allPoseTags\` .`,
//     ).toBe(false);
//   }
// });

// test("holding item duplication test", () => {
//   for (const itemTag of allHoldingItems) {
//     expect(
//       allCameraTags.includes(itemTag as CameraTag),
//       `"${itemTag}" was unexpectedly found in \`allCameraTags\` .`,
//     ).toBe(false);

//     expect(
//       allPoseTags.includes(itemTag as PoseTag),
//       `"${itemTag}" was unexpectedly found in \`allPoseTags\` .`,
//     ).toBe(false);
//   }
// });
