import { test } from "vitest";
import { EmotionTag, allEmotionTags } from "../../src/tag-defines/emotion.mjs";
import { testComma, testDuplication } from "../libs/utility.mts";

test("emotion duplication test", () => {
  testDuplication<EmotionTag>(allEmotionTags, `allEmotionTags`);
});

test("emotion comma test", () => {
  testComma<EmotionTag>(allEmotionTags, `allEmotionTags`);
});
