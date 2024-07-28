export { BreastSizeOrder } from "@tenpamk2/sd-tag-defines";
import type {
  BreastSizeTag,
  CharacterNameTag,
  SeriesNameTag,
} from "@tenpamk2/sd-tag-defines";
import type { LoraEntry, TagEntry } from "../../entry.mjs";
import type { CharacterFeatureTag } from "../../tag-defines/adapter.mjs";
import type { EmotionType } from "../emotions/emotions.mjs";
import type { LoraCharacterTriggerWordsTag } from "../lora.mjs";
import { amaburiIsuzu } from "./amaburi/isuzu.mjs";
import { atelierRyza } from "./atelier/ryza.mjs";
import { blendSKaho } from "./blend-s/kaho.mjs";
import { blendSMafuyu } from "./blend-s/mafuyu.mjs";
import { blendSMaika } from "./blend-s/maika.mjs";
import { blueArchiveArona } from "./blue-archive/arona.mjs";
import { blueArchiveYuuka } from "./blue-archive/yuuka.mjs";
import { boufuriMaple } from "./boufuri/maple.mjs";
import { boufuriSally } from "./boufuri/sally.mjs";
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
import { goblinSlayerCowGirl } from "./goblin-slayer/cow-girl.mjs";
import { goblinSlayerPriestess } from "./goblin-slayer/priestess.mjs";
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
import { kaguyaSamaMiko } from "./kaguya-sama/miko.mjs";
import { konosubaMegumin } from "./konosuba/megumin.mjs";
import { konosubaYunyun } from "./konosuba/yunyun.mjs";
import { lycorisRecoilChisato } from "./lycoris-recoil/chisato.mjs";
import { lycorisRecoilTakina } from "./lycoris-recoil/takina.mjs";
import { machikadoMazokuShamiko } from "./machikado-mazoku/shamiko.mjs";
import { mahoakoMatama } from "./mahoako/matama.mjs";
import { majoNoTabitabiElaina } from "./majo-no-tabitabi/elaina.mjs";
import { mushokuTenseiAisha } from "./mushoku-tensei/aisha.mjs";
import { mushokuTenseiNorn } from "./mushoku-tensei/norn.mjs";
import { mushokuTenseiRoxy } from "./mushoku-tensei/roxy.mjs";
import { mushokuTenseiSylphiette } from "./mushoku-tensei/sylphiette.mjs";
import { newGameAoba } from "./new-game/aoba.mjs";
import { newGameHajime } from "./new-game/hajime.mjs";
import { newGameHifumi } from "./new-game/hifumi.mjs";
import { newGameKou } from "./new-game/kou.mjs";
import { newGameNene } from "./new-game/nene.mjs";
import { newGameRin } from "./new-game/rin.mjs";
import { newGameYun } from "./new-game/yun.mjs";
import { nonNonBiyoriHotaru } from "./non-non-biyori/hotaru.mjs";
import { ochifuruHayu } from "./ochifuru/hayu.mjs";
import { ochifuruHemo } from "./ochifuru/hemo.mjs";
import { ochifuruIno } from "./ochifuru/ino.mjs";
import { ochifuruNina } from "./ochifuru/nina.mjs";
import { ochifuruRoko } from "./ochifuru/roko.mjs";
import { ochifuruTone } from "./ochifuru/tone.mjs";
import { prismaIllyaChloe } from "./prisma-illya/chloe.mjs";
import { prismaIllyaIllya } from "./prisma-illya/illya.mjs";
import { prismaIllyaMiyu } from "./prisma-illya/miyu.mjs";
import { pso2Gene } from "./pso2/gene.mjs";
import { reZeroEmilia } from "./re-zero/emilia.mjs";
import { reZeroRam } from "./re-zero/ram.mjs";
import { reZeroRem } from "./re-zero/rem.mjs";
import { rokudenashiRumia } from "./rokudenashi/rumia.mjs";
import { ryuuouHinatsuruAi } from "./ryuuou/hinatsuru-ai.mjs";
import { ryuuouYashajinAi } from "./ryuuou/yashajin-ai.mjs";
import { sasuoniAngelina } from "./sasuoni/angelina.mjs";
import { sasuoniHonoka } from "./sasuoni/honoka.mjs";
import { sasuoniMayumi } from "./sasuoni/mayumi.mjs";
import { sasuoniMiyuki } from "./sasuoni/miyuki.mjs";
import { sasuoniMizuki } from "./sasuoni/mizuki.mjs";
import { sasuoniShizuku } from "./sasuoni/shizuku.mjs";
import { seireiCelia } from "./seirei/celia.mjs";
import { slowLoopHiyori } from "./slow-loop/hiyori.mjs";
import { slowLoopKoharu } from "./slow-loop/koharu.mjs";
import { slowLoopKoi } from "./slow-loop/koi.mjs";
import { spyFamilyYor } from "./spy-family/yor.mjs";
import { strikeWitchesYoshika } from "./strike-witches/yoshika.mjs";
import { tenshiSamaMahiru } from "./tenshi-sama/mahiru.mjs";
import { tenshiTsukiNoel } from "./tenshi-tsuki/noel.mjs";
import { tenshiTsukiTowa } from "./tenshi-tsuki/towa.mjs";
import { tenshiTsukiTsumugi } from "./tenshi-tsuki/tsumugi.mjs";
import { toLoveRuHaruna } from "./to-love-ru/haruna.mjs";
import { toLoveRuLala } from "./to-love-ru/lala.mjs";
import { toLoveRuMomo } from "./to-love-ru/momo.mjs";
import { toLoveRuNana } from "./to-love-ru/nana.mjs";
import { toLoveRuTearju } from "./to-love-ru/tearju.mjs";
import { toLoveRuYami } from "./to-love-ru/yami.mjs";
import { toLoveRuYui } from "./to-love-ru/yui.mjs";
import { workingPopura } from "./working/popura.mjs";

