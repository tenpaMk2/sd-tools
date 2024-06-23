import type { LoraEntry, TagEntry } from "../../entry.mjs";
import type { OutfitTag } from "../../index.mjs";
import type { LoraOutfitTriggerWordsTag } from "../lora.mjs";
import { amaburiRedUniformIsuzu } from "./amaburi/red-uniform-isuzu.mjs";
import { blendSSchoolUniform } from "./blend-s/school-uniform.mjs";
import { blendSSwimsuit } from "./blend-s/swimsuit.mjs";
import { blendSWaitress } from "./blend-s/waitress.mjs";
import { boufuriOutfitSally } from "./boufuri/outfit-sally.mjs";
import { babydoll } from "./common/babydoll.mjs";
import { bikini } from "./common/bikini.mjs";
import { bridalLingerie } from "./common/bridal-lingerie.mjs";
import { camisoleDenimShorts } from "./common/camisole-denim-shorts.mjs";
import { casualMiniskirt } from "./common/casual-miniskirt.mjs";
import { cheerleader } from "./common/cheerleader.mjs";
import { chinaDress } from "./common/china-dress.mjs";
import { cowPrintBikini } from "./common/cow-print-bikini.mjs";
import { denimBikini } from "./common/denim-bikini.mjs";
import { formalSuit } from "./common/formal-suit.mjs";
import { gymUniform } from "./common/gym-uniform.mjs";
import { haremOutfit } from "./common/harem-outfit.mjs";
import { maidBikini } from "./common/maid-bikini.mjs";
import { microBikini } from "./common/micro-bikini.mjs";
import { nakedTowel } from "./common/naked-towel.mjs";
import { nun } from "./common/nun.mjs";
import { oRingBikini } from "./common/o-ring-bikini.mjs";
import { openChestSweater } from "./common/open-chest-sweater.mjs";
import { playboyBunny } from "./common/playboy-bunny.mjs";
import { raceQueen } from "./common/race-queen.mjs";
import { revealingMiko } from "./common/revealing-miko.mjs";
import { santaBikini } from "./common/santa-bikini.mjs";
import { schoolUniformBowtie } from "./common/school-uniform-bowtie.mjs";
import { sportsBikini } from "./common/sports-bikini.mjs";
import { sukumizuThighhighs } from "./common/sukumizu-thighhighs.mjs";
import { sukumizu } from "./common/sukumizu.mjs";
import { sundress } from "./common/sundress.mjs";
import { tankTopDolphinShorts } from "./common/tank-top-dolphin-shorts.mjs";
import { tennisUniform } from "./common/tennis-uniform.mjs";
import { volleyballUniform } from "./common/volleyball-uniform.mjs";
import { danmachiWhiteDressHestia } from "./danmachi/white-dress-hestia.mjs";
import { fateRedSweaterRin } from "./fate/red-sweater-rin.mjs";
import { futokuNoGuildOutfitEnome } from "./futoku-no-guild/outfit-enome.mjs";
import { futokuNoGuildOutfitTokishikko } from "./futoku-no-guild/outfit-tokishikko.mjs";
import { goblinSlayerOutfitCowGirl } from "./goblin-slayer/outfit-cow-girl.mjs";
import { goblinSlayerOutfitPriestess } from "./goblin-slayer/outfit-priestess.mjs";
import { higehiroSchoolUniform } from "./higehiro/school-uniform.mjs";
import { hyoukaSchoolUniformEru } from "./hyouka/school-uniform.mjs";
import { hyoukaWhiteBikiniEru } from "./hyouka/white-bikini.mjs";
import { isInfiniteStratosAcademySchoolUniform } from "./is/infinite-stratos-academy-school-uniform.mjs";
import { isPilotSuit } from "./is/is-pilot-suit.mjs";
import { isYellowDressMaya } from "./is/yellow-dress-maya.mjs";
import { isekaiOjisanOutfitAlicia } from "./isekai-ojisan/alicia.mjs";
import { isekaiOjisanOutfitMabel } from "./isekai-ojisan/mabel.mjs";
import { isekaiOjisanOutfitSui } from "./isekai-ojisan/sui.mjs";
import { isekaiOjisanOutfitSumika } from "./isekai-ojisan/sumika.mjs";
import { kagejitsuShadowGarden } from "./kagejitsu/shadow-garden.mjs";
import { kaguyaSamaShuuchiinAcademySchoolUniform } from "./kaguya-sama/shuuchiin-academy-school-uniform.mjs";
import { konosubaOutfitMegumin } from "./konosuba/megumin-dress.mjs";
import { konosubaOutfitYunyun } from "./konosuba/yunyun-shirt.mjs";
import { lycorisRecoilLycorisUniform } from "./lycoris-recoil/lycoris-uniform.mjs";
import { mahoakoOutfitLocomusica } from "./mahoako/locomusica.mjs";
import { newGameOutfitHifumi } from "./new-game/shirt-hifumi.mjs";
import { newGameOutfitAoba } from "./new-game/suit-aoba.mjs";
import { prismaIllyaBeastChloe } from "./prisma-illya/chloe-beast.mjs";
import { prismaIllyaBeastIllya } from "./prisma-illya/illya-beast.mjs";
import { prismaIllyaMagicalGirlIllya } from "./prisma-illya/magical-girl-illya.mjs";
import { prismaIllyaBeastMiyu } from "./prisma-illya/miyu-beast.mjs";
import { pso2BikiniGene } from "./pso2/bikini-gene.mjs";
import { rokudenashiBikini } from "./rokudenashi/bikini.mjs";
import { rokudenashiSchoolUniform } from "./rokudenashi/school-uniform.mjs";
import { sasuoniFirstHighSchoolUniform } from "./sasuoni/first-high-school-uniform.mjs";
import { slowLoopSchoolUniform } from "./slow-loop/school-uniform.mjs";
import { spyFamilyRedSweater } from "./spy-family/red-sweater.mjs";
import { spyFamilyThornPrincess } from "./spy-family/thorn-princess.mjs";
import { strikeWitchesOutfitYoshika } from "./strike-witches/outfit-yoshika.mjs";
import { tenshiSamaBlazer } from "./tenshi-sama/blazer.mjs";
import { toLoveRuSchoolUniform } from "./to-love-ru/school-uniform.mjs";

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
  "babydoll": babydoll(),
  "bikini": bikini(),
  "bridal-lingerie": bridalLingerie(),
  "camisole-denim-shorts": camisoleDenimShorts(),
  "casual-miniskirt": casualMiniskirt(),
  "cheerleader": cheerleader(),
  "china-dress": chinaDress(),
  "cow-print-bikini": cowPrintBikini(),
  "denim-bikini": denimBikini(),
  "formal-suit": formalSuit(`common`),
  "gym-uniform": gymUniform(),
  "harem-outfit": haremOutfit(),
  "maid-bikini": maidBikini(),
  "micro-bikini": microBikini(),
  "naked-towel": nakedTowel(),
  "nun": nun(),
  "o-ring-bikini": oRingBikini(),
  "open-chest-sweater": openChestSweater(),
  "playboy-bunny": playboyBunny(),
  "race-queen": raceQueen(),
  "revealing-miko": revealingMiko(),
  "santa-bikini": santaBikini(),
  "school-uniform-bowtie": schoolUniformBowtie(),
  "sports-bikini": sportsBikini(),
  "sukumizu-thighhighs": sukumizuThighhighs(),
  "sukumizu": sukumizu(),
  "sundress": sundress(),
  "tank-top-dolphin-shorts": tankTopDolphinShorts(),
  "tennis-uniform": tennisUniform(),
  "volleyball-uniform": volleyballUniform(),
  // TODO: competition swimsuit
  // TODO: track uniform, track and field
  // TODO: dirndl
  // TODO: gun man
  // TODO: naked apron
  // TODO: naked shirt, dress shirt
  // TODO: `valentine`} as const satisfies Record<string, OutfitDefine>;
} as const satisfies Record<string, OutfitDefine>;

