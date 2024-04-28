import { expect, test } from "vitest";
import {
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
  allOutfitTags,
  allPoseTags,
  allSeriesNameTags,
  allSpecialTags,
} from "../src/index.mts";
import { isSetsEqual } from "./libs/utility.mts";

const tagsList = {
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
  allOutfitTags,
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
      // Allow duplication between `allOutfitTags` and `allHeadOutfitTags`.
      if (
        isSetsEqual(
          new Set([tagsName, otherTagsName]),
          new Set([`allOutfitTags`, `allHeadOutfitTags`]),
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
