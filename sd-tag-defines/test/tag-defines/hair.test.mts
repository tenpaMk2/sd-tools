import { test } from "vitest";
import { HairTag, allHairTags } from "../../src/tag-defines/hair.mjs";
import { testComma, testDuplication } from "../libs/utility.mts";

test("hair duplication test", () => {
  testDuplication<HairTag>(allHairTags, `allHairTags`);
});

test("hair comma test", () => {
  testComma<HairTag>(allHairTags, `allHairTags`);
});
