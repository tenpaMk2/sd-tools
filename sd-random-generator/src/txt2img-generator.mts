import {
  BackgroundTag,
  BreastSizeOrder,
  BreastSizeTag,
  CharacterNameTag,
  EmotionTag,
  SeriesNameTag,
  SpecialTag,
  VisibilityKeys,
  allVisibilityKeys,
  tagVisibilities,
} from "@tenpamk2/sd-tag-defines";
import {
  BackgroundCollectedData,
  CharacterCollectedData,
  OptionCollectedData,
  OutfitCollectedData,
  PoseCollectedData,
} from "./collector.mjs";
import { OutfitDefine, UnderboobLevelOrder } from "./outfits/outfits.mjs";
import {
  PoseSpecialVisibility,
  PoseUnderboobLevelOrder,
} from "./poses/poses.mjs";
import { PatternCollection, Token } from "./prompt-define.mjs";
import { Txt2ImgSetting } from "./setting-define.mjs";
import {
  CharacterFeatureTag,
  OutfitTag,
  PoseTag,
  Tag,
} from "./tag-defines/adapter.mjs";
import {
  LoraCharacterTriggerWordsTag,
  LoraNameTag,
  LoraOutfitTriggerWordsTag,
} from "./tag-defines/lora.mjs";

// TODO: bug: `Rem` LoraとTriggerWordsの `Rem` が重複してると削除される。
const setHeavyWeightOne = <T extends Tag | LoraNameTag>(
  m: Map<T, Token<T>>,
  token: Token<T>,
) => {
  if (!m.has(token.tag)) {
    m.set(token.tag, token);
    return;
  }

  if (m.get(token.tag)!.weight < token.weight) {
    // If the tag is already in the map, replace it with the one with higher weight.
    m.set(token.tag, token);
  }
};

const extractVisible = <T extends CharacterFeatureTag | OutfitTag>(
  tokens: Token<T>[],
  parts: VisibilityKeys[],
) => {
  const m = new Map<T, Token<T>>();
  for (const token of tokens) {
    for (const part of parts) {
      if (!tagVisibilities[token.tag][part]) continue;
      setHeavyWeightOne(m, token);
    }
  }

  return [...m.values()];
};

const createSpecialTokens = (
  outfit: OutfitDefine["specialVisibility"],
  pose: PoseSpecialVisibility,
  {
    breastSize,
    upskirtTokens,
    emotionTokens,
    backgroundTokens,
    visibleFeatureTokens,
    visibleOutfitTokens,
  }: {
    breastSize: BreastSizeTag;
    upskirtTokens: Token<OutfitTag>[];
    emotionTokens: Token<EmotionTag | SpecialTag>[];
    backgroundTokens: Token<BackgroundTag>[];
    visibleFeatureTokens: Token<CharacterFeatureTag>[];
    visibleOutfitTokens: Token<OutfitTag>[];
  },
): Token<SpecialTag | OutfitTag>[] => {
  const m = new Map<SpecialTag | OutfitTag, Token<SpecialTag | OutfitTag>>();
  const push = (tag: SpecialTag) => m.set(tag, new Token<SpecialTag>({ tag }));

  if (outfit.armpits && pose.armpits) {
    push(`armpits`);
  }
  if (
    outfit.hangingBreasts &&
    pose.hangingBreasts &&
    BreastSizeOrder["medium breasts"] <= BreastSizeOrder[breastSize]
  ) {
    push(`hanging breasts`);
  }
  if (
    outfit.cleavage &&
    pose.cleavage &&
    BreastSizeOrder["medium breasts"] <= BreastSizeOrder[breastSize]
  ) {
    push(`cleavage`);
  }
  if (
    outfit.sideboob &&
    pose.sideboob &&
    BreastSizeOrder["small breasts"] <= BreastSizeOrder[breastSize]
  ) {
    push(`sideboob`);
  }
  if (
    outfit.backboob &&
    pose.backboob &&
    BreastSizeOrder["small breasts"] <= BreastSizeOrder[breastSize]
  ) {
    push(`backboob`);
  }
  if (
    PoseUnderboobLevelOrder[pose.underboobLevel] <
    UnderboobLevelOrder[outfit.underboobLevel]
  ) {
    push(`underboob`);
  }
  if (outfit.zettaiRyouiki && pose.zettaiRyouiki) {
    push(`zettai ryouiki`);
  }
  if (outfit.insideOfThighs && pose.insideOfThighs) {
    push(`ass visible through thighs`);
    push(`thigh gap`);
  }

  if (pose.upskirt && 0 < upskirtTokens.length) {
    push(`upskirt`);

    for (const token of upskirtTokens) {
      m.set(token.tag, token);
    }

    if (
      upskirtTokens.some(
        ({ tag }) => tag === `panties` || tag === `panties under pantyhose`,
      )
    ) {
      push(`pantyshot`);
    }
  }

  return [...m.values()];
};

