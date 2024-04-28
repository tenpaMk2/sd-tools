import { test } from "vitest";
import { CharacterNameTag, allCharacterNameTags } from "../../src/index.mts";
import { testComma, testDuplication } from "../libs/utility.mts";

test("character-name duplication test", () => {
  testDuplication<CharacterNameTag>(allCharacterNameTags, `allCharacterName`);
});

test("character-name comma test", () => {
  testComma<CharacterNameTag>(allCharacterNameTags, `allCharacterName`);
});
