import {
  BreastSizeTag,
  CharacterNameTag,
  SeriesNameTag,
} from "@tenpamk2/sd-tag-defines";
import { LoraEntry, NormalEntry } from "../prompt-define.mjs";
import { CharacterFeatureTag } from "../tag-defines/adapter.mjs";
import { LoraCharacterTriggerWordsTag } from "../tag-defines/lora.mjs";
import { amaburiIsuzu } from "./amaburi/isuzu.mjs";
import { atelierRyza } from "./atelier/ryza.mjs";
import { blendSKaho } from "./blend-s/kaho.mjs";
import { blendSMafuyu } from "./blend-s/mafuyu.mjs";
import { danmachiAiz } from "./danmachi/aiz.mjs";
import { danmachiEina } from "./danmachi/eina.mjs";
import { danmachiHaruhime } from "./danmachi/haruhime.mjs";
import { danmachiHestia } from "./danmachi/hestia.mjs";
import { danmachiLili } from "./danmachi/lili.mjs";
import { danmachiRyu } from "./danmachi/ryu.mjs";
import { eromangaSenseiElf } from "./eromanga-sensei/elf.mjs";
import { eromangaSenseiMegumi } from "./eromanga-sensei/megumi.mjs";
import { eromangaSenseiSagiri } from "./eromanga-sensei/sagiri.mjs";
import { fateRin } from "./fate/rin.mjs";
import { futokuNoGuildEnome } from "./futoku-no-guild/enome.mjs";
import { futokuNoGuildTokishikko } from "./futoku-no-guild/tokishikko.mjs";
import { higehiroSayu } from "./higehiro/sayu.mjs";
import { hyoukaEru } from "./hyouka/eru.mjs";
import { isCecilia } from "./is/cecilia.mjs";
import { isCharlotte } from "./is/charlotte.mjs";
import { isChifuyu } from "./is/chifuyu.mjs";
import { isHouki } from "./is/houki.mjs";
import { isLaura } from "./is/laura.mjs";
import { isLingyin } from "./is/lingyin.mjs";
import { isMaya } from "./is/maya.mjs";
import { isTatenashi } from "./is/tatenashi.mjs";
import { isekaiOjisanAlicia } from "./isekai-ojisan/alicia.mjs";
import { isekaiOjisanMabel } from "./isekai-ojisan/mabel.mjs";
import { isekaiOjisanSui } from "./isekai-ojisan/sui.mjs";
import { isekaiOjisanSumika } from "./isekai-ojisan/sumika.mjs";
import { kagejitsuAlpha } from "./kagejitsu/alpha.mjs";
import { kagejitsuBeta } from "./kagejitsu/beta.mjs";
import { kaguyaSamaAi } from "./kaguya-sama/ai.mjs";
import { kaguyaSamaChika } from "./kaguya-sama/chika.mjs";
import { kaguyaSamaKaguya } from "./kaguya-sama/kaguya.mjs";
import { konosubaMegumin } from "./konosuba/megumin.mjs";
import { konosubaYunyun } from "./konosuba/yunyun.mjs";
import { lycorisRecoilChisato } from "./lycoris-recoil/chisato.mjs";
import { lycorisRecoilTakina } from "./lycoris-recoil/takina.mjs";
import { mahoakoMatama } from "./mahoako/matama.mjs";
import { mushokuTenseiSylphietteLittleJelly } from "./mushoku-tensei/mushoku-tensei-sylphiette-little-jelly.mjs";
import { newGameAoba } from "./new-game/aoba.mjs";
import { newGameHajime } from "./new-game/hajime.mjs";
import { newGameHifumi } from "./new-game/hifumi.mjs";
import { newGameKou } from "./new-game/kou.mjs";
import { newGameNene } from "./new-game/nene.mjs";
import { newGameRin } from "./new-game/rin.mjs";
import { newGameYun } from "./new-game/yun.mjs";
import { nonNonBiyoriHotaru } from "./non-non-biyori/non-non-biyori-hotaru-notekaga.mjs";
import { prismaIllyaChloeBeastAm7coffeelove } from "./prisma-illya/prisma-illya-chloe-beast-am7coffeelove.mjs";
import { prismaIllyaIllyaBeastAm7coffeelove } from "./prisma-illya/prisma-illya-illya-beast-am7coffeelove.mjs";
import { prismaIllyaMiyuBeastAm7coffeelove } from "./prisma-illya/prisma-illya-miyu-beast-am7coffeelove.mjs";
import { prismaIllyaIllya } from "./prisma-illya/prisma-illya.mjs";
import { pso2Gene } from "./pso2/pso2-gene-overnerd.mjs";
import { reZeroEmilia } from "./re-zero/emilia.mjs";
import { reZeroRam } from "./re-zero/ram.mjs";
import { reZeroRem } from "./re-zero/rem.mjs";
import { rokudenashiRumia } from "./rokudenashi/rokudenashi-rumia.mjs";
import { sasuoniAngelina } from "./sasuoni/sasuoni-angelina.mjs";
import { sasuoniHonoka } from "./sasuoni/sasuoni-honoka.mjs";
import { sasuoniMayumi } from "./sasuoni/sasuoni-mayumi.mjs";
import { sasuoniMiyuki } from "./sasuoni/sasuoni-miyuki.mjs";
import { sasuoniMizuki } from "./sasuoni/sasuoni-mizuki.mjs";
import { sasuoniShizuku } from "./sasuoni/sasuoni-shizuku.mjs";
import { slowLoopHiyori } from "./slow-loop/hiyori.mjs";
import { slowLoopKoharu } from "./slow-loop/koharu.mjs";
import { slowLoopKoi } from "./slow-loop/koi.mjs";
import { spyFamilyYor } from "./spy-family/yor.mjs";
import { tenshiSamaMahiru } from "./tenshi-sama/tenshi-sama-mahiru.mjs";
import { tenshiTsukiNoel } from "./tenshi-tsuki/noel.mjs";
import { toLoveRuHaruna } from "./to-love-ru/to-love-ru-haruna.mjs";
import { toLoveRuLala } from "./to-love-ru/to-love-ru-lala.mjs";
import { toLoveRuMomo } from "./to-love-ru/to-love-ru-momo.mjs";
import { toLoveRuNana } from "./to-love-ru/to-love-ru-nana.mjs";
import { workingPopura } from "./working/working-popura.mjs";

