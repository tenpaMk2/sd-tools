import {
  BreastSizeTag,
  CharacterNameTag,
  SeriesNameTag,
} from "@tenpamk2/sd-tag-defines";
import { LoraEntry, NormalEntry } from "../prompt-define.mjs";
import { CharacterFeatureTag } from "../tag-defines/adapter.mjs";
import { LoraCharacterTriggerWordsTag } from "../tag-defines/lora.mjs";
import { amaburiIsuzu } from "./amaburi/amaburi-isuzu.mjs";
import { blendSKaho } from "./blend-s/blend-s-kaho.mjs";
import { blendSMafuyu } from "./blend-s/blend-s-mafuyu.mjs";
import { danmachiAiz } from "./danmachi/aiz.mjs";
import { danmachiEina } from "./danmachi/eina.mjs";
import { danmachiHaruhime } from "./danmachi/haruhime.mjs";
import { danmachiHestia } from "./danmachi/hestia.mjs";
import { danmachiLili } from "./danmachi/lili.mjs";
import { danmachiRyu } from "./danmachi/ryu.mjs";
import { eromangaSenseiElf } from "./eromanga-sensei/elf.mjs";
import { eromangaSenseiMegumi } from "./eromanga-sensei/megumi.mjs";
import { eromangaSenseiSagiri } from "./eromanga-sensei/sagiri.mjs";
import { fateRinLittleJelly } from "./fate/fate-rin-little-jelly.mjs";
import { futokuNoGuildTokishikko } from "./futoku-no-guild/tokishikko.mjs";
import { higehiroSayu } from "./higehiro/sayu.mjs";
import { isCeciliaNochekaiser } from "./is/is-cecilia-nochekaiser.mjs";
import { isCharlotteNochekaiser } from "./is/is-charlotte-nochekaiser.mjs";
import { isChifuyuNochekaiser } from "./is/is-chifuyu-nochekaiser.mjs";
import { isHoukiNochekaiser } from "./is/is-houki-nochekaiser.mjs";
import { isLauraNochekaiser } from "./is/is-laura-nochekaiser.mjs";
import { isLingyinNochekaiser } from "./is/is-lingyin-nochekaiser.mjs";
import { isMayaNochekaiser } from "./is/is-maya-nochekaiser.mjs";
import { isTatenashiNochekaiser } from "./is/is-tatenashi-nochekaiser.mjs";
import { isekaiOjisanAliciaNochekaiser } from "./isekai-ojisan/isekai-ojisan-alicia-nochekaiser.mjs";
import { isekaiOjisanMabelNochekaiser } from "./isekai-ojisan/isekai-ojisan-mabel-nochekaiser.mjs";
import { isekaiOjisanSuiNochekaiser } from "./isekai-ojisan/isekai-ojisan-sui-nochekaiser.mjs";
import { isekaiOjisanSumikaNochekaiser } from "./isekai-ojisan/isekai-ojisan-sumika-nochekaiser.mjs";
import { kagejitsuAlphaNochekaiser } from "./kagejitsu/kagejitsu-alpha-nochekaiser.mjs";
import { kagejitsuBetaNochekaiser } from "./kagejitsu/kagejitsu-beta-nochekaiser.mjs";
import { kaguyaSamaAi } from "./kaguya-sama/kaguya-sama-ai.mjs";
import { kaguyaSamaChika } from "./kaguya-sama/kaguya-sama-chika.mjs";
import { kaguyaSamaKaguya } from "./kaguya-sama/kaguya-sama-kaguya.mjs";
import { konosubaMegumin } from "./konosuba/konosuba-megumin.mjs";
import { konosubaYunyun } from "./konosuba/konosuba-yunyun.mjs";
import { lycorisRecoilChisato } from "./lycoris-recoil/lycoris-recoil-chisato.mjs";
import { lycorisRecoilTakina } from "./lycoris-recoil/lycoris-recoil-takina.mjs";
import { mahoakoMatamaNotekaga } from "./mahoako/mahoako-matama-notekaga.mjs";
import { mushokuTenseiSylphietteLittleJelly } from "./mushoku-tensei/mushoku-tensei-sylphiette-little-jelly.mjs";
import { newGameAoba } from "./new-game/aoba.mjs";
import { newGameHajime } from "./new-game/hajime.mjs";
import { newGameHifumi } from "./new-game/hifumi.mjs";
import { newGameKou } from "./new-game/kou.mjs";
import { newGameNene } from "./new-game/nene.mjs";
import { newGameRin } from "./new-game/rin.mjs";
import { newGameYun } from "./new-game/yun.mjs";
import { nonNonBiyoriHotaruNotekaga } from "./non-non-biyori/non-non-biyori-hotaru-notekaga.mjs";
import { prismaIllyaChloeBeastAm7coffeelove } from "./prisma-illya/prisma-illya-chloe-beast-am7coffeelove.mjs";
import { prismaIllyaIllyaBeastAm7coffeelove } from "./prisma-illya/prisma-illya-illya-beast-am7coffeelove.mjs";
import { prismaIllyaMiyuBeastAm7coffeelove } from "./prisma-illya/prisma-illya-miyu-beast-am7coffeelove.mjs";
import { prismaIllyaIllya } from "./prisma-illya/prisma-illya.mjs";
import { pso2GeneOvernerd } from "./pso2/pso2-gene-overnerd.mjs";
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
import { toLoveRuHarunaEft } from "./to-love-ru/to-love-ru-haruna-eft.mjs";
import { toLoveRuLalaEft } from "./to-love-ru/to-love-ru-lala-eft.mjs";
import { toLoveRuMeaEft } from "./to-love-ru/to-love-ru-mea-eft.mjs";
import { toLoveRuMomoEft } from "./to-love-ru/to-love-ru-momo-eft.mjs";
import { toLoveRuMomoLancelot } from "./to-love-ru/to-love-ru-momo-lancelot.mjs";
import { toLoveRuNanaEft } from "./to-love-ru/to-love-ru-nana-eft.mjs";
import { toLoveRuNana } from "./to-love-ru/to-love-ru-nana.mjs";
import { toLoveRuYamiEft } from "./to-love-ru/to-love-ru-yami-eft.mjs";
import { toLoveRuYuiEft } from "./to-love-ru/to-love-ru-yui-eft.mjs";
import { workingPopura } from "./working/working-popura.mjs";