/**
 * Character outfit table.
 * @example "series-name-outfit-name-character-name-lora-creator" : seriesNameOutfitNameCharacterNameLoraCreator()
 */
export const characterOutfitTable = {
  "amaburi-red-uniform-isuzu-h-madoka": amaburiRedUniformIsuzu(`h-madoka`),
  "amaburi-red-uniform-isuzu-no-lora": amaburiRedUniformIsuzu(`no-lora`),
  "amaburi-red-uniform-isuzu-nochekaiser":
    amaburiRedUniformIsuzu(`nochekaiser`),
  "blend-s-school-uniform-kaho-ibukimakisiko":
    blendSSchoolUniform(`kaho-ibukimakisiko`),
  "blend-s-swimsuit-kaho-ibukimakisiko": blendSSwimsuit(`kaho-ibukimakisiko`),
  "blend-s-waitress-kaho-ibukimakisiko": blendSWaitress(`kaho-ibukimakisiko`),
  "blend-s-waitress-mafuyu-ibukimakisiko":
    blendSWaitress(`mafuyu-ibukimakisiko`),
  "boufuri-outfit-sally-king-dong": boufuriOutfitSally(`king-dong`),
  "danmachi-white-dress-hestia-eternal2kpp":
    danmachiWhiteDressHestia(`eternal2kpp`),
  "danmachi-white-dress-hestia-no-lora": danmachiWhiteDressHestia(`no-lora`),
  "fate-red-sweater-rin-little-jelly": fateRedSweaterRin(`little-jelly`),
  "futoku-no-guild-outfit-enome-zedotasco":
    futokuNoGuildOutfitEnome(`zedotasco`),
  "futoku-no-guild-outfit-tokishikko-ibukimakisiko":
    futokuNoGuildOutfitTokishikko(`ibukimakisiko`),
  "goblin-slayer-outfit-cow-girl-eternal2kpp":
    goblinSlayerOutfitCowGirl(`eternal2kpp`),
  "goblin-slayer-outfit-priestess-eternal2kpp":
    goblinSlayerOutfitPriestess(`eternal2kpp`),
  "higehiro-school-uniform-sayu-nochekaiser":
    higehiroSchoolUniform(`sayu-nochekaiser`),
  "hyouka-school-uniform-eru-chenkin": hyoukaSchoolUniformEru(`chenkin`),
  "hyouka-white-bikini-eru-chenkin": hyoukaWhiteBikiniEru(`chenkin`),
  "is-infinite-stratos-academy-school-uniform-cecilia-nochekaiser":
    isInfiniteStratosAcademySchoolUniform(`cecilia-nochekaiser`),
  "is-infinite-stratos-academy-school-uniform-charlotte-nochekaiser":
    isInfiniteStratosAcademySchoolUniform(`charlotte-nochekaiser`),
  "is-infinite-stratos-academy-school-uniform-houki-nochekaiser":
    isInfiniteStratosAcademySchoolUniform(`houki-nochekaiser`),
  "is-infinite-stratos-academy-school-uniform-laura-nochekaiser":
    isInfiniteStratosAcademySchoolUniform(`laura-nochekaiser`),
  "is-infinite-stratos-academy-school-uniform-lingyin-nochekaiser":
    isInfiniteStratosAcademySchoolUniform(`lingyin-nochekaiser`),
  "is-infinite-stratos-academy-school-uniform-tatenashi-nochekaiser":
    isInfiniteStratosAcademySchoolUniform(`tatenashi-nochekaiser`),
  "is-pilot-suit-cecilia-nochekaiser": isPilotSuit(`cecilia-nochekaiser`),
  "is-pilot-suit-charlotte-nochekaiser": isPilotSuit(`charlotte-nochekaiser`),
  "is-pilot-suit-houki-nochekaiser": isPilotSuit(`houki-nochekaiser`),
  "is-yellow-dress-maya-nochekaiser": isYellowDressMaya(`nochekaiser`),
  "isekai-ojisan-outfit-alicia-nochekaiser":
    isekaiOjisanOutfitAlicia(`nochekaiser`),
  "isekai-ojisan-outfit-mabel-nochekaiser":
    isekaiOjisanOutfitMabel(`nochekaiser`),
  "isekai-ojisan-outfit-sui-nochekaiser": isekaiOjisanOutfitSui(`nochekaiser`),
  "isekai-ojisan-outfit-sumika-nochekaiser":
    isekaiOjisanOutfitSumika(`nochekaiser`),
  "kagejitsu-shadow-garden-alpha-nochekaiser":
    kagejitsuShadowGarden(`alpha-nochekaiser`),
  "kagejitsu-shadow-garden-beta-nochekaiser":
    kagejitsuShadowGarden(`beta-nochekaiser`),
  "kaguya-sama-shuuchiin-academy-school-uniform-ai-no-lora":
    kaguyaSamaShuuchiinAcademySchoolUniform(`ai-no-lora`),
  "kaguya-sama-shuuchiin-academy-school-uniform-ai-nochekaiser":
    kaguyaSamaShuuchiinAcademySchoolUniform(`ai-nochekaiser`),
  "kaguya-sama-shuuchiin-academy-school-uniform-chika-eternal2kpp":
    kaguyaSamaShuuchiinAcademySchoolUniform(`chika-eternal2kpp`),
  "kaguya-sama-shuuchiin-academy-school-uniform-chika-no-lora":
    kaguyaSamaShuuchiinAcademySchoolUniform(`chika-no-lora`),
  "kaguya-sama-shuuchiin-academy-school-uniform-chika-nochekaiser":
    kaguyaSamaShuuchiinAcademySchoolUniform(`chika-nochekaiser`),
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya-eternal2kpp":
    kaguyaSamaShuuchiinAcademySchoolUniform(`kaguya-eternal2kpp`),
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya-no-lora":
    kaguyaSamaShuuchiinAcademySchoolUniform(`kaguya-no-lora`),
  "kaguya-sama-shuuchiin-academy-school-uniform-kaguya-nochekaiser":
    kaguyaSamaShuuchiinAcademySchoolUniform(`kaguya-nochekaiser`),
  "kaguya-sama-shuuchiin-academy-school-uniform-miko-no-lora":
    kaguyaSamaShuuchiinAcademySchoolUniform(`miko-no-lora`),
  "kaguya-sama-shuuchiin-academy-school-uniform-miko-nochekaiser":
    kaguyaSamaShuuchiinAcademySchoolUniform(`miko-nochekaiser`),
  "konosuba-outfit-megumin-adventurer-no-lora":
    konosubaOutfitMegumin(`adventurer-no-lora`),
  "konosuba-outfit-megumin-light-no-lora":
    konosubaOutfitMegumin(`light-no-lora`),
  "konosuba-outfit-yunyun-no-lora": konosubaOutfitYunyun(`no-lora`),
  "lycoris-recoil-lycoris-uniform-chisato-nochekaiser":
    lycorisRecoilLycorisUniform(`chisato-nochekaiser`),
  "lycoris-recoil-lycoris-uniform-takina-nochekaiser":
    lycorisRecoilLycorisUniform(`takina-nochekaiser`),
  "mahoako-outfit-locomusica-notekaga": mahoakoOutfitLocomusica(`notekaga`),
  "new-game-outfit-aoba-eternal2kpp": newGameOutfitAoba(`eternal2kpp`),
  "new-game-outfit-aoba-nochekaiser": newGameOutfitAoba(`nochekaiser`),
  "new-game-outfit-hifumi-eternal2kpp": newGameOutfitHifumi(`eternal2kpp`),
  "new-game-outfit-hifumi-nochekaiser": newGameOutfitHifumi(`nochekaiser`),
  "prisma-illya-beast-chloe-am7coffeelove":
    prismaIllyaBeastChloe(`am7coffeelove`),
  "prisma-illya-beast-illya-am7coffeelove":
    prismaIllyaBeastIllya(`am7coffeelove`),
  "prisma-illya-beast-miyu-am7coffeelove":
    prismaIllyaBeastMiyu(`am7coffeelove`),
  "prisma-illya-magical-girl-illya-flujoru":
    prismaIllyaMagicalGirlIllya(`flujoru`),
  "pso2-bikini-gene-overnerd": pso2BikiniGene(`overnerd`),
  "rokudenashi-bikini-rumia-little-jelly":
    rokudenashiBikini(`rumia-little-jelly`),
  "rokudenashi-school-uniform-summer-little-jelly":
    rokudenashiSchoolUniform(`summer-little-jelly`),
  "rokudenashi-school-uniform-winter-little-jelly":
    rokudenashiSchoolUniform(`winter-little-jelly`),
  "sasuoni-first-high-school-uniform-nochekaiser":
    sasuoniFirstHighSchoolUniform(`nochekaiser`),
  "slow-loop-school-uniform-hiyori-ibukimakisiko":
    slowLoopSchoolUniform(`hiyori-ibukimakisiko`),
  "slow-loop-school-uniform-koharu-ibukimakisiko":
    slowLoopSchoolUniform(`koharu-ibukimakisiko`),
  "slow-loop-school-uniform-koi-ibukimakisiko":
    slowLoopSchoolUniform(`koi-ibukimakisiko`),
  "spy-family-red-sweater-eternal2kpp": spyFamilyRedSweater(`eternal2kpp`),
  "spy-family-thorn-princess-eternal2kpp":
    spyFamilyThornPrincess(`eternal2kpp`),
  "strike-witches-outfit-yoshika-gwess":
    strikeWitchesOutfitYoshika(`witch-gwess`),
  "tenshi-sama-blazer-jibunsagasinotabi": tenshiSamaBlazer(
    `mahiru-jibunsagasinotabi`,
  ),
  "to-love-ru-school-uniform-haruna-nochekaiser":
    toLoveRuSchoolUniform(`haruna-nochekaiser`),
  "to-love-ru-school-uniform-lala-nochekaiser":
    toLoveRuSchoolUniform(`lala-nochekaiser`),
  "to-love-ru-school-uniform-momo-lancelot":
    toLoveRuSchoolUniform(`momo-lancelot`),
  "to-love-ru-school-uniform-momo-nochekaiser":
    toLoveRuSchoolUniform(`momo-nochekaiser`),
  "to-love-ru-school-uniform-nana-lancelot":
    toLoveRuSchoolUniform(`nana-lancelot`),
  "to-love-ru-school-uniform-nana-nochekaiser":
    toLoveRuSchoolUniform(`nana-nochekaiser`),
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