export type EmotionType =
  | `cute`
  | `serious`
  | `tsundere`
  | `emotionless`
  | `mesugaki`;

/**
 * Character define.
 */
export type CharacterDefine = Readonly<{
  /**
   * Lora define.
   */
  lora: LoraEntry | null;
  /**
   * Lora character trigger words define.
   * If the trigger words is duplicate with the character name, it should not be set.
   */
  loraCharacterTriggerWordEntries: NormalEntry<LoraCharacterTriggerWordsTag>[];
  /**
   * Series name.
   */
  seriesNameEntries: NormalEntry<SeriesNameTag>[];
  /**
   * Character name.
   */
  characterNameEntries: NormalEntry<CharacterNameTag>[];
  /**
   * Character feature defines.
   */
  characterFeatureEntries: NormalEntry<CharacterFeatureTag>[];
  /**
   * Breast size define.
   */
  breastSize: BreastSizeTag;
  /**
   * Does she have fang?
   */
  fang: boolean;
  /**
   * Emotion type.
   */
  emotionType: EmotionType;
}>;

// TODO: stomach tattoo. Idea: hook `navel` tag.

export const characterTable = {
  "amaburi-isuzu-h-madoka": amaburiIsuzu(`h_madoka`),
  "amaburi-isuzu-no-lora": amaburiIsuzu(`no-lora`),
  "amaburi-isuzu-nochekaiser": amaburiIsuzu(`nochekaiser`),
  "atelier-ryza-nochekaiser": atelierRyza(`nochekaiser`),
  "blend-s-kaho-ibukimakisiko-double-bun": blendSKaho(
    `ibukimakisiko-double-bun`,
  ),
  "blend-s-kaho-ibukimakisiko": blendSKaho(`ibukimakisiko`),
  "blend-s-mafuyu-ibukimakisiko": blendSMafuyu(`ibukimakisiko`),
  "danmachi-aiz-eternal2kpp": danmachiAiz(`eternal2kpp`),
  "danmachi-eina-eternal2kpp": danmachiEina(`eternal2kpp`),
  "danmachi-haruhime-eternal2kpp": danmachiHaruhime(`eternal2kpp`),
  "danmachi-hestia-eternal2kpp": danmachiHestia(`eternal2kpp`),
  "danmachi-hestia-no-lora": danmachiHestia(`no-lora`),
  "danmachi-lili-eternal2kpp": danmachiLili(`eternal2kpp`),
  "danmachi-ryu-eternal2kpp": danmachiRyu(`eternal2kpp`),
  "eromanga-sensei-elf-eternal2kpp": eromangaSenseiElf(`eternal2kpp`),
  "eromanga-sensei-megumi-eternal2kpp": eromangaSenseiMegumi(`eternal2kpp`),
  "eromanga-sensei-sagiri-eternal2kpp": eromangaSenseiSagiri(`eternal2kpp`),
  "fate-rin-little-jelly": fateRin(`little-jelly`),
  "futoku-no-guild-enome-zedotasco": futokuNoGuildEnome(`zedotasco`),
  "futoku-no-guild-tokishikko-ibukimakisiko":
    futokuNoGuildTokishikko(`ibukimakisiko`),
  "higehiro-sayu-nochekaiser": higehiroSayu(`nochekaiser`),
  "hyouka-eru-chenkin": hyoukaEru(`chenkin`),
  "is-cecilia-nochekaiser": isCecilia(`nochekaiser`),
  "is-charlotte-nochekaiser": isCharlotte(`nochekaiser`),
  "is-chifuyu-nochekaiser": isChifuyu(`nochekaiser`),
  "is-houki-nochekaiser": isHouki(`nochekaiser`),
  "is-laura-nochekaiser": isLaura(`nochekaiser`),
  "is-lingyin-nochekaiser": isLingyin(`nochekaiser`),
  "is-maya-nochekaiser": isMaya(`nochekaiser`),
  "is-tatenashi-nochekaiser": isTatenashi(`nochekaiser`),
  "isekai-ojisan-alicia-nochekaiser": isekaiOjisanAlicia(`nochekaiser`),
  "isekai-ojisan-mabel-nochekaiser": isekaiOjisanMabel(`nochekaiser`),
  "isekai-ojisan-sui-nochekaiser": isekaiOjisanSui(`nochekaiser`),
  "isekai-ojisan-sumika-nochekaiser": isekaiOjisanSumika(`nochekaiser`),
  "kagejitsu-alpha-nochekaiser": kagejitsuAlpha(`nochekaiser`),
  "kagejitsu-beta-nochekaiser": kagejitsuBeta(`nochekaiser`),
  "kaguya-sama-ai-no-lora": kaguyaSamaAi(`no-lora`),
  "kaguya-sama-chika-eternal2kpp": kaguyaSamaChika(`eternal2kpp`),
  "kaguya-sama-chika-no-lora": kaguyaSamaChika(`no-lora`),
  "kaguya-sama-kaguya-eternal2kpp": kaguyaSamaKaguya(`eternal2kpp`),
  "kaguya-sama-kaguya-no-lora": kaguyaSamaKaguya(`no-lora`),
  "konosuba-megumin-no-lora": konosubaMegumin(`no-lora`),
  "konosuba-yunyun-no-lora": konosubaYunyun(`no-lora`),
  "lycoris-recoil-chisato-eft": lycorisRecoilChisato(`eft`),
  "lycoris-recoil-chisato-no-lora": lycorisRecoilChisato(`no-lora`),
  "lycoris-recoil-chisato-nochekaiser": lycorisRecoilChisato(`nochekaiser`),
  "lycoris-recoil-takina-eft": lycorisRecoilTakina(`eft`),
  "lycoris-recoil-takina-nochekaiser": lycorisRecoilTakina(`nochekaiser`),
  "lycoris-recoil-takina-nochekaiser-booru":
    lycorisRecoilTakina(`nochekaiser-booru`),
  "mahoako-matama-notekaga": mahoakoMatama(`notekaga`),
  "mushoku-tensei-sylphiette-little-jelly":
    mushokuTenseiSylphietteLittleJelly(),
  "new-game-aoba-eternal2kpp": newGameAoba(`eternal2kpp`),
  "new-game-aoba-nochekaiser": newGameAoba(`nochekaiser`),
  "new-game-hajime-eternal2kpp": newGameHajime(`eternal2kpp`),
  "new-game-hifumi-eternal2kpp": newGameHifumi(`eternal2kpp`),
  "new-game-hifumi-nochekaiser": newGameHifumi(`nochekaiser`),
  "new-game-kou-eternal2kpp": newGameKou(`eternal2kpp`),
  "new-game-nene-eternal2kpp": newGameNene(`eternal2kpp`),
  "new-game-rin-eternal2kpp": newGameRin(`eternal2kpp`),
  "new-game-yun-eternal2kpp": newGameYun(`eternal2kpp`),
  "non-non-biyori-hotaru-notekaga": nonNonBiyoriHotaru(`notekaga`),
  "prisma-illya-chloe-beast-am7coffeelove":
    prismaIllyaChloeBeastAm7coffeelove(),
  "prisma-illya-illya-beast-am7coffeelove":
    prismaIllyaIllyaBeastAm7coffeelove(),
  "prisma-illya-illya-flujoru": prismaIllyaIllya(`flujoru`),
  "prisma-illya-miyu-beast-am7coffeelove": prismaIllyaMiyuBeastAm7coffeelove(),
  "pso2-gene-overnerd": pso2Gene(`overnerd`),
  "re-zero-emilia-eternal2kpp": reZeroEmilia(`eternal2kpp`),
  "re-zero-emilia-no-lora": reZeroEmilia(`no-lora`),
  "re-zero-ram-eternal2kpp": reZeroRam(`eternal2kpp`),
  "re-zero-ram-no-lora": reZeroRam(`no-lora`),
  "re-zero-rem-eternal2kpp": reZeroRem(`eternal2kpp`),
  "re-zero-rem-no-lora": reZeroRem(`no-lora`),
  "rokudenashi-rumia-little-jelly": rokudenashiRumia(`little-jelly`),
  "sasuoni-angelina-nochekaiser": sasuoniAngelina(`nochekaiser`),
  "sasuoni-honoka-nochekaiser": sasuoniHonoka(`nochekaiser`),
  "sasuoni-mayumi-nochekaiser": sasuoniMayumi(`nochekaiser`),
  "sasuoni-miyuki-nochekaiser": sasuoniMiyuki(`nochekaiser`),
  "sasuoni-mizuki-nochekaiser": sasuoniMizuki(`nochekaiser`),
  "sasuoni-shizuku-nochekaiser": sasuoniShizuku(`nochekaiser`),
  "slow-loop-hiyori-ibukimakisiko": slowLoopHiyori(`ibukimakisiko`),
  "slow-loop-koharu-ibukimakisiko": slowLoopKoharu(`ibukimakisiko`),
  "slow-loop-koi-ibukimakisiko": slowLoopKoi(`ibukimakisiko`),
  "spy-family-yor-eternal2kpp-thorn-princess": spyFamilyYor(
    `eternal2kpp-thorn-princess`,
  ),
  "spy-family-yor-eternal2kpp": spyFamilyYor(`eternal2kpp`),
  "tenshi-sama-mahiru-jibunsagasinotabi": tenshiSamaMahiru(`jibunsagasinotabi`),
  "tenshi-tsuki-noel-zedotasco": tenshiTsukiNoel(`zedotasco`),
  "to-love-ru-haruna-nochekaiser": toLoveRuHaruna(`nochekaiser`),
  "to-love-ru-lala-nochekaiser": toLoveRuLala(`nochekaiser`),
  "to-love-ru-momo-lancelot": toLoveRuMomo(`lancelot`),
  "to-love-ru-momo-nochekaiser": toLoveRuMomo(`nochekaiser`),
  "to-love-ru-nana-lancelot": toLoveRuNana(`lancelot`),
  "to-love-ru-nana-nochekaiser": toLoveRuNana(`nochekaiser`),
  "working-popura-ibukimakisiko": workingPopura(`ibukimakisiko`),
} as const satisfies Record<string, CharacterDefine>;

export type CharacterKey = keyof typeof characterTable;

// TODO: Show character and Lora URL lists.
