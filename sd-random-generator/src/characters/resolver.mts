import {
  BreastSizeTag,
  CharacterFeatureTag,
  CharacterNameTag,
  EmotionTag,
  SeriesNameTag,
} from "@tenpamk2/sd-tag-defines";
import { LoraEntry, NormalEntry } from "../prompt-define.mjs";
import { LoraCharacterTriggerWordsTag } from "../tag-defines/lora.mjs";
import { amaburiIsuzuLittleJelly } from "./amaburi/amaburi-isuzu-little-jelly.mjs";
import { amaburiIsuzu } from "./amaburi/amaburi-isuzu.mjs";
import { danmachiAizEft } from "./danmachi/danmachi-aiz-eft.mjs";
import { danmachiEinaEft } from "./danmachi/danmachi-eina-eft.mjs";
import { danmachiHaruhimeEft } from "./danmachi/danmachi-haruhime-eft.mjs";
import { danmachiHestiaEft } from "./danmachi/danmachi-hestia-eft.mjs";
import { danmachiHestiaNochekaiser } from "./danmachi/danmachi-hestia-nochekaiser.mjs";
import { danmachiLiliEft } from "./danmachi/danmachi-lili-eft.mjs";
import { danmachiRyuEft } from "./danmachi/danmachi-ryu-eft.mjs";
import { dumbbellAkemiWiz } from "./dumbbell/dumbbell-akemi-wiz.mjs";
import { dumbbellAyakaWiz } from "./dumbbell/dumbbell-ayaka-wiz.mjs";
import { dumbbellGinaWiz } from "./dumbbell/dumbbell-gina-wiz.mjs";
import { dumbbellHibikiWiz } from "./dumbbell/dumbbell-hibiki-wiz.mjs";
import { dumbbellSatomiWiz } from "./dumbbell/dumbbell-satomi-wiz.mjs";
import { isCeciliaOgTurles } from "./is/is-cecilia-og-turles.mjs";
import { kagejitsuAlphaNochekaiser } from "./kagejitsu/kagejitsu-alpha-nochekaiser.mjs";
import { kagejitsuBetaNochekaiser } from "./kagejitsu/kagejitsu-beta-nochekaiser.mjs";
import { kaguyaSamaAiNochekaiser } from "./kaguya-sama/kaguya-sama-ai-nochekaiser.mjs";
import { kaguyaSamaAi } from "./kaguya-sama/kaguya-sama-ai.mjs";
import { kaguyaSamaChikaNochekaiser } from "./kaguya-sama/kaguya-sama-chika-nochekaiser.mjs";
import { kaguyaSamaChika } from "./kaguya-sama/kaguya-sama-chika.mjs";
import { kaguyaSamaKaguyaNochekaiser } from "./kaguya-sama/kaguya-sama-kaguya-nochekaiser.mjs";
import { kaguyaSamaKaguya } from "./kaguya-sama/kaguya-sama-kaguya.mjs";
import { kaguyaSamaMikoNochekaiser } from "./kaguya-sama/kaguya-sama-miko-nochekaiser.mjs";
import { kaguyaSamaMiko } from "./kaguya-sama/kaguya-sama-miko.mjs";
import { lycorisRecoilChisatoEft } from "./lycoris-recoil/lycoris-recoil-chisato-eft.mjs";
import { lycorisRecoilChisato } from "./lycoris-recoil/lycoris-recoil-chisato.mjs";
import { lycorisRecoilTakinaEft } from "./lycoris-recoil/lycoris-recoil-takina-eft.mjs";
import { madomagiHomuraEft } from "./madomagi/madomagi-homura-eft.mjs";
import { madomagiIrohaEft } from "./madomagi/madomagi-iroha-eft.mjs";
import { madomagiKyoukoEft } from "./madomagi/madomagi-kyouko-eft.mjs";
import { madomagiMamiEft } from "./madomagi/madomagi-mami-eft.mjs";
import { madomagiSayakaEft } from "./madomagi/madomagi-sayaka-eft.mjs";
import { madomagiYachiyoEft } from "./madomagi/madomagi-yachiyo-eft.mjs";
import { mahoakoMatamaNotekaga } from "./mahoako/mahoako-matama-notekaga.mjs";
import { newGameAobaNarugo1992 } from "./new-game/new-game-aoba-narugo1992.mjs";
import { newGameHifumiNarugo1992 } from "./new-game/new-game-hifumi-narugo1992.mjs";
import { nonNonBiyoriHotaruNotekaga } from "./non-non-biyori/non-non-biyori-hotaru-notekaga.mjs";
import { prismaIllyaChloeBeastAm7coffeelove } from "./prisma-illya/prisma-illya-chloe-beast-am7coffeelove.mjs";
import { prismaIllyaIllyaBeastAm7coffeelove } from "./prisma-illya/prisma-illya-illya-beast-am7coffeelove.mjs";
import { prismaIllyaMiyuBeastAm7coffeelove } from "./prisma-illya/prisma-illya-miyu-beast-am7coffeelove.mjs";
import { pso2GeneOvernerd } from "./pso2/pso2-gene-overnerd.mjs";
import { reZeroEmiliaEft } from "./re-zero/re-zero-emilia-eft.mjs";
import { reZeroEmilia } from "./re-zero/re-zero-emilia.mjs";
import { reZeroRamEft } from "./re-zero/re-zero-ram-eft.mjs";
import { reZeroRam } from "./re-zero/re-zero-ram.mjs";
import { reZeroRemEft } from "./re-zero/re-zero-rem-eft.mjs";
import { reZeroRem } from "./re-zero/re-zero-rem.mjs";
import { saijakuCelistiaEft } from "./saijaku/saijaku-celistia-eft.mjs";
import { saijakuKrulciferEft } from "./saijaku/saijaku-krulcifer-eft.mjs";
import { saijakuLisesharteEft } from "./saijaku/saijaku-lisesharte-eft.mjs";
import { saijakuPhiluffyEft } from "./saijaku/saijaku-philuffy-eft.mjs";
import { saijakuYorukaEft } from "./saijaku/saijaku-yoruka-eft.mjs";
import { sasuoniHonokaEft } from "./sasuoni/sasuoni-honoka-eft.mjs";
import { sasuoniMayumiEft } from "./sasuoni/sasuoni-mayumi-eft.mjs";
import { sasuoniMiyukiEft } from "./sasuoni/sasuoni-miyuki-eft.mjs";
import { toLoveRuHarunaEft } from "./to-love-ru/to-love-ru-haruna-eft.mjs";
import { toLoveRuLalaEft } from "./to-love-ru/to-love-ru-lala-eft.mjs";
import { toLoveRuMeaEft } from "./to-love-ru/to-love-ru-mea-eft.mjs";
import { toLoveRuMomoEft } from "./to-love-ru/to-love-ru-momo-eft.mjs";
import { toLoveRuNanaEft } from "./to-love-ru/to-love-ru-nana-eft.mjs";
import { toLoveRuYamiEft } from "./to-love-ru/to-love-ru-yami-eft.mjs";
import { toLoveRuYuiEft } from "./to-love-ru/to-love-ru-yui-eft.mjs";

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
   * Emotion defines.
   */
  emotionEntries: NormalEntry<EmotionTag>[];
}>;