const takeOffShoes = (
  tokens: Token<OutfitTag>[],
  whenRemoveShoes: OutfitDefine["whenRemoveShoes"],
) => {
  if (!whenRemoveShoes) {
    console.warn("`whenRemoveShoes` is `null` .");
    return tokens;
  }

  const m = new Map<OutfitTag, Token<OutfitTag>>(tokens.map((t) => [t.tag, t]));

  // Do nothing if shoes are not visible.
  if (!whenRemoveShoes.excludeTags.every((tag) => m.has(tag))) return tokens;

  // Remove shoes if shoes are visible.

  for (const excludeTag of whenRemoveShoes.excludeTags) {
    m.delete(excludeTag);
  }

  const additionalTokens = PatternCollection.create<OutfitTag>(
    whenRemoveShoes.additionalFootEntriesAfterRemoving,
  ).pickOnePattern().tokens;

  for (const addtionalToken of additionalTokens) {
    m.set(addtionalToken.tag, addtionalToken);
  }

  return [...m.values()];
};

const buildCore = ({
  characterData,
  outfitData,
  backgroundData,
  poseData,
}: {
  characterData: CharacterCollectedData;
  outfitData: OutfitCollectedData;
  backgroundData: BackgroundCollectedData;
  poseData: PoseCollectedData;
}): Token<Tag | LoraNameTag>[] => {
  const loraCharacterTokens = PatternCollection.createLoraTokensInstantly(
    characterData.character.lora,
  );

  const loraCharacterTriggerWordTokens =
    PatternCollection.createTokensInstantly<LoraCharacterTriggerWordsTag>(
      characterData.character.loraCharacterTriggerWordEntries,
    );

  const seriesNameTokens =
    PatternCollection.createTokensInstantly<SeriesNameTag>(
      characterData.character.seriesNameEntries,
    );

  const characterNameTokens =
    PatternCollection.createTokensInstantly<CharacterNameTag>(
      characterData.character.characterNameEntries,
    );

  const characterFeatureTokens =
    PatternCollection.createTokensInstantly<CharacterFeatureTag>(
      characterData.character.characterFeatureEntries,
    );

  const breastSizeTokens =
    PatternCollection.createTokensInstantly<BreastSizeTag>([
      characterData.character.breastSize,
    ]);

  const emotionTokens = PatternCollection.createTokensInstantly<EmotionTag>(
    characterData.character.emotionEntries,
  );

  const loraOutfitTokens = PatternCollection.createLoraTokensInstantly(
    outfitData.outfit.lora ?? null,
  );

  const loraOutfitTriggerWordTokens =
    PatternCollection.createTokensInstantly<LoraOutfitTriggerWordsTag>(
      outfitData.outfit.loraOutfitTriggerWordEntries,
    );

  const outfitAndExposureTokens =
    PatternCollection.createTokensInstantly<OutfitTag>(
      outfitData.outfit.outfitEntries,
    );

  const upskirtTokens = PatternCollection.createTokensInstantly<OutfitTag>(
    outfitData.outfit.upskirtEntries,
  );

  const cameraAngle = poseData.pose.cameraAngle;
  const backgroundTokens =
    PatternCollection.createTokensInstantly<BackgroundTag>(
      backgroundData.background[cameraAngle]!.entries,
    );

  const poseTokens = PatternCollection.createTokensInstantly<PoseTag>(
    poseData.pose.entries,
  );

  const newEmotionTokens = emotionTokens.some(
    ({ tag }) => tag === `open mouth` && characterData.character.fang,
  )
    ? [...emotionTokens, new Token<SpecialTag>({ tag: `fang` })]
    : emotionTokens;

  // TODO: bug ある場合はぬぐ
  const shoesRemovedOutfitTokens = outfitData.outfit.whenRemoveShoes
    ? takeOffShoes(outfitAndExposureTokens, outfitData.outfit.whenRemoveShoes)
    : outfitAndExposureTokens;

  const poseVisibility = allVisibilityKeys.filter(
    (key) => poseData.pose.visibility[key],
  );

  const visibleFeatureTokens = extractVisible<CharacterFeatureTag>(
    characterFeatureTokens,
    poseVisibility,
  );

  const visibleOutfitTokens = extractVisible<OutfitTag>(
    backgroundData.background.removeShoes
      ? shoesRemovedOutfitTokens
      : outfitAndExposureTokens,
    poseVisibility,
  );

  const specialTokens = createSpecialTokens(
    outfitData.outfit.specialVisibility,
    poseData.pose.specialVisibility,
    {
      breastSize: characterData.character.breastSize,
      upskirtTokens,
      emotionTokens: newEmotionTokens,
      backgroundTokens,
      visibleFeatureTokens,
      visibleOutfitTokens,
    },
  );

  const m = new Map<Tag | LoraNameTag, Token<Tag | LoraNameTag>>();
  for (const token of [
    loraCharacterTokens,
    loraCharacterTriggerWordTokens,
    seriesNameTokens,
    characterNameTokens,
    visibleFeatureTokens,
    breastSizeTokens,
    loraOutfitTokens,
    loraOutfitTriggerWordTokens,
    visibleOutfitTokens,
    specialTokens,
    poseTokens,
    backgroundTokens,
    newEmotionTokens,
  ].flat()) {
    setHeavyWeightOne<Tag | LoraNameTag>(m, token);
  }

  return [...m.values()];
};

