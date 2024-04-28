import { test } from "vitest";
import { SpecialTag, allSpecialTags } from "../../src/tag-defines/special.mjs";
import { testComma, testDuplication } from "../libs/utility.mjs";

test("special duplication test", () => {
  testDuplication<SpecialTag>(allSpecialTags, `allSpecialTags`);
});

test("special comma test", () => {
  testComma<SpecialTag>(allSpecialTags, `allSpecialTags`);
});
