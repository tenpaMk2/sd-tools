import { test } from "vitest";
import { PoseTag, allPoseTags } from "../../src/tag-defines/pose.mjs";
import { testComma, testDuplication } from "../libs/utility.mts";

test("pose duplication test", () => {
  testDuplication<PoseTag>(allPoseTags, `allPoseTags`);
});

test("pose comma test", () => {
  testComma<PoseTag>(allPoseTags, `allPoseTags`);
});

// test("pose duplication test", () => {
//   for (const poseTag of allPoseTags) {
//     expect(
//       allCameraTags.includes(poseTag as CameraTag),
//       `"${poseTag}" was unexpectedly found in \`allCameraTags\` .`,
//     ).toBe(false);

//     expect(
//       allHoldingPoses.includes(poseTag as HoldingPoseTag),
//       `"${poseTag}" was unexpectedly found in \`allHoldingPoses\` .`,
//     ).toBe(false);

//     expect(
//       allHoldingItems.includes(poseTag as HoldingItemTag),
//       `"${poseTag}" was unexpectedly found in \`allHoldingItems\` .`,
//     ).toBe(false);
//   }
// });
