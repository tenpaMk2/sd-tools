import { test } from "vitest";
import {
  SeriesNameTag,
  allSeriesNameTags,
} from "../../src/tag-defines/series-name.mjs";
import { testComma, testDuplication } from "../libs/utility.mjs";

test("series-name duplication test", () => {
  testDuplication<SeriesNameTag>(allSeriesNameTags, `allSeriesName`);
});

test("series-name comma test", () => {
  testComma<SeriesNameTag>(allSeriesNameTags, `allSeriesName`);
});
