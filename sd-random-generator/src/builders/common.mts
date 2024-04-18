import { OutfitDefine, UnderboobLevelOrder } from "../outfits/resolver.mjs";
import {
  PoseSpecialVisibility,
  PoseUnderboobLevelOrder,
} from "../poses/resolver.mjs";
import { CollectedDatas } from "../collector.mjs";
import { Pattern, PatternCollection } from "../prompt-define.mjs";
import {
  BackgroundTag,
  BreastSizeOrder,
  BreastSizeTag,
  CharacterFeatureTag,
  CharacterNameTag,
  EmotionTag,
  OutfitAndExposureTag,
  PoseTag,
  SeriesNameTag,
  SpecialTag,
  allVisibilityKeys,
  VisibilityKeys,
  tagVisibilities,
} from "@tenpamk2/sd-tag-defines";
import {
  LoraCharacterTriggerWordsTag,
  LoraNameTag,
  LoraOutfitTriggerWordsTag,
} from "../tag-defines/lora.mjs";
import { Tag } from "../tag-defines/adapter.mjs";

const separateByVisibility = <
  T extends CharacterFeatureTag | OutfitAndExposureTag,
>(
  pattern: Pattern<T>,
) => {
  const filter = (tag: T, part: VisibilityKeys) => tagVisibilities[tag][part];

  const result = allVisibilityKeys.reduce(
    (prev, part) => ({
      ...prev,
      [part]: pattern.filter(({ tag }) => filter(tag, part)),
    }),
    {},
  ) as {
    [k in VisibilityKeys]: Pattern<T>;
  };
  return result;
};

const extractVisible = <T extends CharacterFeatureTag | OutfitAndExposureTag>(
  patternCollection: PatternCollection<T>,
  parts: VisibilityKeys[],
) => {
  const newPatterns = patternCollection.patterns.map((pattern) => {
    const v = separateByVisibility<T>(pattern);
    const specifiedPatterns = parts.map((part) => v[part]);
    const concattedPattern = specifiedPatterns.reduce(
      (previous, current) => previous.concat(current.tokens),
      new Pattern<T>({
        tokens: [],
        probability: pattern.probability,
      }),
    );

    return concattedPattern;
  });

  return new PatternCollection<T>(newPatterns);
};

const buildSpecialVisibility = (
  outfit: OutfitDefine["specialVisibility"],
  pose: PoseSpecialVisibility,
  {
    breastSize,
    upskirtPatternCollection,
    emotionPatternCollection,
    backgroundPatternCollection,
    visibleFeaturePatternCollection,
    visibleOutfitPatternCollection,
  }: {
    breastSize: BreastSizeTag;
    upskirtPatternCollection: PatternCollection<OutfitAndExposureTag>;
    emotionPatternCollection: PatternCollection<EmotionTag | SpecialTag>;
    backgroundPatternCollection: PatternCollection<BackgroundTag>;
    visibleFeaturePatternCollection: PatternCollection<CharacterFeatureTag>;
    visibleOutfitPatternCollection: PatternCollection<OutfitAndExposureTag>;
  },
) => {
  const pcs = [] as PatternCollection<Tag>[];
  const pushSpecial = (tag: SpecialTag) =>
    pcs.push(PatternCollection.create<SpecialTag>([tag]));

  if (outfit.armpits && pose.armpits) {
    pushSpecial(`armpits`);
  }
  if (
    outfit.hangingBreasts &&
    pose.hangingBreasts &&
    BreastSizeOrder["medium breasts"] <= BreastSizeOrder[breastSize]
  ) {
    pushSpecial(`hanging breasts`);
  }
  if (
    outfit.cleavage &&
    pose.cleavage &&
    BreastSizeOrder["medium breasts"] <= BreastSizeOrder[breastSize]
  ) {
    pushSpecial(`cleavage`);
  }
  if (
    outfit.sideboob &&
    pose.sideboob &&
    BreastSizeOrder["small breasts"] <= BreastSizeOrder[breastSize]
  ) {
    pushSpecial(`sideboob`);
  }
  if (
    outfit.backboob &&
    pose.backboob &&
    BreastSizeOrder["small breasts"] <= BreastSizeOrder[breastSize]
  ) {
    pushSpecial(`backboob`);
  }
  if (
    PoseUnderboobLevelOrder[pose.underboobLevel] <
    UnderboobLevelOrder[outfit.underboobLevel]
  ) {
    pushSpecial(`underboob`);
  }
  if (outfit.zettaiRyouiki && pose.zettaiRyouiki) {
    pushSpecial(`zettai ryouiki`);
  }
  if (outfit.insideOfThighs && pose.insideOfThighs) {
    pushSpecial(`ass visible through thighs`);
    pushSpecial(`thigh gap`);
  }

  if (pose.upskirt && !upskirtPatternCollection.isEmpty()) {
    pushSpecial(`upskirt`);

    const pantyshotAdded = upskirtPatternCollection.combineIf<SpecialTag>(
      (p) =>
        p.tokens.some(
          ({ tag }) => tag === `panties` || tag === `panties under pantyhose`,
        ),
      PatternCollection.create<SpecialTag>([`pantyshot`]),
    );
    pcs.push(pantyshotAdded);
  }

  return PatternCollection.combine(pcs);
};

