import { test } from "vitest";
import { GlassesTag, allGlassesTags } from "../../src/index.mts";
import { testComma, testDuplication } from "../libs/utility.mts";

test("glasses duplication test", () => {
  testDuplication<GlassesTag>(allGlassesTags, `allGlassesTags`);
});

test("glasses comma test", () => {
  testComma<GlassesTag>(allGlassesTags, `allGlassesTags`);
});