// TODO: stomach tattoo. Idea: hook `navel` tag.

export const characterTable = {
  "amaburi-isuzu-little-jelly": amaburiIsuzuLittleJelly(),
  "amaburi-isuzu": amaburiIsuzu(),
  "danmachi-aiz-eft": danmachiAizEft(),
  "danmachi-eina-eft": danmachiEinaEft(),
  "danmachi-haruhime-eft": danmachiHaruhimeEft(),
  "danmachi-hestia-eft": danmachiHestiaEft(),
  "danmachi-hestia-nochekaiser": danmachiHestiaNochekaiser(),
  "danmachi-lili-eft": danmachiLiliEft(),
  "danmachi-ryu-eft": danmachiRyuEft(),
  "dumbbell-akemi-wiz": dumbbellAkemiWiz(),
  "dumbbell-ayaka-wiz": dumbbellAyakaWiz(),
  "dumbbell-gina-wiz": dumbbellGinaWiz(),
  "dumbbell-hibiki-wiz": dumbbellHibikiWiz(),
  "dumbbell-satomi-wiz": dumbbellSatomiWiz(),
  "is-cecilia-og-turles": isCeciliaOgTurles(),
  "kagejitsu-alpha-nochekaiser": kagejitsuAlphaNochekaiser(),
  "kagejitsu-beta-nochekaiser": kagejitsuBetaNochekaiser(),
  "kaguya-sama-ai-nochekaiser": kaguyaSamaAiNochekaiser(),
  "kaguya-sama-ai": kaguyaSamaAi(),
  "kaguya-sama-chika-nochekaiser": kaguyaSamaChikaNochekaiser(),
  "kaguya-sama-chika": kaguyaSamaChika(),
  "kaguya-sama-kaguya-nochekaiser": kaguyaSamaKaguyaNochekaiser(),
  "kaguya-sama-kaguya": kaguyaSamaKaguya(),
  "kaguya-sama-miko-nochekaiser": kaguyaSamaMikoNochekaiser(),
  "kaguya-sama-miko": kaguyaSamaMiko(),
  "lycoris-recoil-chisato-eft": lycorisRecoilChisatoEft(),
  "lycoris-recoil-chisato": lycorisRecoilChisato(),
  "lycoris-recoil-takina-eft": lycorisRecoilTakinaEft(),
  "madomagi-homura-eft": madomagiHomuraEft(),
  "madomagi-iroha-eft": madomagiIrohaEft(),
  "madomagi-kyouko-eft": madomagiKyoukoEft(),
  "madomagi-mami-eft": madomagiMamiEft(),
  "madomagi-sayaka-eft": madomagiSayakaEft(),
  "madomagi-yachiyo-eft": madomagiYachiyoEft(),
  "mahoako-matama-notekaga": mahoakoMatamaNotekaga(),
  "new-game-aoba-narugo1992": newGameAobaNarugo1992(),
  "new-game-hifumi-narugo1992": newGameHifumiNarugo1992(),
  "non-non-biyori-hotaru-notekaga": nonNonBiyoriHotaruNotekaga(),
  "prisma-illya-chloe-beast-am7coffeelove":
    prismaIllyaChloeBeastAm7coffeelove(),
  "prisma-illya-illya-beast-am7coffeelove":
    prismaIllyaIllyaBeastAm7coffeelove(),
  "prisma-illya-miyu-beast-am7coffeelove": prismaIllyaMiyuBeastAm7coffeelove(),
  "pso2-gene-overnerd": pso2GeneOvernerd(),
  "re-zero-emilia-eft": reZeroEmiliaEft(),
  "re-zero-emilia": reZeroEmilia(),
  "re-zero-ram-eft": reZeroRamEft(),
  "re-zero-ram": reZeroRam(),
  "re-zero-rem-eft": reZeroRemEft(),
  "re-zero-rem": reZeroRem(),
  "saijaku-celistia-eft": saijakuCelistiaEft(),
  "saijaku-krulcifer-eft": saijakuKrulciferEft(),
  "saijaku-lisesharte-eft": saijakuLisesharteEft(),
  "saijaku-philuffy-eft": saijakuPhiluffyEft(),
  "saijaku-yoruka-eft": saijakuYorukaEft(),
  "sasuoni-shiba-miyuki-eft": sasuoniMiyukiEft(),
  "sasuoni-saegusa-mayumi-eft": sasuoniMayumiEft(),
  "sasuoni-mitsui-honoka-eft": sasuoniHonokaEft(),
  "to-love-ru-haruna-eft": toLoveRuHarunaEft(),
  "to-love-ru-lala-eft": toLoveRuLalaEft(),
  "to-love-ru-mea-eft": toLoveRuMeaEft(),
  "to-love-ru-momo-eft": toLoveRuMomoEft(),
  "to-love-ru-nana-eft": toLoveRuNanaEft(),
  "to-love-ru-yami-eft": toLoveRuYamiEft(),
  "to-love-ru-yui-eft": toLoveRuYuiEft(),
} as const satisfies {
  [k: string]: CharacterDefine;
};

export type CharacterKey = keyof typeof characterTable;
