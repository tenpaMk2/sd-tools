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
  OutfitCollectedData,
  PoseCollectedData,
  RootCollectedData,
} from "../collector.mjs";
import { OutfitDefine, UnderboobLevelOrder } from "../outfits/resolver.mjs";
import {
  PoseSpecialVisibility,
  PoseUnderboobLevelOrder,
} from "../poses/resolver.mjs";
import { Pattern, PatternCollection } from "../prompt-define.mjs";
import {
  CharacterFeatureTag,
  OutfitTag,
  PoseTag,
  Tag,
} from "../tag-defines/adapter.mjs";
import {
  LoraCharacterTriggerWordsTag,
  LoraNameTag,
  LoraOutfitTriggerWordsTag,
} from "../tag-defines/lora.mjs";

const separateByVisibility = <T extends CharacterFeatureTag | OutfitTag>(
  pattern: Pattern<T>,
) => {
  const filterCB = (tag: T, part: VisibilityKeys) => {
    if (tag in tagVisibilities) {
      return tagVisibilities[tag][part];
    }
    // The tag in Custom Define is always visible.
    return true;
  };

  const result = allVisibilityKeys.reduce(
    (prev, part) => ({
      ...prev,
      [part]: pattern.filter(({ tag }) => filterCB(tag, part)),
    }),
    {},
  ) as {
    [k in VisibilityKeys]: Pattern<T>;
  };
  return result;
};

const extractVisible = <T extends CharacterFeatureTag | OutfitTag>(
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
    upskirtPatternCollection: PatternCollection<OutfitTag>;
    emotionPatternCollection: PatternCollection<EmotionTag | SpecialTag>;
    backgroundPatternCollection: PatternCollection<BackgroundTag>;
    visibleFeaturePatternCollection: PatternCollection<CharacterFeatureTag>;
    visibleOutfitPatternCollection: PatternCollection<OutfitTag>;
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
  pc: PatternCollection<OutfitTag>,
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
  rootData: RootCollectedData,
  characterData: CharacterCollectedData,
  outfitData: OutfitCollectedData,
  backgroundData: BackgroundCollectedData,
  poseData: PoseCollectedData,
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
  const outfitAndExposure = PatternCollection.create<OutfitTag>(
    outfitData.outfit.outfitEntries,
  );
  const upskirt = PatternCollection.create<OutfitTag>(
    outfitData.outfit.upskirtEntries,
  );
  const shoesRemovedOutfits = outfitData.outfit.whenRemoveShoes
    ? takeOffShoes(outfitAndExposure, outfitData.outfit.whenRemoveShoes)
    : outfitAndExposure;

  const cameraAngle = poseData.pose.cameraAngle;
  const background = PatternCollection.create<BackgroundTag>(
    backgroundData.background[cameraAngle]!.entries,
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

    const outfitsOverride = PatternCollection.create<OutfitTag>([
      `underwear`,
      `bra`,
      `lace-trimmed bra`,
      `collared shirt`,
      `open clothes`,
      `unbuttoned`,
    ]);

    const visibleOutfits = extractVisible<OutfitTag>(
      outfitsOverride,
      poseVisibility,
    );

    const emotionsOverride = PatternCollection.create<EmotionTag>([
      `blush`,
      `half-closed eyes`,
      `heavy breathing`,
      [{ entries: [`smile`] }, { entries: [`expressionless`] }],
    ]);

    const upskirtOverride = PatternCollection.create<OutfitTag>([]);

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
  const visibleOutfits = extractVisible<OutfitTag>(
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
  rootData: RootCollectedData,
  characterData: CharacterCollectedData,
  outfitData: OutfitCollectedData,
  backgroundData: BackgroundCollectedData,
  poseData: PoseCollectedData,
) => ({
  key: poseData.key,
  probability: poseData.probability,
  patternCollection: buildCore(
    rootData,
    characterData,
    outfitData,
    backgroundData,
    poseData,
  ),
  children: [],
});

const buildBackground = (
  rootData: RootCollectedData,
  characterData: CharacterCollectedData,
  outfitData: OutfitCollectedData,
  backgroundData: BackgroundCollectedData,
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
  rootData: RootCollectedData,
  characterData: CharacterCollectedData,
  outfitData: OutfitCollectedData,
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
  rootData: RootCollectedData,
  characterData: CharacterCollectedData,
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

const buildRoot = (rootData: RootCollectedData) => {
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

export const build = (rootDatas: RootCollectedData[]) =>
  rootDatas.map(buildRoot);
