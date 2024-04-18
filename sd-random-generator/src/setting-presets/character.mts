import { characterTable } from "../characters/resolver.mjs";
import { getKeys } from "../libs/utility.mjs";
import { CharacterSetting } from "../setting-define.mjs";
import { outfitsPreset } from "./outfit.mjs";

// TODO: Define character specific outfits.

export const charactersPreset = {
  all: getKeys(characterTable).map((key) => ({
    key,
    outfits: [...outfitsPreset.cosplay],
  })),
} as const satisfies {
  [k in string]: CharacterSetting[];
};
