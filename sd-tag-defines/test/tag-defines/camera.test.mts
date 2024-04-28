import { test } from "vitest";
import { CameraTag, allCameraTags } from "../../src/tag-defines/camera.mjs";
import { testComma, testDuplication } from "../libs/utility.mts";

test("camera duplication test", () => {
  testDuplication<CameraTag>(allCameraTags, `allCameraTags`);
});

test("camera comma test", () => {
  testComma<CameraTag>(allCameraTags, `allCameraTags`);
});

// test("camera duplication test", () => {
//   for (const cameraTag of allCameraTags) {
//     expect(
//       allPoseTags.includes(cameraTag as PoseTag),
//       `"${cameraTag}" was unexpectedly found in \`allPoseTags\` .`,
//     ).toBe(false);

//     expect(
//       allHoldingPoses.includes(cameraTag as HoldingPoseTag),
//       `"${cameraTag}" was unexpectedly found in \`allHoldingPoses\` .`,
//     ).toBe(false);

//     expect(
//       allHoldingItems.includes(cameraTag as HoldingItemTag),
//       `"${cameraTag}" was unexpectedly found in \`allHoldingItems\` .`,
//     ).toBe(false);
//   }
// });