const takeOffShoes = (
  pc: PatternCollection<OutfitAndExposureTag>,
  whenRemoveShoes: OutfitDefine["whenRemoveShoes"],
) => {
  if (!whenRemoveShoes) {
    console.warn("`whenRemoveShoes` is `null` .");
    return pc;
  }

  const outfitsWhenRemoveShoes = PatternCollection.create(
    whenRemoveShoes.additionalFootEntriesAfterRemoving,
  );

  const added = pc.combineIf(
    (p) =>
      whenRemoveShoes.excludeTags.every((et) =>
        p.tokens.some((token) => token.tag === et),
      ),
    outfitsWhenRemoveShoes,
  );

  const result = added.map((p) =>
    p.filter((token) =>
      whenRemoveShoes.excludeTags.every((et) => et !== token.tag),
    ),
  );

  return result;
};

const buildCore = (
  rootData: CollectedDatas[number],
  characterData: CollectedDatas[number]["characters"][number],
  outfitData: CollectedDatas[number]["characters"][number]["outfits"][number],
  backgroundData: CollectedDatas[number]["characters"][number]["outfits"][number]["backgrounds"][number],
  poseData: CollectedDatas[number]["characters"][number]["outfits"][number]["backgrounds"][number]["poses"][number],
) => {
  const loraCharacter = PatternCollection.createLora(
    characterData.character.lora,
  );
  const loraCharacterTriggerWord =
    PatternCollection.create<LoraCharacterTriggerWordsTag>(
      characterData.character.loraCharacterTriggerWordEntries,
    );
  const seriesName = PatternCollection.create<SeriesNameTag>(
    characterData.character.seriesNameEntries,
  );
  const characterName = PatternCollection.create<CharacterNameTag>(
    characterData.character.characterNameEntries,
  );
  const characterFeature = PatternCollection.create<CharacterFeatureTag>(
    characterData.character.characterFeatureEntries,
  );
  const breastSize = PatternCollection.create<BreastSizeTag>([
    characterData.character.breastSize,
  ]);
  const rawEmotion = PatternCollection.create<EmotionTag>(
    characterData.character.emotionEntries,
  );

  const emotion = rawEmotion.combineIf<SpecialTag>(
    (p) =>
      p.tokens.some(
        ({ tag }) => tag === `open mouth` && characterData.character.fang,
      ),
    PatternCollection.create<SpecialTag>([`fang`]),
  );

  const loraOutfit = PatternCollection.createLora(
    outfitData.outfit.lora ?? null,
  );
  const loraOutfitTriggerWord =
    PatternCollection.create<LoraOutfitTriggerWordsTag>(
      outfitData.outfit.loraOutfitTriggerWordEntries,
    );
  const outfitAndExposure = PatternCollection.create<OutfitAndExposureTag>(
    outfitData.outfit.outfitAndExposureEntries,
  );
  const upskirt = PatternCollection.create<OutfitAndExposureTag>(
    outfitData.outfit.upskirtEntries,
  );
  const shoesRemovedOutfits = outfitData.outfit.whenRemoveShoes
    ? takeOffShoes(outfitAndExposure, outfitData.outfit.whenRemoveShoes)
    : outfitAndExposure;

  const background = PatternCollection.create<BackgroundTag>(
    backgroundData.background.entries,
  );

  const pose = PatternCollection.create<PoseTag>(poseData.pose.entries);
  const poseVisibility = allVisibilityKeys.filter(
    (key) => poseData.pose.visibility[key],
  );

  // TODO: temp
  if (poseData.key === `undressing-from-side`) {
    const visibleFeatures = extractVisible<CharacterFeatureTag>(
      characterFeature,
      poseVisibility,
    );

    const outfitsOverride = PatternCollection.create<OutfitAndExposureTag>([
      `underwear`,
      `bra`,
      `lace-trimmed bra`,
      `collared shirt`,
      `open clothes`,
      `unbuttoned`,
    ]);

    const visibleOutfits = extractVisible<OutfitAndExposureTag>(
      outfitsOverride,
      poseVisibility,
    );

    const emotionsOverride = PatternCollection.create<EmotionTag>([
      `blush`,
      `half-closed eyes`,
      `heavy breathing`,
      [{ entries: [`smile`] }, { entries: [`expressionless`] }],
    ]);

    const upskirtOverride = PatternCollection.create<OutfitAndExposureTag>([]);

    const specialVisibility = buildSpecialVisibility(
      {
        armpits: false,
        hangingBreasts: false,
        tautClothes: false,
        cleavage: true,
        sideboob: false,
        backboob: false,
        underboobLevel: `invisible`,
        zettaiRyouiki: false,
        insideOfThighs: false,
      },
      poseData.pose.specialVisibility,
      {
        breastSize: characterData.character.breastSize,
        upskirtPatternCollection: upskirtOverride,
        emotionPatternCollection: emotionsOverride,
        backgroundPatternCollection: background,
        visibleFeaturePatternCollection: visibleFeatures,
        visibleOutfitPatternCollection: visibleOutfits,
      },
    );

    return PatternCollection.combine<Tag | LoraNameTag>([
      seriesName,
      characterName,
      loraCharacter,
      loraCharacterTriggerWord,
      visibleFeatures,
      breastSize,
      emotionsOverride,
      loraOutfit,
      loraOutfitTriggerWord,
      visibleOutfits,
      specialVisibility,
      background,
      pose,
    ]);
  }

  const visibleFeatures = extractVisible<CharacterFeatureTag>(
    characterFeature,
    poseVisibility,
  );
  const visibleOutfits = extractVisible<OutfitAndExposureTag>(
    backgroundData.background.removeShoes
      ? shoesRemovedOutfits
      : outfitAndExposure,
    poseVisibility,
  );

  const specialVisibility = buildSpecialVisibility(
    outfitData.outfit.specialVisibility,
    poseData.pose.specialVisibility,
    {
      breastSize: characterData.character.breastSize,
      upskirtPatternCollection: upskirt,
      emotionPatternCollection: emotion,
      backgroundPatternCollection: background,
      visibleFeaturePatternCollection: visibleFeatures,
      visibleOutfitPatternCollection: visibleOutfits,
    },
  );

  return PatternCollection.combine<Tag | LoraNameTag>([
    seriesName,
    characterName,
    loraCharacter,
    loraCharacterTriggerWord,
    visibleFeatures,
    breastSize,
    emotion,
    loraOutfit,
    loraOutfitTriggerWord,
    visibleOutfits,
    specialVisibility,
    background,
    pose,
  ]);
};

