import { test } from "vitest";
import {
  BodyOutfitTag,
  allBodyOutfitTags,
} from "../../src/tag-defines/body-outfit.mjs";
import { testComma, testDuplication } from "../libs/utility.mjs";

test("outfit duplication test", () => {
  testDuplication<BodyOutfitTag>(allBodyOutfitTags, `allBodyOutfitTags`);
});

test("outfit comma test", () => {
  testComma<BodyOutfitTag>(allBodyOutfitTags, `allBodyOutfitTags`);
});