// TODO: Remove SD1.5 Lora characters.

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
  "amaburi-isuzu-nochekaiser": amaburiIsuzu(`nochekaiser`),
  "amaburi-isuzu": amaburiIsuzu(`no-lora`),
  "blend-s-kaho-ibukimakisiko-double-bun": blendSKaho(
    `ibukimakisiko-double-bun`,
  ),
  "blend-s-kaho-ibukimakisiko": blendSKaho(`ibukimakisiko`),
  "blend-s-mafuyu-ibukimakisiko": blendSMafuyu(`ibukimakisiko`),
  "danmachi-aiz-eternal2kpp": danmachiAiz(`eternal2kpp`),
  "danmachi-eina-eternal2kpp": danmachiEina(`eternal2kpp`),
  "danmachi-haruhime-eternal2kpp": danmachiHaruhime(`eternal2kpp`),
  "danmachi-hestia-eternal2kpp": danmachiHestia(`eternal2kpp`),
  "danmachi-hestia": danmachiHestia(`no-lora`),
  "danmachi-lili-eternal2kpp": danmachiLili(`eternal2kpp`),
  "danmachi-ryu-eternal2kpp": danmachiRyu(`eternal2kpp`),
  "eromanga-sensei-elf-eternal2kpp": eromangaSenseiElf(`eternal2kpp`),
  "eromanga-sensei-megumi-eternal2kpp": eromangaSenseiMegumi(`eternal2kpp`),
  "eromanga-sensei-sagiri-eternal2kpp": eromangaSenseiSagiri(`eternal2kpp`),
  "fate-rin-little-jelly": fateRinLittleJelly(),
  "futoku-no-guild-tokishikko": futokuNoGuildTokishikko(`ibukimakisiko`),
  "higehiro-sayu": higehiroSayu(`nochekaiser`),
  "is-cecilia-nochekaiser": isCeciliaNochekaiser(),
  "is-charlotte-nochekaiser": isCharlotteNochekaiser(),
  "is-chifuyu-nochekaiser": isChifuyuNochekaiser(),
  "is-houki-nochekaiser": isHoukiNochekaiser(),
  "is-laura-nochekaiser": isLauraNochekaiser(),
  "is-lingyin-nochekaiser": isLingyinNochekaiser(),
  "is-maya-nochekaiser": isMayaNochekaiser(),
  "is-tatenashi-nochekaiser": isTatenashiNochekaiser(),
  "isekai-ojisan-alicia-nochekaiser": isekaiOjisanAliciaNochekaiser(),
  "isekai-ojisan-mabel-nochekaiser": isekaiOjisanMabelNochekaiser(),
  "isekai-ojisan-sui-nochekaiser": isekaiOjisanSuiNochekaiser(),
  "isekai-ojisan-sumika-nochekaiser": isekaiOjisanSumikaNochekaiser(),
  "kagejitsu-alpha-nochekaiser": kagejitsuAlphaNochekaiser(),
  "kagejitsu-beta-nochekaiser": kagejitsuBetaNochekaiser(),
  "kaguya-sama-ai": kaguyaSamaAi(),
  "kaguya-sama-chika-eternal2kpp": kaguyaSamaChika(`eternal2kpp`),
  "kaguya-sama-chika-no-lora": kaguyaSamaChika(`no-lora`),
  "kaguya-sama-kaguya-eternal2kpp": kaguyaSamaKaguya(`eternal2kpp`),
  "kaguya-sama-kaguya-no-lora": kaguyaSamaKaguya(`no-lora`),
  "konosuba-megumin": konosubaMegumin(),
  "konosuba-yunyun": konosubaYunyun(),
  "lycoris-recoil-chisato-eft": lycorisRecoilChisato(`eft`),
  "lycoris-recoil-chisato-nochekaiser": lycorisRecoilChisato(`nochekaiser`),
  "lycoris-recoil-chisato": lycorisRecoilChisato(`no-lora`),
  "lycoris-recoil-takina-eft": lycorisRecoilTakina(`eft`),
  "lycoris-recoil-takina-nochekaiser": lycorisRecoilTakina(`nochekaiser`),
  "mahoako-matama-notekaga": mahoakoMatamaNotekaga(),
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
  "non-non-biyori-hotaru-notekaga": nonNonBiyoriHotaruNotekaga(),
  "prisma-illya-chloe-beast-am7coffeelove":
    prismaIllyaChloeBeastAm7coffeelove(),
  "prisma-illya-illya-beast-am7coffeelove":
    prismaIllyaIllyaBeastAm7coffeelove(),
  "prisma-illya-illya": prismaIllyaIllya(`flujoru`),
  "prisma-illya-miyu-beast-am7coffeelove": prismaIllyaMiyuBeastAm7coffeelove(),
  "pso2-gene-overnerd": pso2GeneOvernerd(),
  "re-zero-emilia-eternal2kpp": reZeroEmilia(`eternal2kpp`),
  "re-zero-emilia": reZeroEmilia(`no-lora`),
  "re-zero-ram-eternal2kpp": reZeroRam(`eternal2kpp`),
  "re-zero-ram": reZeroRam(`no-lora`),
  "re-zero-rem-eternal2kpp": reZeroRem(`eternal2kpp`),
  "re-zero-rem": reZeroRem(`no-lora`),
  "rokudenashi-rumia": rokudenashiRumia(`little-jelly`),
  "sasuoni-shiba-angelina-nochekaiser": sasuoniAngelina(`nochekaiser`), // TODO: typo
  "sasuoni-shiba-honoka-nochekaiser": sasuoniHonoka(`nochekaiser`),
  "sasuoni-shiba-mayumi-nochekaiser": sasuoniMayumi(`nochekaiser`),
  "sasuoni-shiba-miyuki-nochekaiser": sasuoniMiyuki(`nochekaiser`),
  "sasuoni-shiba-mizuki-nochekaiser": sasuoniMizuki(`nochekaiser`),
  "sasuoni-shiba-shizuku-nochekaiser": sasuoniShizuku(`nochekaiser`),
  "slow-loop-hiyori-ibukimakisiko": slowLoopHiyori(`ibukimakisiko`),
  "slow-loop-koharu-ibukimakisiko": slowLoopKoharu(`ibukimakisiko`),
  "slow-loop-koi-ibukimakisiko": slowLoopKoi(`ibukimakisiko`),
  "spy-family-yor-thorn-princess": spyFamilyYor(`eternal2kpp-thorn-princess`),
  "spy-family-yor": spyFamilyYor(`eternal2kpp`),
  "tenshi-sama-mahiru": tenshiSamaMahiru(`jibunsagasinotabi`),
  "tenshi-tsuki-noel": tenshiTsukiNoel(`zedotasco`),
  "to-love-ru-haruna-eft": toLoveRuHarunaEft(),
  "to-love-ru-lala-eft": toLoveRuLalaEft(),
  "to-love-ru-mea-eft": toLoveRuMeaEft(),
  "to-love-ru-momo-eft": toLoveRuMomoEft(),
  "to-love-ru-momo-lancelot": toLoveRuMomoLancelot(),
  "to-love-ru-nana-eft": toLoveRuNanaEft(),
  "to-love-ru-nana-lancelot": toLoveRuNana(`lancelot`),
  "to-love-ru-yami-eft": toLoveRuYamiEft(),
  "to-love-ru-yui-eft": toLoveRuYuiEft(),
  "working-popura": workingPopura(`ibukimakisiko`),
} as const satisfies Record<string, CharacterDefine>;

export type CharacterKey = keyof typeof characterTable;

// TODO: Naming rule.
//  - `no-lora` is for the character that has no lora.
//  - `creater-name` is for the character that has the lora by the creater.

// TODO: Show character and Lora URL lists.
