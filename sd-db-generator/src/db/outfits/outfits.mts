import { LoraEntry, TagEntry } from "../../entry.mjs";
import { OutfitTag } from "../../index.mjs";
import { LoraOutfitTriggerWordsTag } from "../lora.mjs";
import { bikini } from "./common/bikini.mjs";
import { slowLoopSchoolUniform } from "./slow-loop/school-uniform.mjs";

/**
 * Outfit define.
 */
export type OutfitDefine = Readonly<{
  /**
   * Lora define.
   */
  lora: LoraEntry | null;
  /**
   * Lora outfit trigger words define.
   */
  loraOutfitTriggerWordEntries: TagEntry<LoraOutfitTriggerWordsTag>[];
  /**
   * Outfit and exposure defines such as `red shirt` , `collarbone` and `thigh gap` .
   */
  outfitEntries: TagEntry<OutfitTag>[];
  /**
   * Visibility of specific tags.
   */
  specialVisibility: {
    /**
     * Visible when arms up.
     */
    armpits: boolean;
    /**
     * Visible when all fours and the character has large breasts.
     */
    hangingBreasts: boolean;
    /**
     * Visible when the front chest is covered and the character has large breasts.
     */
    tautClothes: boolean;
    /**
     * Visible when the front chest is exposed and the character has large breasts.
     */
    cleavage: boolean;
    /**
     * Visible when the side chest is exposed and the character has large breasts.
     */
    sideboob: boolean;
    /**
     * Visible when the backboob is exposed and the character has large breasts.
     */
    backboob: boolean;
    /**
     * Visibility level of underboob.
     * `full` is always visible.
     * `only from below` is visible only from below.
     */
    underboobLevel: `invisible` | `only from below` | `full`;
    /**
     * Visible when from front.
     */
    zettaiRyouiki: boolean;
    /**
     * Visible when from front.
     * This affects `thigh gap` and `ass visible through thighs`.
     */
    insideOfThighs: boolean;
  };
  /**
   * Lift type for clothes lift.
   */
  liftType: `none` | `skirt` | `dress`;
  /**
   * Outfit and exposure defines in the skirt for when `upskirt` is specified.
   */
  upskirtEntries: TagEntry<OutfitTag>[]; // TODO: Reconsider as `null` .
  /**
   * Outfit and exposure defines at foot for when footwear should be removed.
   */
  whenRemoveShoes: {
    /**
     * Exclude tags that is in the `outfitAndExposureTree` .
     */
    excludeTags: readonly OutfitTag[];
    /**
     * Tokens for when footwear is removed.
     * @example `[new Token(\`no shoes\`)]` , `[new Token(\`barefoor\`)]`
     */
    additionalFootEntriesAfterRemoving: TagEntry<OutfitTag>[];
  } | null;
}>;

export const commonOutfitTable = {
  bikini: bikini(),
} as const satisfies Record<string, OutfitDefine>;

/**
 * Character outfit table.
 * @example "series-name-outfit-name-character-name-lora-creator" : seriesNameOutfitNameCharacterNameLoraCreator()
 */
export const characterOutfitTable = {
  "slow-loop-school-uniform-hiyori-ibukimakisiko":
    slowLoopSchoolUniform(`hiyori-ibukimakisiko`),
  "slow-loop-school-uniform-koharu-ibukimakisiko":
    slowLoopSchoolUniform(`koharu-ibukimakisiko`),
  "slow-loop-school-uniform-koi-ibukimakisiko":
    slowLoopSchoolUniform(`koi-ibukimakisiko`),
} as const satisfies Record<string, OutfitDefine>;

export const outfitTable = {
  ...commonOutfitTable,
  ...characterOutfitTable,
} as const satisfies Record<string, OutfitDefine>;

export type OutfitTable = typeof outfitTable;
export type OutfitKey = keyof OutfitTable;

export const UnderboobLevelOrder = {
  "invisible": 0,
  "only from below": 1,
  "full": 2,
} as const satisfies Record<
  OutfitDefine["specialVisibility"]["underboobLevel"],
  number
>;