export type Txt2ImgBodyJson = Txt2ImgSetting["txt2imgBodyJson"] & {
  _key: {
    character: string;
    outfit: string;
    background: string;
    pose: string;
  };
  prompt: string;
};

export class Txt2imgGenerator {
  constructor(readonly option: OptionCollectedData) {}

  private randomPick<T extends { probability: number }>(candidates: T[]): T {
    const total = candidates.reduce(
      (prev, current) => prev + current.probability,
      0,
    );
    const random = Math.random() * total;

    let sum = 0;
    for (const candidate of candidates) {
      sum += candidate.probability;
      if (random < sum) {
        return candidate;
      }
    }

    throw new Error(`Unexpected error: No candidate was picked.`);
  }

  generate(): Txt2ImgBodyJson {
    const txt2imgData = this.randomPick(this.option.txt2imgs);
    const characterData = this.randomPick(txt2imgData.characters);
    const outfitData = this.randomPick(characterData.outfits);
    const backgroundData = this.randomPick(outfitData.backgrounds);
    const poseData = this.randomPick(backgroundData.poses);

    const _key = {
      character: characterData.key,
      outfit: outfitData.key,
      background: backgroundData.key,
      pose: poseData.key,
    };

    const tokens = buildCore({
      characterData,
      outfitData,
      backgroundData,
      poseData,
    });

    const prompt = `${txt2imgData.fixedPrompt}${tokens.join(`, `)}`;

    return { _key, prompt, ...txt2imgData.txt2imgBodyJson };
  }
}
