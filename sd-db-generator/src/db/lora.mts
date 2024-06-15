import { BaseModel } from "./checkpoint.mjs";

type LoraDefine = Readonly<{
  /**
   * Recommended weight.
   * This value is specied in the LoRA description or sample images.
   */
  recommendedWeight: number;
  /**
   * Supported base models.
   * If you try to this LoRA with unsupported model, the tool will throw error.
   */
  supportedBaseModels: BaseModel[];
  /**
   * URL for DL.
   */
  url: URL;
  /**
   * Character trigger words tags.
   * Define only the LoRA has uncommon trigger words.
   * For example, `mea kurosaki` is uncommon trigger words because it's not included in the common danbooru tag.
   */
  characterTriggerWordsTags: readonly string[];
  /**
   * Outfit trigger tags.
   * Some character LoRA has uncommon outfit trigger tags in order to distinguish outfit variations.
   * For example, `SentoUniform` and `SentoBikini` are uncommon outfit trigger tags.
   */
  outfitTriggerTags: readonly string[];
  /**
   * Creator name.
   */
  creator: string;
}>;

/**
 * LoRA table. The key is the LoRA name.
 * @example `nishikigi_chisato_v1`
 */
export const loraTable = {
  "minagi_koharu_PONY_epoch-000020": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/458236/pony-xl-minagi-koharu-slow-loop?modelVersionId=510028`,
    ),
    characterTriggerWordsTags: [`minagi koharu`],
    outfitTriggerTags: [
      `koharu-default`,
      `koharu-casual`,
      `koharu-schooluniform`,
    ],
    creator: `Ibukimakisiko`,
  },
  "minagi_hiyori_PONY_epoch-000020": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/456435/pony-xl-minagi-hiyori-slow-loop?modelVersionId=508106`,
    ),
    characterTriggerWordsTags: [`minagi hiyori`],
    outfitTriggerTags: [
      `hiyori-default`,
      `hiyori-maid`,
      `hiyori-schooluniform`,
    ],
    creator: `Ibukimakisiko`,
  },
  "yoshinaga koi_PONY_last": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/462141/pony-xl-yoshinaga-koi-slow-loop?modelVersionId=514275`,
    ),
    characterTriggerWordsTags: [`yoshinaga koi`],
    outfitTriggerTags: [`yoshinagakoi-casual`, `yoshinagakoi-schooluniform`],
    creator: `Ibukimakisiko`,
  },
} as const satisfies Record<string, LoraDefine>;

export type LoraName = keyof typeof loraTable;
export type LoraCharacterTriggerWordsTag =
  (typeof loraTable)[LoraName]["characterTriggerWordsTags"][number];
export type LoraOutfitTriggerWordsTag =
  (typeof loraTable)[LoraName]["outfitTriggerTags"][number];
