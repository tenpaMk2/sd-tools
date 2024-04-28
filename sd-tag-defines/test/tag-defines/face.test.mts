import { test } from "vitest";
import { FaceTag, allFaceTags } from "../../src/index.mts";
import { testComma, testDuplication } from "../libs/utility.mts";

test("face duplication test", () => {
  testDuplication<FaceTag>(allFaceTags, `allFaceTags`);
});

test("face comma test", () => {
  testComma<FaceTag>(allFaceTags, `allFaceTags`);
});
