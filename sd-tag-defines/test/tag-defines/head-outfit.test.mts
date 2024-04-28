import { test } from "vitest";
import { HeadOutfitTag, allHeadOutfitTags } from "../../src/index.mts";
import { testComma, testDuplication } from "../libs/utility.mts";

test("head-outfit duplication test", () => {
  testDuplication<HeadOutfitTag>(allHeadOutfitTags, `allHeadOutfitTags`);
});

test("head-outfit comma test", () => {
  testComma<HeadOutfitTag>(allHeadOutfitTags, `allHeadOutfitTags`);
});
