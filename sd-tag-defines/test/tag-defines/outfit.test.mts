import { test } from "vitest";
import { OutfitTag, allOutfitTags } from "../../src/index.mts";
import { testComma, testDuplication } from "../libs/utility.mjs";

test("outfit duplication test", () => {
  testDuplication<OutfitTag>(allOutfitTags, `allOutfitTags`);
});

test("outfit comma test", () => {
  testComma<OutfitTag>(allOutfitTags, `allOutfitTags`);
});
