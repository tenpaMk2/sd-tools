import { test } from "vitest";
import { BodyTag, allBodyTags } from "../../src/tag-defines/body.mjs";
import { testComma, testDuplication } from "../libs/utility.mts";

test("body duplication test", () => {
  testDuplication<BodyTag>(allBodyTags, `allBodyTags`);
});

test("body comma test", () => {
  testComma<BodyTag>(allBodyTags, `allBodyTags`);
});
