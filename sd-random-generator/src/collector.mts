import { backgroundTable } from "./backgrounds/resolver.mjs";
import { characterTable } from "./characters/resolver.mjs";
import { outfitTable } from "./outfits/resolver.mjs";
import { poseTable } from "./poses/resolver.mjs";
import { BackgroundSetting, Setting } from "./setting-define.mjs";

const collectFromHorizontalPose = ({
  key,
  probability,
}: BackgroundSetting<"from-horizontal">["poses"][number]) => ({
  key,
  probability: probability ?? 1,
  pose: poseTable["from-horizontal"][key],
});

const collectFromBelowPose = ({
  key,
  probability,
}: BackgroundSetting<"from-below">["poses"][number]) => ({
  key,
  probability: probability ?? 1,
  pose: poseTable["from-below"][key],
});

const collectFromAbovePose = ({
  key,
  probability,
}: BackgroundSetting<"from-above">["poses"][number]) => ({
  key,
  probability: probability ?? 1,
  pose: poseTable["from-above"][key],
});

const collectBackground = ({
  key,
  type,
  probability,
  poses,
}: Setting["characters"][number]["outfits"][number]["backgrounds"][number]) => {
  switch (type) {
    case "from-horizontal":
      return {
        key: `from-horizontal-${key}`,
        probability: probability ?? 1,
        background: backgroundTable["from-horizontal"][key],
        poses: poses.map(collectFromHorizontalPose),
      };
    case "from-below":
      return {
        key: `from-below-${key}`,
        probability: probability ?? 1,
        background: backgroundTable["from-below"][key],
        poses: poses.map(collectFromBelowPose),
      };
    case "from-above":
      return {
        key: `from-above-${key}`,
        probability: probability ?? 1,
        background: backgroundTable["from-above"][key],
        poses: poses.map(collectFromAbovePose),
      };
  }
};

const collectOutfit = ({
  key,
  probability,
  backgrounds,
}: Setting["characters"][number]["outfits"][number]) => ({
  key,
  probability: probability ?? 1,
  outfit: outfitTable[key],
  backgrounds: backgrounds.map(collectBackground),
});

const collectCharacter = ({
  key,
  probability,
  outfits,
}: Setting["characters"][number]) => ({
  key,
  probability: probability ?? 1,
  character: characterTable[key],
  outfits: outfits.map(collectOutfit),
});

export const collect = (settings: Setting[]) =>
  settings.map(
    ({
      key,
      probability,
      fixedPrompt,
      batchGeneration,
      optionsBodyJson,
      txt2imgBodyJson,
      characters,
    }) => ({
      key,
      probability: probability ?? 1,
      fixedPrompt,
      batchGeneration,
      optionsBodyJson,
      txt2imgBodyJson,
      characters: characters.map(collectCharacter),
    }),
  );

export type CollectedDatas = ReturnType<typeof collect>;
