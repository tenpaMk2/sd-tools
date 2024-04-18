import { expect, test } from "vitest";
import {
  BodyFeatureTag,
  ExposureTag,
  HeadOutfitTags,
  OutfitTag,
  PoseTag,
  allBodyFeatureTags,
  allDistinguishableBodyFeatureTags,
  allDistinguishableExposureTags,
  allDistinguishableHeadOutfitTags,
  allDistinguishableOutfitTags,
  allExposureTags,
  allHeadOutfitTags,
  allOutfitTags,
  allPoseTags,
  allSpecialTags,
} from "../src/index.mjs";

test("allDistinguishableBodyFeatureTags", () => {
  const values = Object.values(allDistinguishableBodyFeatureTags);
  const valueSet = new Set(values);
  for (const value of valueSet) {
    expect(
      allBodyFeatureTags.includes(value as BodyFeatureTag),
      `"${value}" was unexpectedly found in allBodyFeatureTags`,
    ).toBe(false);
  }
});

test("allDistinguishableHeadOutfitTags", () => {
  const values = Object.values(allDistinguishableHeadOutfitTags);
  const valueSet = new Set(values);
  for (const value of valueSet) {
    expect(
      allHeadOutfitTags.includes(value as HeadOutfitTags),
      `"${value}" was unexpectedly found in allHeadOutfitTags`,
    ).toBe(false);
  }
});

test("allDistinguishableExposureTags", () => {
  const values = Object.values(allDistinguishableExposureTags);
  const valueSet = new Set(values);
  for (const value of valueSet) {
    expect(
      allExposureTags.includes(value as ExposureTag),
      `"${value}" was unexpectedly found in allExposureTags`,
    ).toBe(false);
  }
});

test("allDistinguishableOutfitTags", () => {
  const values = Object.values(allDistinguishableOutfitTags);
  const valueSet = new Set(values);
  for (const value of valueSet) {
    expect(
      allOutfitTags.includes(value as OutfitTag),
      `"${value}" was unexpectedly found in allOutfitTags`,
    ).toBe(false);
  }
});

test("allSpecialTags", () => {
  for (const value of allSpecialTags) {
    expect(
      allOutfitTags.includes(value as OutfitTag),
      `"${value}" was unexpectedly found in allOutfitTags`,
    ).toBe(false);
    expect(
      allExposureTags.includes(value as ExposureTag),
      `"${value}" was unexpectedly found in allExposureTags`,
    ).toBe(false);
    expect(
      allPoseTags.includes(value as PoseTag),
      `"${value}" was unexpectedly found in allPoseTags`,
    ).toBe(false);
  }
});
