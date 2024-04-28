import { test } from "vitest";
import {
  BackgroundTag,
  allBackgroundTags,
} from "../../src/tag-defines/background.mjs";
import { testComma, testDuplication } from "../libs/utility.mts";

test("background duplication test", () => {
  testDuplication<BackgroundTag>(allBackgroundTags, `allBackgroundTags`);
});

test("background comma test", () => {
  testComma<BackgroundTag>(allBackgroundTags, `allBackgroundTags`);
});
