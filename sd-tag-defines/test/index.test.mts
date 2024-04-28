import { expect, test } from "vitest";
import {
  allBodyOutfitTags,
  allBodyTags,
  allBreastSizeTags,
  allCameraTags,
  allCharacterNameTags,
  allEmotionTags,
  allFaceTags,
  allGlassesTags,
  allHairTags,
  allHeadOutfitTags,
  allHoldingItemTags,
  allHoldingPoseTags,
  allPoseTags,
  allSeriesNameTags,
  allSpecialTags,
} from "../src/index.mts";
import { isSetsEqual } from "./libs/utility.mts";

const tagsList = {
  allBodyOutfitTags,
  allBodyTags,
  allBreastSizeTags,
  allCameraTags,
  allCharacterNameTags,
  allEmotionTags,
  allFaceTags,
  allGlassesTags,
  allHairTags,
  allHeadOutfitTags,
  allHoldingItemTags,
  allHoldingPoseTags,
  allPoseTags,
  allSeriesNameTags,
  allSpecialTags,
} as const;

test("exclusive test", () => {
  const entries = Object.entries(tagsList);
  for (const [tagsName, tags] of entries) {
    const otherEntries = entries.filter(
      ([otherTagsName]) => otherTagsName !== tagsName,
    );
    for (const [otherTagsName, otherTags] of otherEntries) {
      // Allow duplication between `allBodyTags` and `allBodyOutfitTags`.
      if (
        isSetsEqual(
          new Set([tagsName, otherTagsName]),
          new Set([`allBodyTags`, `allBodyOutfitTags`]),
        ) ||
        isSetsEqual(
          new Set([tagsName, otherTagsName]),
          new Set([`allBodyTags`, `allHeadOutfitTags`]),
        )
      ) {
        continue;
      }

      for (const tag of tags) {
        expect(
          otherTags.includes(tag as never),
          `"${tag}" was unexpectedly found in \`${otherTagsName}\` .`,
        ).toBe(false);
      }
    }
  }
});