export type CharacterDefine = Readonly<{
  /**
   * Lora define.
   */
  lora: LoraEntry | null;
  /**
   * Lora character trigger words define.
   * If the trigger words is duplicate with the character name, it should not be set.
   */
  loraCharacterTriggerWordEntries: TagEntry<LoraCharacterTriggerWordsTag>[];
  /**
   * Series name.
   */
  seriesNameEntries: TagEntry<SeriesNameTag>[];
  /**
   * Character name.
   */
  characterNameEntries: TagEntry<CharacterNameTag>[];
  /**
   * Character feature defines.
   */
  characterFeatureEntries: TagEntry<CharacterFeatureTag>[];
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

export const characterTable = {
  "amaburi-isuzu-h-madoka": amaburiIsuzu(`h-madoka`),
  "amaburi-isuzu-no-lora": amaburiIsuzu(`no-lora`),
  "amaburi-isuzu-nochekaiser": amaburiIsuzu(`nochekaiser`),
  "atelier-ryza-nochekaiser": atelierRyza(`nochekaiser`),
  "blend-s-kaho-ibukimakisiko-double-bun": blendSKaho(
    `ibukimakisiko-double-bun`,
  ),
  "blend-s-kaho-ibukimakisiko": blendSKaho(`ibukimakisiko`),
  "blend-s-mafuyu-ibukimakisiko": blendSMafuyu(`ibukimakisiko`),
  "blend-s-maika-shadowxart": blendSMaika(`shadowxart`),
  "blue-archive-arona-ibukimakisiko": blueArchiveArona(`ibukimakisiko`),
  "blue-archive-yuuka-gym-ibukimakisiko": blueArchiveYuuka(`gym-ibukimakisiko`),
  "blue-archive-yuuka-ibukimakisiko": blueArchiveYuuka(`ibukimakisiko`),
  "boufuri-maple-ibukimakisiko": boufuriMaple(`ibukimakisiko`),
  "boufuri-sally-ibukimakisiko": boufuriSally(`ibukimakisiko`),
  "boufuri-sally-king-dong": boufuriSally(`king-dong`),
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
  "goblin-slayer-cow-girl-eternal2kpp": goblinSlayerCowGirl(`eternal2kpp`),
  "goblin-slayer-priestess-eternal2kpp": goblinSlayerPriestess(`eternal2kpp`),
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
  "kagejitsu-alpha-novowels": kagejitsuAlpha(`novowels`),
  "kagejitsu-beta-nochekaiser": kagejitsuBeta(`nochekaiser`),
  "kagejitsu-beta-novowels": kagejitsuBeta(`novowels`),
  "kaguya-sama-ai-no-lora": kaguyaSamaAi(`no-lora`),
  "kaguya-sama-ai-nochekaiser": kaguyaSamaAi(`nochekaiser`),
  "kaguya-sama-chika-eternal2kpp": kaguyaSamaChika(`eternal2kpp`),
  "kaguya-sama-chika-no-lora": kaguyaSamaChika(`no-lora`),
  "kaguya-sama-kaguya-eternal2kpp": kaguyaSamaKaguya(`eternal2kpp`),
  "kaguya-sama-kaguya-no-lora": kaguyaSamaKaguya(`no-lora`),
  "kaguya-sama-miko-no-lora": kaguyaSamaMiko(`no-lora`),
  "kaguya-sama-miko-nochekaiser": kaguyaSamaMiko(`nochekaiser`),
  "konosuba-megumin-no-lora": konosubaMegumin(`no-lora`),
  "konosuba-yunyun-no-lora": konosubaYunyun(`no-lora`),
  "lycoris-recoil-chisato-no-lora": lycorisRecoilChisato(`no-lora`),
  "lycoris-recoil-chisato-nochekaiser": lycorisRecoilChisato(`nochekaiser`),
  "lycoris-recoil-takina-nochekaiser-booru":
    lycorisRecoilTakina(`nochekaiser-booru`),
  "lycoris-recoil-takina-nochekaiser": lycorisRecoilTakina(`nochekaiser`),
  "machikado-mazoku-shamiko-ibukimakisiko":
    machikadoMazokuShamiko(`ibukimakisiko`),
  "machikado-mazoku-shamiko-ponytail-ibukimakisiko": machikadoMazokuShamiko(
    `ponytail-ibukimakisiko`,
  ),
  "mahoako-matama-notekaga": mahoakoMatama(`notekaga`),
  "majo-no-tabitabi-elaina-ibukimakisiko":
    majoNoTabitabiElaina(`ibukimakisiko`),
  "majo-no-tabitabi-elaina-no-ahoge-ibukimakisiko": majoNoTabitabiElaina(
    `no-ahoge-ibukimakisiko`,
  ),
  "mushoku-tensei-aisha-ibukimakisiko": mushokuTenseiAisha(`ibukimakisiko`),
  "mushoku-tensei-norn-ibukimakisiko": mushokuTenseiNorn(`ibukimakisiko`),
  "mushoku-tensei-sylphiette-little-jelly":
    mushokuTenseiSylphiette(`little-jelly`),
  "mushoku-tensei-roxy-adventurer-ibukimakisiko": mushokuTenseiRoxy(
    `adventurer-ibukimakisiko`,
  ),
  "mushoku-tensei-roxy-adventurer-no-ahoge-ibukimakisiko": mushokuTenseiRoxy(
    `adventurer-no-ahoge-ibukimakisiko`,
  ),
  "mushoku-tensei-roxy-hair-down-ibukimakisiko": mushokuTenseiRoxy(
    `hair-down-ibukimakisiko`,
  ),
  "mushoku-tensei-roxy-ibukimakisiko": mushokuTenseiRoxy(`ibukimakisiko`),
  "mushoku-tensei-roxy-no-ahoge-ibukimakisiko": mushokuTenseiRoxy(
    `no-ahoge-ibukimakisiko`,
  ),
  "mushoku-tensei-roxy-pajamas-ibukimakisiko": mushokuTenseiRoxy(
    `pajamas-ibukimakisiko`,
  ),
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
  "ochifuru-hayu-enter": ochifuruHayu(`enter`),
  "ochifuru-hayu-idol-ribbon-enter": ochifuruHayu(`idol-ribbon-enter`),
  "ochifuru-hemo-enter": ochifuruHemo(`enter`),
  "ochifuru-hemo-idol-ribbon-enter": ochifuruHemo(`idol-ribbon-enter`),
  "ochifuru-ino-enter": ochifuruIno(`enter`),
  "ochifuru-ino-idol-ribbon-enter": ochifuruIno(`idol-ribbon-enter`),
  "ochifuru-nina-enter": ochifuruNina(`enter`),
  "ochifuru-nina-idol-ribbon-enter": ochifuruNina(`idol-ribbon-enter`),
  "ochifuru-roko-enter": ochifuruRoko(`enter`),
  "ochifuru-roko-idol-ribbon-enter": ochifuruRoko(`idol-ribbon-enter`),
  "ochifuru-tone-enter": ochifuruTone(`enter`),
  "prisma-illya-chloe-beast-am7coffeelove":
    prismaIllyaChloe(`beast-am7coffeelove`),
  "prisma-illya-illya-beast-am7coffeelove":
    prismaIllyaIllya(`beast-am7coffeelove`),
  "prisma-illya-illya-flujoru": prismaIllyaIllya(`flujoru`),
  "prisma-illya-miyu-beast-am7coffeelove":
    prismaIllyaMiyu(`beast-am7coffeelove`),
  "pso2-gene-bikini-overnerd": pso2Gene(`bikini-overnerd`),
  "re-zero-emilia-eternal2kpp": reZeroEmilia(`eternal2kpp`),
  "re-zero-emilia-no-lora": reZeroEmilia(`no-lora`),
  "re-zero-ram-eternal2kpp": reZeroRam(`eternal2kpp`),
  "re-zero-ram-no-lora": reZeroRam(`no-lora`),
  "re-zero-rem-eternal2kpp": reZeroRem(`eternal2kpp`),
  "re-zero-rem-no-lora": reZeroRem(`no-lora`),
  "rokudenashi-rumia-little-jelly": rokudenashiRumia(`little-jelly`),
  "ryuuou-hinatsuru-ai-ibukimakisiko": ryuuouHinatsuruAi(`ibukimakisiko`),
  "ryuuou-yashajin-ai-ibukimakisiko": ryuuouYashajinAi(`ibukimakisiko`),
  "sasuoni-angelina-nochekaiser": sasuoniAngelina(`nochekaiser`),
  "sasuoni-honoka-nochekaiser": sasuoniHonoka(`nochekaiser`),
  "sasuoni-mayumi-nochekaiser": sasuoniMayumi(`nochekaiser`),
  "sasuoni-miyuki-nochekaiser": sasuoniMiyuki(`nochekaiser`),
  "sasuoni-mizuki-nochekaiser": sasuoniMizuki(`nochekaiser`),
  "sasuoni-shizuku-nochekaiser": sasuoniShizuku(`nochekaiser`),
  "seirei-celia-ibukimakisiko": seireiCelia(`ibukimakisiko`),
  "slow-loop-hiyori-ibukimakisiko": slowLoopHiyori(`ibukimakisiko`),
  "slow-loop-koharu-ibukimakisiko": slowLoopKoharu(`ibukimakisiko`),
  "slow-loop-koi-ibukimakisiko": slowLoopKoi(`ibukimakisiko`),
  "spy-family-yor-eternal2kpp-thorn-princess": spyFamilyYor(
    `eternal2kpp-thorn-princess`,
  ),
  "spy-family-yor-eternal2kpp": spyFamilyYor(`eternal2kpp`),
  "strike-witches-yoshika-gwess": strikeWitchesYoshika(`gwess`),
  "strike-witches-yoshika-witch-gwess": strikeWitchesYoshika(`witch-gwess`),
  "tenshi-sama-mahiru-jibunsagasinotabi": tenshiSamaMahiru(`jibunsagasinotabi`),
  "tenshi-tsuki-noel-duongve": tenshiTsukiNoel(`duongve`),
  "tenshi-tsuki-noel-eternal2kpp": tenshiTsukiNoel(`eternal2kpp`),
  "tenshi-tsuki-noel-zedotasco": tenshiTsukiNoel(`zedotasco`),
  "tenshi-tsuki-towa-eternal2kpp": tenshiTsukiTowa(`eternal2kpp`),
  "tenshi-tsuki-tsumugi-duongve": tenshiTsukiTsumugi(`duongve`),
  "tenshi-tsuki-tsumugi-eternal2kpp": tenshiTsukiTsumugi(`eternal2kpp`),
  "to-love-ru-haruna-nochekaiser": toLoveRuHaruna(`nochekaiser`),
  "to-love-ru-lala-nochekaiser": toLoveRuLala(`nochekaiser`),
  "to-love-ru-momo-lancelot": toLoveRuMomo(`lancelot`),
  "to-love-ru-momo-nochekaiser": toLoveRuMomo(`nochekaiser`),
  "to-love-ru-nana-lancelot": toLoveRuNana(`lancelot`),
  "to-love-ru-nana-nochekaiser": toLoveRuNana(`nochekaiser`),
  "to-love-ru-tearju-low-tied-long-hair-nochekaiser": toLoveRuTearju(
    `low-tied-long-hair-nochekaiser`,
  ),
  "to-love-ru-tearju-nochekaiser": toLoveRuTearju(`nochekaiser`),
  "to-love-ru-yami-nochekaiser": toLoveRuYami(`nochekaiser`),
  "to-love-ru-yui-nochekaiser": toLoveRuYui(`nochekaiser`),
  "working-popura-ibukimakisiko": workingPopura(`ibukimakisiko`),
} as const satisfies Record<string, CharacterDefine>;

export type CharacterTable = typeof characterTable;
export type CharacterKey = keyof CharacterTable;

// TODO: stomach tattoo. Idea: hook `navel` tag.
// TODO: Show character and Lora URL lists.