const buildPose = (
  generationData: CollectedDatas[number],
  characterData: CollectedDatas[number]["characters"][number],
  outfitData: CollectedDatas[number]["characters"][number]["outfits"][number],
  backgroundData: CollectedDatas[number]["characters"][number]["outfits"][number]["backgrounds"][number],
  poseData: CollectedDatas[number]["characters"][number]["outfits"][number]["backgrounds"][number]["poses"][number],
) => ({
  key: poseData.key,
  probability: poseData.probability,
  patternCollection: buildCore(
    generationData,
    characterData,
    outfitData,
    backgroundData,
    poseData,
  ),
  children: [],
});

const buildBackground = (
  rootData: CollectedDatas[number],
  characterData: CollectedDatas[number]["characters"][number],
  outfitData: CollectedDatas[number]["characters"][number]["outfits"][number],
  backgroundData: CollectedDatas[number]["characters"][number]["outfits"][number]["backgrounds"][number],
) => {
  const poses = backgroundData.poses.map((pose) =>
    buildPose(rootData, characterData, outfitData, backgroundData, pose),
  );

  const backgroundPatternCollection = PatternCollection.joinAll(
    poses.map(({ patternCollection, probability }) => ({
      patternCollection,
      probability,
    })),
  );

  console.log(`Build done: background: ${backgroundData.key}`);
  return {
    key: backgroundData.key,
    probability: backgroundData.probability,
    patternCollection: backgroundPatternCollection,
    children: poses,
  };
};

