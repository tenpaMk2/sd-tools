import type { LoraEntry, TagEntry } from "../../entry.mjs";
import type { OutfitTag } from "../../index.mjs";
import type { LoraOutfitTriggerWordsTag } from "../lora.mjs";
import { amaburiRedUniformIsuzu } from "./amaburi/red-uniform-isuzu.mjs";
import { blendSSchoolUniform } from "./blend-s/school-uniform.mjs";
import { blendSSwimsuit } from "./blend-s/swimsuit.mjs";
import { blendSWaitress } from "./blend-s/waitress.mjs";
import { blueArchiveGymUniform } from "./blue-archive/gym-uniform.mjs";
import { blueArchiveSchoolUniform } from "./blue-archive/school-uniform.mjs";
import { boufuriOutfitMaple } from "./boufuri/outfit-maple.mjs";
import { boufuriOutfitSally } from "./boufuri/outfit-sally.mjs";
import { boufuriSchoolUniform } from "./boufuri/school-uniform.mjs";
import { babydoll } from "./common/babydoll.mjs";
import { bikini } from "./common/bikini.mjs";
import { bridalLingerie } from "./common/bridal-lingerie.mjs";
import { camisoleDenimShorts } from "./common/camisole-denim-shorts.mjs";
import { casualMiniskirt } from "./common/casual-miniskirt.mjs";
import { cheerleader } from "./common/cheerleader.mjs";
import { chinaDress } from "./common/china-dress.mjs";
import { cowPrintBikini } from "./common/cow-print-bikini.mjs";
import { denimBikini } from "./common/denim-bikini.mjs";
import { dirndl } from "./common/dirndl.mjs";
import { formalSuit } from "./common/formal-suit.mjs";
import { gymUniform } from "./common/gym-uniform.mjs";
import { haremOutfit } from "./common/harem-outfit.mjs";
import { maidBikini } from "./common/maid-bikini.mjs";
import { microBikini } from "./common/micro-bikini.mjs";
import { nakedShirt } from "./common/naked-shirt.mjs";
import { nakedTowel } from "./common/naked-towel.mjs";
import { nun } from "./common/nun.mjs";
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
import { undressingShirt } from "./common/undressing-shirt.mjs";
import { volleyballUniform } from "./common/volleyball-uniform.mjs";
import { danmachiWhiteDressHestia } from "./danmachi/white-dress-hestia.mjs";
import { eromangaSenseiBikini } from "./eromanga-sensei/bikini.mjs";
import { eromangaSenseiBookseller } from "./eromanga-sensei/bookseller.mjs";
import { eromangaSenseiKimono } from "./eromanga-sensei/kimono.mjs";
import { eromangaSenseiSerafuku } from "./eromanga-sensei/serafuku.mjs";
import { eromangaSenseiSundress } from "./eromanga-sensei/sundress.mjs";
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
import { isekaiNonbiriNoukaOutfitRia } from "./isekai-nonbiri-nouka/outfit-ria.mjs";
import { isekaiNonbiriNoukaOutfitRurushi } from "./isekai-nonbiri-nouka/outfit-rurushi.mjs";
import { isekaiNonbiriNoukaOutfitTia } from "./isekai-nonbiri-nouka/outfit-tia.mjs";
import { isekaiOjisanOutfitAlicia } from "./isekai-ojisan/alicia.mjs";
import { isekaiOjisanOutfitMabel } from "./isekai-ojisan/mabel.mjs";
import { isekaiOjisanOutfitSui } from "./isekai-ojisan/sui.mjs";
import { isekaiOjisanOutfitSumika } from "./isekai-ojisan/sumika.mjs";
import { kagejitsuShadowGarden } from "./kagejitsu/shadow-garden.mjs";
import { kaguyaSamaMaidHayasaka } from "./kaguya-sama/maid-hayasaka.mjs";
import { kaguyaSamaShuuchiinAcademySchoolUniform } from "./kaguya-sama/shuuchiin-academy-school-uniform.mjs";
import { konosubaOutfitMegumin } from "./konosuba/megumin-dress.mjs";
import { konosubaOutfitYunyun } from "./konosuba/yunyun-shirt.mjs";
import { lycorisRecoilLycorisUniform } from "./lycoris-recoil/lycoris-uniform.mjs";
import { machikadoMazokuCrisisManagementForm } from "./machikado-mazoku/crisis-management-form.mjs";
import { machikadoMazokuGymUniform } from "./machikado-mazoku/gym-uniform.mjs";
import { machikadoMazokuSchoolUniform } from "./machikado-mazoku/school-uniform.mjs";
import { mahoakoOutfitLocomusica } from "./mahoako/locomusica.mjs";
import { majoNoTabitabiWitch } from "./majo-no-tabitabi/witch.mjs";
import { mushokuTenseiMaid } from "./mushoku-tensei/maid.mjs";
import { mushokuTenseiOutfitNorn } from "./mushoku-tensei/outfit-norn.mjs";
import { mushokuTenseiOutfitRoxy } from "./mushoku-tensei/outfit-roxy.mjs";
import { mushokuTenseiOversizedShirtRoxy } from "./mushoku-tensei/oversized-shirt-roxy.mjs";
import { mushokuTenseiPajamasRoxy } from "./mushoku-tensei/pajamas-roxy.mjs";
import { mushokuTenseiSchoolUniform } from "./mushoku-tensei/school-uniform.mjs";
import { newGameOutfitHifumi } from "./new-game/shirt-hifumi.mjs";
import { newGameOutfitAoba } from "./new-game/suit-aoba.mjs";
import { ochifuruIdol } from "./ochifuru/idol.mjs";
import { ochifuruSchoolUniform } from "./ochifuru/school-uniform.mjs";
import { prismaIllyaBeastChloe } from "./prisma-illya/chloe-beast.mjs";
import { prismaIllyaBeastIllya } from "./prisma-illya/illya-beast.mjs";
import { prismaIllyaMagicalGirlIllya } from "./prisma-illya/magical-girl-illya.mjs";
import { prismaIllyaBeastMiyu } from "./prisma-illya/miyu-beast.mjs";
import { pso2BikiniGene } from "./pso2/bikini-gene.mjs";
import { rokudenashiBikini } from "./rokudenashi/bikini.mjs";
import { rokudenashiSchoolUniform } from "./rokudenashi/school-uniform.mjs";
import { ryuuouOutfitHinatsuruAi } from "./ryuuou/outfit-hinatsuru-ai.mjs";
import { ryuuouOutfitYashajinAi } from "./ryuuou/outfit-yashajin-ai.mjs";
import { sasuoniFirstHighSchoolUniform } from "./sasuoni/first-high-school-uniform.mjs";
import { seireiOutfitCelia } from "./seirei/outfit-celia.mjs";
import { slowLoopSchoolUniform } from "./slow-loop/school-uniform.mjs";
import { spyFamilyRedSweater } from "./spy-family/red-sweater.mjs";
import { spyFamilyThornPrincess } from "./spy-family/thorn-princess.mjs";
import { strikeWitchesOutfitYoshika } from "./strike-witches/outfit-yoshika.mjs";
import { tenshiSamaBlazer } from "./tenshi-sama/blazer.mjs";
import { tenshiTsukiOutfitTowa } from "./tenshi-tsuki/outfit-towa.mjs";
import { tenshiTsukiSchoolUniform } from "./tenshi-tsuki/school-uniform.mjs";
import { toLoveRuBikini } from "./to-love-ru/bikini.mjs";
import { toLoveRuSchoolUniform } from "./to-love-ru/school-uniform.mjs";
import { toLoveRuSuitTearju } from "./to-love-ru/suit-tearju.mjs";
import { toLoveRuTrans } from "./to-love-ru/trans.mjs";

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
  upskirt: null | {
    /**
     * Lift type for clothes lift.
     */
    liftType: `skirt` | `dress` | `shirt`;
    /**
     * Outfit and exposure defines in the skirt for when `upskirt` is specified.
     */
    entries: TagEntry<OutfitTag>[]; // TODO: Reconsider as `null` .
  };
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
  "bikini-frill": bikini(`frill`),
  "bikini-o-ring": bikini(`o-ring`),
  "bikini-tie": bikini(`tie`),
  "bridal-lingerie": bridalLingerie(),
  "camisole-denim-shorts": camisoleDenimShorts(),
  "casual-miniskirt": casualMiniskirt(),
  "cheerleader": cheerleader(),
  "china-dress": chinaDress(),
  "cow-print-bikini": cowPrintBikini(),
  "denim-bikini": denimBikini(),
  "dirndl": dirndl(),
  "formal-suit": formalSuit(`common`),
  "gym-uniform": gymUniform(),
  "harem-outfit": haremOutfit(),
  "maid-bikini": maidBikini(),
  "micro-bikini": microBikini(),
  "naked-shirt": nakedShirt(),
  "naked-towel": nakedTowel(),
  "nun": nun(),
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
  "undressing-shirt": undressingShirt(),
  "volleyball-uniform": volleyballUniform(),
  // TODO: competition swimsuit
  // TODO: track uniform, track and field
  // TODO: gun man
  // TODO: naked apron
  // TODO: naked shirt, dress shirt
  // TODO: `valentine`
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
  "blend-s-waitress-maika-shadowxart": blendSWaitress(`maika-shadowxart`),
  "blue-archive-gym-uniform-yuuka-ibukimakisiko":
    blueArchiveGymUniform(`yuuka-ibukimakisiko`),
  "blue-archive-school-uniform-arona-ibukimakisiko":
    blueArchiveSchoolUniform(`arona-ibukimakisiko`),
  "blue-archive-school-uniform-yuuka-ibukimakisiko":
    blueArchiveSchoolUniform(`yuuka-ibukimakisiko`),
  "blue-archive-school-uniform-yuuka-shirt-ibukimakisiko":
    blueArchiveSchoolUniform(`yuuka-shirt-ibukimakisiko`),
  "boufuri-outfit-maple-ibukimakisiko": boufuriOutfitMaple(`ibukimakisiko`),
  "boufuri-outfit-sally-ibukimakisiko": boufuriOutfitSally(`ibukimakisiko`),
  "boufuri-outfit-sally-king-dong": boufuriOutfitSally(`king-dong`),
  "boufuri-school-uniform-maple-ibukimakisiko":
    boufuriSchoolUniform(`maple-ibukimakisiko`),
  "boufuri-school-uniform-sally-ibukimakisiko":
    boufuriSchoolUniform(`sally-ibukimakisiko`),
  "danmachi-white-dress-hestia-eternal2kpp":
    danmachiWhiteDressHestia(`eternal2kpp`),
  "danmachi-white-dress-hestia-no-lora": danmachiWhiteDressHestia(`no-lora`),
  "eromanga-sensei-bikini-muramasa-little-jelly": eromangaSenseiBikini(
    `muramasa-little-jelly`,
  ),
  "eromanga-sensei-bookseller-tomoe-little-jelly":
    eromangaSenseiBookseller(`tomoe-little-jelly`),
  "eromanga-sensei-kimono-muramasa-little-jelly": eromangaSenseiKimono(
    `muramasa-little-jelly`,
  ),
  "eromanga-sensei-serafuku-muramasa-little-jelly": eromangaSenseiSerafuku(
    `muramasa-little-jelly`,
  ),
  "eromanga-sensei-sundress-muramasa-little-jelly": eromangaSenseiSundress(
    `muramasa-little-jelly`,
  ),
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
  "isekai-nonbiri-nouka-outfit-ria-little-jelly":
    isekaiNonbiriNoukaOutfitRia(`little-jelly`),
  "isekai-nonbiri-nouka-outfit-rurushi-little-jelly":
    isekaiNonbiriNoukaOutfitRurushi(`little-jelly`),
  "isekai-nonbiri-nouka-outfit-tia-little-jelly":
    isekaiNonbiriNoukaOutfitTia(`little-jelly`),
  "isekai-ojisan-outfit-alicia-nochekaiser":
    isekaiOjisanOutfitAlicia(`nochekaiser`),
  "isekai-ojisan-outfit-mabel-nochekaiser":
    isekaiOjisanOutfitMabel(`nochekaiser`),
  "isekai-ojisan-outfit-sui-nochekaiser": isekaiOjisanOutfitSui(`nochekaiser`),
  "isekai-ojisan-outfit-sumika-nochekaiser":
    isekaiOjisanOutfitSumika(`nochekaiser`),
  "kagejitsu-shadow-garden-alpha-nochekaiser":
    kagejitsuShadowGarden(`alpha-nochekaiser`),
  "kagejitsu-shadow-garden-alpha-novowels":
    kagejitsuShadowGarden(`alpha-novowels`),
  "kagejitsu-shadow-garden-beta-nochekaiser":
    kagejitsuShadowGarden(`beta-nochekaiser`),
  "kagejitsu-shadow-garden-beta-novowels":
    kagejitsuShadowGarden(`beta-novowels`),
  "kaguya-sama-maid-hayasaka-nochekaiser":
    kaguyaSamaMaidHayasaka(`nochekaiser`),
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
  "machikado-mazoku-crisis-management-form-ibukimakisiko":
    machikadoMazokuCrisisManagementForm(`ibukimakisiko`),
  "machikado-mazoku-gym-uniform-shamiko-ibukimakisiko":
    machikadoMazokuGymUniform(`shamiko-ibukimakisiko`),
  "machikado-mazoku-school-uniform-shamiko-ibukimakisiko":
    machikadoMazokuSchoolUniform(`shamiko-ibukimakisiko`),
  "mahoako-outfit-locomusica-notekaga": mahoakoOutfitLocomusica(`notekaga`),
  "majo-no-tabitabi-witch-elaina-ibukimakisiko":
    majoNoTabitabiWitch(`elaina-ibukimakisiko`),
  "majo-no-tabitabi-witch-elaina-inner-ibukimakisiko": majoNoTabitabiWitch(
    `elaina-inner-ibukimakisiko`,
  ),
  "mushoku-tensei-maid-aisha-ibukimakisiko":
    mushokuTenseiMaid(`aisha-ibukimakisiko`),
  "mushoku-tensei-outfit-norn-ibukimakisiko":
    mushokuTenseiOutfitNorn(`ibukimakisiko`),
  "mushoku-tensei-outfit-roxy-adventurer-indoors-ibukimakisiko":
    mushokuTenseiOutfitRoxy(`adventurer-indoors-ibukimakisiko`),
  "mushoku-tensei-outfit-roxy-adventurer-outdoors-ibukimakisiko":
    mushokuTenseiOutfitRoxy(`adventurer-outdoors-ibukimakisiko`),
  "mushoku-tensei-outfit-roxy-indoors-ibukimakisiko": mushokuTenseiOutfitRoxy(
    `indoors-ibukimakisiko`,
  ),
  "mushoku-tensei-outfit-roxy-outdoors-ibukimakisiko": mushokuTenseiOutfitRoxy(
    `outdoors-ibukimakisiko`,
  ),
  "mushoku-tensei-oversized-shirt-roxy-ibukimakisiko":
    mushokuTenseiOversizedShirtRoxy(`ibukimakisiko`),
  "mushoku-tensei-pajamas-roxy-ibukimakisiko":
    mushokuTenseiPajamasRoxy(`ibukimakisiko`),
  "mushoku-tensei-school-uniform-norn-ibukimakisiko":
    mushokuTenseiSchoolUniform(`norn-ibukimakisiko`),
  "new-game-outfit-aoba-eternal2kpp": newGameOutfitAoba(`eternal2kpp`),
  "new-game-outfit-aoba-nochekaiser": newGameOutfitAoba(`nochekaiser`),
  "new-game-outfit-hifumi-eternal2kpp": newGameOutfitHifumi(`eternal2kpp`),
  "new-game-outfit-hifumi-nochekaiser": newGameOutfitHifumi(`nochekaiser`),
  "ochifuru-idol-jacket-hayu-enter": ochifuruIdol(`jacket-hayu-enter`),
  "ochifuru-idol-jacket-hemo-enter": ochifuruIdol(`jacket-hemo-enter`),
  "ochifuru-idol-jacket-ino-enter": ochifuruIdol(`jacket-ino-enter`),
  "ochifuru-idol-jacket-nina-enter": ochifuruIdol(`jacket-nina-enter`),
  "ochifuru-idol-jacket-roko-enter": ochifuruIdol(`jacket-roko-enter`),
  "ochifuru-idol-sleeveless-hayu-enter": ochifuruIdol(`sleeveless-hayu-enter`),
  "ochifuru-idol-sleeveless-hemo-enter": ochifuruIdol(`sleeveless-hemo-enter`),
  "ochifuru-idol-sleeveless-ino-enter": ochifuruIdol(`sleeveless-ino-enter`),
  "ochifuru-idol-sleeveless-nina-enter": ochifuruIdol(`sleeveless-nina-enter`),
  "ochifuru-idol-sleeveless-roko-enter": ochifuruIdol(`sleeveless-roko-enter`),
  "ochifuru-school-uniform-hayu-enter": ochifuruSchoolUniform(`hayu-enter`),
  "ochifuru-school-uniform-hemo-enter": ochifuruSchoolUniform(`hemo-enter`),
  "ochifuru-school-uniform-ino-enter": ochifuruSchoolUniform(`ino-enter`),
  "ochifuru-school-uniform-nina-enter": ochifuruSchoolUniform(`nina-enter`),
  "ochifuru-school-uniform-roko-enter": ochifuruSchoolUniform(`roko-enter`),
  "ochifuru-school-uniform-tone-enter": ochifuruSchoolUniform(`tone-enter`),
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
  "ryuuou-outfit-hinatsuru-ai-ibukimakisiko":
    ryuuouOutfitHinatsuruAi(`ibukimakisiko`),
  "ryuuou-outfit-yashajin-ai-ibukimakisiko":
    ryuuouOutfitYashajinAi(`ibukimakisiko`),
  "sasuoni-first-high-school-uniform-nochekaiser":
    sasuoniFirstHighSchoolUniform(`nochekaiser`),
  "seirei-outfit-celia-ibukimakisiko": seireiOutfitCelia(`ibukimakisiko`),
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
  "tenshi-tsuki-outfit-towa-eternal2kpp": tenshiTsukiOutfitTowa(`eternal2kpp`),
  "tenshi-tsuki-school-uniform-noel-duongve":
    tenshiTsukiSchoolUniform(`noel-duongve`),
  "tenshi-tsuki-school-uniform-noel-eternal2kpp":
    tenshiTsukiSchoolUniform(`noel-eternal2kpp`),
  "tenshi-tsuki-school-uniform-tsumugi-duongve":
    tenshiTsukiSchoolUniform(`tsumugi-duongve`),
  "tenshi-tsuki-school-uniform-tsumugi-eternal2kpp":
    tenshiTsukiSchoolUniform(`tsumugi-eternal2kpp`),
  "to-love-ru-bikini-tearju-nochekaiser": toLoveRuBikini(`tearju-nochekaiser`),
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
  "to-love-ru-school-uniform-yami-nochekaiser":
    toLoveRuSchoolUniform(`yami-nochekaiser`),
  "to-love-ru-school-uniform-yui-nochekaiser":
    toLoveRuSchoolUniform(`yui-nochekaiser`),
  "to-love-ru-suit-tearju-nochekaiser": toLoveRuSuitTearju(`nochekaiser`),
  "to-love-ru-trans-yami-nochekaiser": toLoveRuTrans(`yami-nochekaiser`),
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