const buildOutfit = (
  rootData: CollectedDatas[number],
  characterData: CollectedDatas[number]["characters"][number],
  outfitData: CollectedDatas[number]["characters"][number]["outfits"][number],
) => {
  const backgrounds = outfitData.backgrounds.map((backgroundData) =>
    buildBackground(rootData, characterData, outfitData, backgroundData),
  );

  const outfitPatternCollection = PatternCollection.joinAll(
    backgrounds.map(({ patternCollection, probability }) => ({
      patternCollection,
      probability,
    })),
  );

  console.log(`Build done: outfit: ${outfitData.key}`);
  return {
    key: outfitData.key,
    probability: outfitData.probability,
    patternCollection: outfitPatternCollection,
    children: backgrounds,
  };
};

const buildCharacter = (
  rootData: CollectedDatas[number],
  characterData: CollectedDatas[number]["characters"][number],
) => {
  const outfits = characterData.outfits.map((outfitData) =>
    buildOutfit(rootData, characterData, outfitData),
  );

  const characterPatternCollection = PatternCollection.joinAll(
    outfits.map(({ patternCollection, probability }) => ({
      patternCollection,
      probability,
    })),
  );

  console.log(`Build done: character: ${characterData.key}`);
  return {
    key: characterData.key,
    probability: characterData.probability,
    patternCollection: characterPatternCollection,
    children: outfits,
  };
};

const buildRoot = (rootData: CollectedDatas[number]) => {
  const characters = rootData.characters.map((characterData) =>
    buildCharacter(rootData, characterData),
  );

  const rootPatternCollection = PatternCollection.joinAll(
    characters.map(({ patternCollection, probability: weight }) => ({
      patternCollection,
      probability: weight,
    })),
  );

  console.log(`Build done: root: ${rootData.key}`);
  return {
    key: rootData.key,
    probability: rootData.probability,
    fixedPrompt: rootData.fixedPrompt,
    batchGeneration: rootData.batchGeneration,
    optionsBodyJson: rootData.optionsBodyJson,
    txt2imgBodyJson: rootData.txt2imgBodyJson,
    patternCollection: rootPatternCollection,
    children: characters,
  };
};

export const build = (rootDatas: CollectedDatas) => rootDatas.map(buildRoot);
