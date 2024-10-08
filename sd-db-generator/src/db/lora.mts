import type { BaseModel } from "./checkpoint.mjs";

export type LoraDefine = Readonly<{
  /**
   * Recommended weight.
   * This value is specied in the LoRA description or sample images.
   */
  recommendedWeight: number;
  /**
   * Supported base models.
   * If you try to this LoRA with unsupported model, the tool will throw error.
   */
  supportedBaseModels: BaseModel[];
  /**
   * URL for DL.
   */
  url: string;
  /**
   * Character trigger words tags.
   * Define only the LoRA has uncommon trigger words.
   * For example, `mea kurosaki` is uncommon trigger words because it's not included in the common danbooru tag.
   */
  characterTriggerWordsTags: readonly string[];
  /**
   * Outfit trigger tags.
   * Some character LoRA has uncommon outfit trigger tags in order to distinguish outfit variations.
   * For example, `SentoUniform` and `SentoBikini` are uncommon outfit trigger tags.
   */
  outfitTriggerTags: readonly string[];
  /**
   * Creator name.
   */
  creator: string;
}>;

/**
 * LoRA table. The key is the LoRA name.
 * @example `nishikigi_chisato_v1`
 */
export const loraTable = {
  "ai-hayasaka-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/353023/ai-hayasaka-kaguya-sama-love-is-war?modelVersionId=394781`,
    ).toString(),
    characterTriggerWordsTags: [`ai hayasaka`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "ai-hayasaka-s3-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/353023/ai-hayasaka-kaguya-sama-love-is-war?modelVersionId=566862`,
    ).toString(),
    characterTriggerWordsTags: [`ai hayasaka`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "Ais_Wallenstein": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/498903/danmachi-or-ais-wallenstein-pdxl?modelVersionId=554574`,
    ).toString(),
    characterTriggerWordsTags: [`Ais Wallenstein`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "ais-danmachi": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/339169/ais-wallenstein-danmachi`,
    ).toString(),
    characterTriggerWordsTags: [`ais wallenstein`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "aisha-greyrat_PONY_epoch-000020": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/460406/pony-xl-aisha-greyrat-mushoku-tensei-season2?modelVersionId=512393`,
    ).toString(),
    characterTriggerWordsTags: [`aisha greyrat`],
    outfitTriggerTags: [],
    creator: `Ibukimakisiko`,
  },
  "akoya_matama-pony-v1": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/351800?modelVersionId=393514`,
    ).toString(),
    characterTriggerWordsTags: [`akoya matama`],
    outfitTriggerTags: [],
    creator: `NoteKaga`,
  },
  "alicia-edelsia-s1-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/399726/alicia-edelsia-uncle-from-another-world?modelVersionId=445807`,
    ).toString(),
    characterTriggerWordsTags: [`alicia edelsia`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "alpha-pdxl-nvwls-v1": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/534465/alpha-the-eminence-in-shadow-sdxl-lora-pony-diffusion?modelVersionId=594073`,
    ).toString(),
    characterTriggerWordsTags: [`alpha`],
    outfitTriggerTags: [],
    creator: `novowels`,
  },
  "AmagiBrilliantPark_KoboriXL": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/624336?modelVersionId=697992`,
    ).toString(),
    characterTriggerWordsTags: [`KoboriABP`],
    outfitTriggerTags: [`KoboriDress`, `KoboriBikini`],
    creator: `LittleJelly`,
  },
  "AmagiBrilliantPark_LatifaFleuranzaXL": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/627093?modelVersionId=701010`,
    ).toString(),
    characterTriggerWordsTags: [`LatifaFleuranza`],
    outfitTriggerTags: [`LatifaDress`, `LatifaBikini`, `LatifaPajamas`],
    creator: `LittleJelly`,
  },
  "AmagiBrilliantPark_MuseXL": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/624632?modelVersionId=698330`,
    ).toString(),
    characterTriggerWordsTags: [`MuseABP`],
    outfitTriggerTags: [`MuseDress`, `MuseBikini`],
    creator: `LittleJelly`,
  },
  "AmagiBrilliantPark_SalamaXL": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/624410?modelVersionId=698075`,
    ).toString(),
    characterTriggerWordsTags: [`SalamaABP`],
    outfitTriggerTags: [`SalamaDress`, `SalamaBikini`],
    creator: `LittleJelly`,
  },
  "AmagiBrilliantPark_SentoIsuzuXL": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/627170?modelVersionId=701101`,
    ).toString(),
    characterTriggerWordsTags: [], // > A little change: This one does not have a main activation tag.
    // This LoRA has no character trigger words. So, cannnot be used only in specific outfits.
    outfitTriggerTags: [
      `SentoUniform`,
      `SentoShirt`,
      `SentoPirate`,
      `SentoSchool`,
      `SentoSchool`,
      `SentoOffice`,
      `SentoBikini`,
      `SentoCasual2`,
      `SentoCasual`,
    ],
    creator: `LittleJelly`,
  },
  "AmagiBrilliantPark_SentoIsuzu": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/55673/sento-isuzu-or-amagi-brilliant-park`,
    ).toString(),
    characterTriggerWordsTags: [`SentoIsuzu`],
    outfitTriggerTags: [
      `SentoUniform`,
      `SentoVest`,
      `SentoSchoolUniform`,
      `SentoSuit`,
      `SentoCasual`,
      `SentoBikini`,
      `SentoPirate`,
    ],
    creator: `LittleJelly`,
  },
  "AmagiBrilliantPark_SylphyXL": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/624211/?modelVersionId=697851`,
    ).toString(),
    characterTriggerWordsTags: [`SylphyABP`],
    outfitTriggerTags: [`SylphyDress`, `SylphyBikini`],
    creator: `LittleJelly`,
  },
  "angelina-kudou-shields-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/452502/angelina-lina-angie-sirius-kudou-shields-the-irregular-at-magic-high-school-mahouka-koukou-no-rettousei?modelVersionId=503820`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "Aoba_Suzukaze": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/494354/new-game-or-aoba-suzukaze-pdxl?modelVersionId=549604`,
    ).toString(),
    characterTriggerWordsTags: [`Aoba Suzukaze`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "aoba-suzukaze-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/354199/aoba-suzukaze-new-game`,
    ).toString(),
    characterTriggerWordsTags: [`aoba suzukaze`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "arona_blue archive_PONY_last": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/346643/pony-xl-arona-blue-archive?modelVersionId=387912`,
    ).toString(),
    characterTriggerWordsTags: [`arona \\(blue archive\\)`],
    outfitTriggerTags: [],
    creator: `Ibukimakisiko`,
  },
  "beta-pdxl-nvwls-v1": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/534462/beta-the-eminence-in-shadow-sdxl-lora-pony-diffusion?modelVersionId=594069`,
    ).toString(),
    characterTriggerWordsTags: [`beta`],
    outfitTriggerTags: [],
    creator: `novowels`,
  },
  "cecilia-alcott-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/431036/cecilia-alcott-infinite-stratos-is`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`white military uniform`],
    creator: `nochekaiser`,
  },
  "celia claire_PONY_epoch-000016": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/452855/pony-xl-celia-claire-seirei-gensouki`,
    ).toString(),
    characterTriggerWordsTags: [`celia claire`],
    outfitTriggerTags: [`celia-default`],
    creator: `Ibukimakisiko`,
  },
  "celistia-bahamut-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/191380/celistia-ralgris-saijaku-muhai-no-bahamut`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "charlotte-dunois-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/431037/charlotte-dunois-infinite-stratos-is`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`white military uniform`],
    creator: `nochekaiser`,
  },
  "chifuyu-orimura-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/431039/chifuyu-orimura-infinite-stratos-is`,
    ).toString(),
    characterTriggerWordsTags: [`chifuyu orimura`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "chitanda_eru_pony": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/513468/chitanda-eru-hyouka?modelVersionId=570635`,
    ).toString(),
    characterTriggerWordsTags: [`chitanda_eru`],
    outfitTriggerTags: [],
    creator: `Chenkin`,
  },
  "Chika_Fujiwara": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/484301/kaguya-sama-wa-kokurasetai-or-chika-fujiwara-pdxl?modelVersionId=538606`,
    ).toString(),
    characterTriggerWordsTags: [`Chika Fujiwara`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "chika-fujiwara-s3-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/336863/chika-fujiwara-kaguya-sama-love-is-war`,
    ).toString(),
    characterTriggerWordsTags: [`chika fujiwara`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "chisato-lycoreco-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/226036/chisato-nishikigi-lycoris-recoil`,
    ).toString(),
    characterTriggerWordsTags: [`chisato nishikigi`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "chisato-nishikigi-s1-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/342789/chisato-nishikigi-lycoris-recoil`,
    ).toString(),
    characterTriggerWordsTags: [`chisato nishikigi`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "chloe_von_einzbern_ponyxl_v1": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/628740?modelVersionId=702928`,
    ).toString(),
    characterTriggerWordsTags: [`aachloe`],
    outfitTriggerTags: [],
    creator: `h_madoka`,
  },
  "clobeasts_pony": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/309537/chloe-von-einzbernbeast-style?modelVersionId=347422`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`zzcloaa`],
    creator: `am7coffeelove`,
  },
  "danmachi-hestia-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/361913/hestia-is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-danmachi?modelVersionId=404426`,
    ).toString(),
    characterTriggerWordsTags: [`hestia`],
    outfitTriggerTags: [],
    creator: `NoteKaga`,
  },
  "eft_dumbell_black": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/315196/akemi-souryuuin-how-heavy-are-the-dumbbells-you-lift-dumbbell-nan-kilo-moteru-anime-design`,
    ).toString(),
    characterTriggerWordsTags: [`eft_dumbbell_black`],
    outfitTriggerTags: [],
    creator: `wiz_`,
  },
  "eft_dumbell_blonde": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/315195/hibiki-sakura-how-heavy-are-the-dumbbells-you-lift-dumbbell-nan-kilo-moteru-anime-design`,
    ).toString(),
    characterTriggerWordsTags: [`eft_dumbbell_blonde`],
    outfitTriggerTags: [],
    creator: `wiz_`,
  },
  "eft_dumbell_bun": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/315191/ayaka-uehara-how-heavy-are-the-dumbbells-you-lift-dumbbell-nan-kilo-moteru-anime-design`,
    ).toString(),
    characterTriggerWordsTags: [`eft_dumbbell_bun`],
    outfitTriggerTags: [],
    creator: `wiz_`,
  },
  "eft_dumbell_short": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/315183/satomi-tachibana-how-heavy-are-the-dumbbells-you-lift-dumbbell-nan-kilo-moteru-anime-design`,
    ).toString(),
    characterTriggerWordsTags: [`eft_dumbbell_short`],
    outfitTriggerTags: [],
    creator: `wiz_`,
  },
  "eft_dumbell_white": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/315188/gina-boyd-how-heavy-are-the-dumbbells-you-lift-dumbbell-nan-kilo-moteru-anime-design`,
    ).toString(),
    characterTriggerWordsTags: [`eft_dumbbell_white`],
    outfitTriggerTags: [],
    creator: `wiz_`,
  },
  "Eina_Tulle": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/498849/danmachi-or-eina-tulle-pdxl?modelVersionId=554519`,
    ).toString(),
    characterTriggerWordsTags: [`Ais Wallenstein`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "eina-danmachi": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/342415/eina-tulle-danmachi`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "elaina_majo no tabitabi_PONY_last": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/445273/pony-xl-elaina-majo-no-tabitabi?modelVersionId=495831`,
    ).toString(),
    characterTriggerWordsTags: [`elaina \\(majo no tabitabi\\)`],
    outfitTriggerTags: [`elaina-default`, `elaina-inner`],
    creator: `Ibukimakisiko`,
  },
  "Elf_Yamada": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/502864/eromanga-sensei-or-elf-yamada-pdxl?modelVersionId=558920`,
    ).toString(),
    characterTriggerWordsTags: [`Elf Yamada`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "Emilia": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/80978?modelVersionId=538640`,
    ).toString(),
    characterTriggerWordsTags: [`Emilia`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "emilia-rezero-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(`https://civitai.com/models/216916/emilia-rezero`).toString(),
    characterTriggerWordsTags: [`emilia`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "Enome_1": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/492994/enome-from-futoku-no-guild`,
    ).toString(),
    characterTriggerWordsTags: [`Enome`],
    outfitTriggerTags: [],
    creator: `ZedoTasco`,
  },
  "erika-mahouka": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/298310/erika-chiba-mahouka-koukou-no-rettousei`,
    ).toString(),
    characterTriggerWordsTags: [`erika chiba`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "EromangaSensei_SenjuMuramasaXL": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/592423/?modelVersionId=661611`,
    ).toString(),
    characterTriggerWordsTags: [`SenjuMuramasa`],
    outfitTriggerTags: [
      `MuramasaKimono`,
      `MuramasaBikini`,
      `MuramasaDress`,
      `MuramasaSchool`,
    ],
    creator: `LittleJelly`,
  },
  "EromangaSensei_TakasagoTomoeXL": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/592418/?modelVersionId=661607`,
    ).toString(),
    characterTriggerWordsTags: [`TakasagoTomoe`],
    outfitTriggerTags: [],
    creator: `LittleJelly`,
  },
  "FateStayNightUBW_TohsakaRin": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/410579/tohsaka-rin-or-ponyxl-or-fatestay-night-unlimited-blade-works?modelVersionId=457675`,
    ).toString(),
    characterTriggerWordsTags: [`tohsakarin`],
    outfitTriggerTags: [
      `rinsweater`,
      `rincoat`,
      `rinschooluniform`,
      `rinuniversity`,
      `rinnightgown`,
    ],
    creator: `LittleJelly`,
  },
  "gene_bikini": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/350357/gene-pso2?modelVersionId=422503`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `overnerd`,
  },
  "golden-darkness-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/346406?modelVersionId=387658`,
    ).toString(),
    characterTriggerWordsTags: [`yami`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "Hajime_Shinoda": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/494389/new-game-or-hajime-shinoda-pdxl?modelVersionId=549641`,
    ).toString(),
    characterTriggerWordsTags: [`Hajime Shinoda`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "Haruhime_Sanjouno": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/498837/danmachi-or-haruhime-sanjouno-pdxl?modelVersionId=554505`,
    ).toString(),
    characterTriggerWordsTags: [`Haruhime Sanjouno`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "haruhime-danmachi": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/342409/haruhime-sanjouno-danmachi`,
    ).toString(),
    characterTriggerWordsTags: [`haruhime sanjouno`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "haruna-sairenji-darkness-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/346441/haruna-sairenji-to-love-ru?modelVersionId=566775`,
    ).toString(),
    characterTriggerWordsTags: [`haruna sairenji`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "haruna-loveru": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/258480/haruna-sairenji-to-love-ru`,
    ).toString(),
    characterTriggerWordsTags: [`haruna sairenji`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "Hestia": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/498816/danmachi-or-hestia-pdxl?modelVersionId=554481`,
    ).toString(),
    characterTriggerWordsTags: [`Hestia`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "hestia-danmachi": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/339164/hestia-danmachi`,
    ).toString(),
    characterTriggerWordsTags: [`hestia`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "Hifumi_Takimoto": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/494374/new-game-or-hifumi-takimoto-pdxl?modelVersionId=549625`,
    ).toString(),
    characterTriggerWordsTags: [`Hifumi Takimoto`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "hifumi-takimoto-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/354005/hifumi-takimoto-new-game`,
    ).toString(),
    characterTriggerWordsTags: [`hifumi takemoto`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "hinata kaho_PONY_epoch-000020": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/431756/pony-xl-hinata-kaho-blend-s?modelVersionId=481006`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`kaho-default`, `kaho-schooluniform`, `kaho-swim`],
    creator: `Ibukimakisiko`,
  },
  "hinatsuru ai_PONY_epoch-000015": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/450903/pony-xl-hinatsuru-ai-ryuuou-no-oshigoto?modelVersionId=502038`,
    ).toString(),
    characterTriggerWordsTags: [`hinatsuru ai`],
    outfitTriggerTags: [`hinatsuruai-default`],
    creator: `Ibukimakisiko`,
  },
  "Hisui_Tsurumi": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/523291/one-room-hiatari-futsuu-tenshi-tsuki-or-hisui-tsurumi-pdxl`,
    ).toString(),
    characterTriggerWordsTags: [`Hisui Tsurumi`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "homura-madomagi-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/269407/homura-akemi-mahou-shoujo-madokamagica`,
    ).toString(),
    characterTriggerWordsTags: [`homura akemi`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "honmachi_tone_v1": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/577294/honmachi-tone-dropout-idol-fruit-tart?modelVersionId=643699`,
    ).toString(),
    characterTriggerWordsTags: [`honmachi_tone`],
    outfitTriggerTags: [],
    creator: `enter741852963`,
  },
  "honoka-mahouka": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/298315/honoka-mitsui-mahouka-koukou-no-rettousei`,
    ).toString(),
    characterTriggerWordsTags: [`honoka mitsui`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "honoka-mitsui-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/452613/honoka-mitsui-the-irregular-at-magic-high-school-mahouka-koukou-no-rettousei?modelVersionId=503940`,
    ).toString(),
    characterTriggerWordsTags: [`honoka mitsui`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "hoshikawa mafuyu_PONY_epoch-000020": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/431505/pony-xl-hoshikawa-mafuyu-blend-s?modelVersionId=480728`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`mafuyu-default`, `mafuyu-casual`, `mafuyu-swim`],
    creator: `Ibukimakisiko`,
  },
  "houki-shinonono-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/431040/houki-shinonono-infinite-stratos-is`,
    ).toString(),
    characterTriggerWordsTags: [`houki shinonono`],
    outfitTriggerTags: [`white military uniform`],
    creator: `nochekaiser`,
  },
  "ichijou_hotaru-pony-v1": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/78552/sdxlsd15-ichijou-hotaru-or-non-non-biyori`,
    ).toString(),
    characterTriggerWordsTags: [`ichijou hotaru`],
    outfitTriggerTags: [],
    creator: `NoteKaga`,
  },
  "illya.pony": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/472636/pony-xl-illyasviel-von-einzbern-fatekaleid-liner-prisma-illya?modelVersionId=525776`,
    ).toString(),
    characterTriggerWordsTags: [`illya`],
    outfitTriggerTags: [
      `ruby`,
      `sapphire`,
      `zwei`,
      `saber`,
      `assassine`,
      `lancer`,
      `rider`,
    ],
    creator: `Flujoru`,
  },
  "illyabeasts_Ponyv2": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/309396?modelVersionId=347749`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`zzillaaa`],
    creator: `am7coffeelove`,
  },
  "illyasviel_von_einzbern_ponyxl_v1": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/599194?modelVersionId=669613`,
    ).toString(),
    characterTriggerWordsTags: [`aaillya`],
    outfitTriggerTags: [],
    creator: `h_madoka`,
  },
  "iroha-madomagi-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/271627/iroha-tamaki-magia-record`,
    ).toString(),
    characterTriggerWordsTags: [`iroha tamaki`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "IsekaiNonbiriNouka_AnnXL": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/562563/?modelVersionId=626708`,
    ).toString(),
    characterTriggerWordsTags: [`AnnINN`],
    outfitTriggerTags: [],
    creator: `LittleJelly`,
  },
  "IsekaiNonbiriNouka_HakurenXL": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/562567/?modelVersionId=626715`,
    ).toString(),
    characterTriggerWordsTags: [`HakurenINN`],
    outfitTriggerTags: [],
    creator: `LittleJelly`,
  },
  "IsekaiNonbiriNouka_RiaXL": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/562555/?modelVersionId=626702`,
    ).toString(),
    characterTriggerWordsTags: [`RiaINN`],
    outfitTriggerTags: [],
    creator: `LittleJelly`,
  },
  "IsekaiNonbiriNouka_RuuRurushiXL": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/562574/?modelVersionId=62672`,
    ).toString(),
    characterTriggerWordsTags: [`RurushiINN`],
    outfitTriggerTags: [`RuuDress`, `RuuPreg`],
    creator: `LittleJelly`,
  },
  "IsekaiNonbiriNouka_TiaXL": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/562562/?modelVersionId=626706`,
    ).toString(),
    characterTriggerWordsTags: [`TiaINN`],
    outfitTriggerTags: [],
    creator: `LittleJelly`,
  },
  "isuzu-sento-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/367371/isuzu-sento-amagi-brilliant-park`,
    ).toString(),
    characterTriggerWordsTags: [`isuzu sento`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "Izumi Noel": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/416294/izumi-noel-from-studio-apartment-good-lighting-angel-included`,
    ).toString(),
    characterTriggerWordsTags: [`sayu ogiwara`],
    outfitTriggerTags: [],
    creator: `ZedoTasco`,
  },
  "JN_Regina_Mercedes": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/647574/?modelVersionId=724472`,
    ).toString(),
    characterTriggerWordsTags: [`Mercedes`],
    outfitTriggerTags: [],
    creator: `JudgeNaegi`,
  },
  "JN_Riselia_Ray_Crystalia": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/646591/?modelVersionId=723352`,
    ).toString(),
    characterTriggerWordsTags: [`Crystalia`],
    outfitTriggerTags: [],
    creator: `JudgeNaegi`,
  },
  "Kaguya_Shinomiya": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/484411/kaguya-sama-wa-kokurasetai-or-kaguya-shinomiya-pdxl?modelVersionId=538731`,
    ).toString(),
    characterTriggerWordsTags: [`Kaguya Shinomiya`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "kaguya-shinomiya-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/353048/kaguya-shinomiya-kaguya-sama-love-is-war?modelVersionId=394808`,
    ).toString(),
    characterTriggerWordsTags: [`kaguya shinomiya`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "Kou_Yagami": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/494513/new-game-or-kou-yagami-pdxl?modelVersionId=549780`,
    ).toString(),
    characterTriggerWordsTags: [`Kou Yagami`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "krulcifer-bahamut-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/191382/krulcifer-einfolk-saijaku-muhai-no-bahamut`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "kyouko-madomagi-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/269411/kyouko-sakura-mahou-shoujo-madokamagica`,
    ).toString(),
    characterTriggerWordsTags: [`kyouko sakura`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "lala-deviluke-darkness-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/342926/lala-satalin-deviluke-to-love-ru?modelVersionId=566823`,
    ).toString(),
    characterTriggerWordsTags: [`lala deviluke`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "lala-loveru": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/258475/lala-satalin-deviluke-to-love-ru`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "laura-bodewig-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/406483/laura-bodewig-infinite-stratos-is-commission`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`white military uniform`],
    creator: `nochekaiser`,
  },
  "lili-danmachi": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/342407/liliruca-arde-danmachi`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "Liliruca_Arde": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/498803/danmachi-or-liliruca-arde-pdxl?modelVersionId=554466`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "Lilishka-54": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/463583?modelVersionId=574349`,
    ).toString(),
    characterTriggerWordsTags: [`lilishka`],
    outfitTriggerTags: [],
    creator: `duongve13112002`,
  },
  "Lilishka": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/523332/one-room-hiatari-futsuu-tenshi-tsuki-or-lilishka-pdxl`,
    ).toString(),
    characterTriggerWordsTags: [`Lilishka`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "lingyin-huang-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/431065/lingyin-huang-infinite-stratos-is`,
    ).toString(),
    characterTriggerWordsTags: [`lingyin huang`],
    outfitTriggerTags: [`white military uniform`],
    creator: `nochekaiser`,
  },
  "lisesharte-bahamut-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/191377/lisesharte-atismata-saijaku-muhai-no-bahamut`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "mabel-ravveil-s1-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/399727/mabel-rayveil-uncle-from-another-world?modelVersionId=445809`,
    ).toString(),
    characterTriggerWordsTags: [`mabel rayveil`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "madoka-madomagi-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/269404/madoka-kaname-mahou-shoujo-madokamagica`,
    ).toString(),
    characterTriggerWordsTags: [`madoka kaname`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "maehara_nina_v1": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/578080/maehara-nina-dropout-idol-fruit-tart?modelVersionId=644677`,
    ).toString(),
    characterTriggerWordsTags: [`maehara_nina`],
    outfitTriggerTags: [`idol_a`, `idol_b`],
    creator: `enter741852963`,
  },
  "Maika_Sakuranomiya_Pony": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/537904/maika-sakuranomiya-blend-s-pony`,
    ).toString(),
    characterTriggerWordsTags: [`Sakuranomiya_Maika`],
    outfitTriggerTags: [],
    creator: `ShadowxArt`,
  },
  "MahiruShiinaXLpony001": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/463329/mahiru-shiina-otonari-no-tenshi-sama-ni-itsunomanika-dame-ningen-ni-sareteita-ken-xl-pony-lora?modelVersionId=515633`,
    ).toString(),
    characterTriggerWordsTags: [`MahiruShiina`],
    outfitTriggerTags: [],
    creator: `jibunsagasinotabi`,
  },
  "mami-madomagi-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/269417/mami-tomoe-mahou-shoujo-madokamagica`,
    ).toString(),
    characterTriggerWordsTags: [`mami tomoe`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "maple_bofuri_PONY_last": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/567003/pony-xl-maple-bofuri?modelVersionId=631881`,
    ).toString(),
    characterTriggerWordsTags: [`maple \\(bofuri\\)`],
    outfitTriggerTags: [
      `maple-default`,
      `maple-schooluniform`,
      `maple-pajamas`,
    ],
    creator: `Ibukimakisiko`,
  },
  "maya-yamada-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/431075/maya-yamada-infinite-stratos-is`,
    ).toString(),
    characterTriggerWordsTags: [`maya yamada`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "mayumi-mahouka": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/298307/mayumi-saegusa-mahouka-koukou-no-rettousei`,
    ).toString(),
    characterTriggerWordsTags: [`mayumi saegusa`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "mayumi-saegusa-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/452537/mayumi-elfin-sniper-saegusa-the-irregular-at-magic-high-school-mahouka-koukou-no-rettousei?modelVersionId=503861`,
    ).toString(),
    characterTriggerWordsTags: [`mayumi saegusa`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "mea-loveru": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/258474/mea-kurosaki-to-love-ru`,
    ).toString(),
    characterTriggerWordsTags: [`mea kurosaki`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "Megumi_Jinno": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/502836/eromanga-sensei-or-megumi-jinno-pdxl?modelVersionId=558887`,
    ).toString(),
    characterTriggerWordsTags: [`Megumi Jinno`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "midori_hemo_v1": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/577978/midori-hemo-dropout-idol-fruit-tart?modelVersionId=644552`,
    ).toString(),
    characterTriggerWordsTags: [`midori_hemo`],
    outfitTriggerTags: [`idol_a`, `idol_b`],
    creator: `enter741852963`,
  },
  "miko-iino-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/354194/miko-iino-kaguya-sama-love-is-war?modelVersionId=396066`,
    ).toString(),
    characterTriggerWordsTags: [`miko iino`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "miko-iino-s3-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/354194/miko-iino-kaguya-sama-love-is-war?modelVersionId=566884`,
    ).toString(),
    characterTriggerWordsTags: [`miko iino`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "minagi_hiyori_PONY_epoch-000020": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/456435/pony-xl-minagi-hiyori-slow-loop?modelVersionId=508106`,
    ).toString(),
    characterTriggerWordsTags: [`minagi hiyori`],
    outfitTriggerTags: [
      `hiyori-default`,
      `hiyori-maid`,
      `hiyori-schooluniform`,
    ],
    creator: `Ibukimakisiko`,
  },
  "minagi_koharu_PONY_epoch-000020": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/458236/pony-xl-minagi-koharu-slow-loop?modelVersionId=510028`,
    ).toString(),
    characterTriggerWordsTags: [`minagi koharu`],
    outfitTriggerTags: [
      `koharu-default`,
      `koharu-casual`,
      `koharu-schooluniform`,
    ],
    creator: `Ibukimakisiko`,
  },
  "miubeasts_ponyv1": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/309561/miyu-edelfeltbeast-style?modelVersionId=347442`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`zzmiuaa`],
    creator: `am7coffeelove`,
  },
  "Miyafuji_PonyXL": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/254580/lora-sdxl-10-pony-sd-15-miyafuji-yoshika-cosplay-strike-witches?modelVersionId=579460`,
    ).toString(),
    characterTriggerWordsTags: [`aimiyafuji`],
    outfitTriggerTags: [],
    creator: `Gwess`,
  },
  "miyu_edelfelt_ponyxl_v1": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/628733?modelVersionId=702919`,
    ).toString(),
    characterTriggerWordsTags: [`aamiyu`],
    outfitTriggerTags: [],
    creator: `h_madoka`,
  },
  "miyuki-mahouka": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/298306/miyuki-shiba-mahouka-koukou-no-rettousei`,
    ).toString(),
    characterTriggerWordsTags: [`miyuki shiba`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "miyuki-shiba-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/452592/miyuki-snow-queen-shiba-the-irregular-at-magic-high-school-mahouka-koukou-no-rettousei?modelVersionId=503917`,
    ).toString(),
    characterTriggerWordsTags: [`miyuki shiba`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "mizuki-shibata-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/452593/mizuki-shibata-the-irregular-at-magic-high-school-mahouka-koukou-no-rettousei?modelVersionId=503918`,
    ).toString(),
    characterTriggerWordsTags: [`mizuki shibata`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "momo-deviluke-darkness-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/342887/momo-belia-deviluke-to-love-ru?modelVersionId=566787`,
    ).toString(),
    characterTriggerWordsTags: [`momo deviluke`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "momo-loveru": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/258472/momo-belia-deviluke-to-love-ru`,
    ).toString(),
    characterTriggerWordsTags: [`momo belia deviluke`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "momodevilvXLPonyV1": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/360361/momo-velia-deviluke`,
    ).toString(),
    characterTriggerWordsTags: [`momodevil`],
    outfitTriggerTags: [],
    creator: `Lancelot69lol`,
  },
  "MushokuTensei_SylphietteXL": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/422738/sylphiette-or-ponyxl-or-mushoku-tensei-isekai-ittara-honki-dasu?modelVersionId=471005`,
    ).toString(),
    characterTriggerWordsTags: [`Sylphiette`],
    outfitTriggerTags: [`SylphietteSchoolUniform`],
    creator: `LittleJelly`,
  },
  "nana-deviluke-darkness-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/353109/nana-asta-deviluke-to-love-ru?modelVersionId=566803`,
    ).toString(),
    characterTriggerWordsTags: [`nana asta deviluke`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "nana-loveru": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/258477/nana-astar-deviluke-to-love-ru`,
    ).toString(),
    characterTriggerWordsTags: [`nana astar deviluke`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "nanadevilXLPonyV1": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/401556/nana-asta-deviluke?modelVersionId=447746`,
    ).toString(),
    characterTriggerWordsTags: [`nanadevil`],
    outfitTriggerTags: [],
    creator: `Lancelot69lol`,
  },
  "Nene_Sakura": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/494552/new-game-or-nene-sakura-pdxl?modelVersionId=549820`,
    ).toString(),
    characterTriggerWordsTags: [`Nene Sakura`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "nishikigi_chisato_v1": {
    recommendedWeight: 0.75,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/235178/nishikigi-chisato-lycoris-recoil`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`aachisato`],
    creator: `h_madoka`,
  },
  "Noel_Izumi": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/425633?modelVersionId=563616`,
    ).toString(),
    characterTriggerWordsTags: [`noel izumi`],
    outfitTriggerTags: [],
    creator: `duongve13112002`,
  },
  "Noeru_Izumi": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/523273/one-room-hiatari-futsuu-tenshi-tsuki-or-noeru-izumi-pdxl`,
    ).toString(),
    characterTriggerWordsTags: [`Noeru Izumi`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "norn-greyrat_PONY_epoch-000025": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/460399/pony-xl-norn-greyrat-mushoku-tensei-season2?modelVersionId=512386`,
    ).toString(),
    characterTriggerWordsTags: [`norn greyrat`],
    outfitTriggerTags: [`norn-default`, `norn-schooluniform`],
    creator: `Ibukimakisiko`,
  },
  "nukui_hayu_v1": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/577316/nukui-hayu-dropout-idol-fruit-tart?modelVersionId=643727`,
    ).toString(),
    characterTriggerWordsTags: [`nukui_hayu`],
    outfitTriggerTags: [`idol_a`, `idol_b`],
    creator: `enter741852963`,
  },
  "OGT_Cecilia_Alcott-v1": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/250377/cecilia-alcott-or-infinite-stratos`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `OG_Turles`,
  },
  "Onna_Shinkan": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/513403/goblin-slayer-or-onna-shinkan-pdxl?modelVersionId=570572`,
    ).toString(),
    characterTriggerWordsTags: [`Onna Shinkan`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "philuffy-bahamut-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/191372/philuffy-aingram-saijaku-muhai-no-bahamut`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "Ram": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/80978?modelVersionId=548306`,
    ).toString(),
    characterTriggerWordsTags: [`Ram`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "ram-rezero-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(`https://civitai.com/models/216920/ram-rezero`).toString(),
    characterTriggerWordsTags: [`ram`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "reisalin-stout-s1-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/354022/reisalin-ryza-stout-atelier-ryza-ever-darkness-and-the-secret-hideout-the-animation-ryza-no-atelier-tokoyami-no-joou-to-himitsu-no-kakurega`,
    ).toString(),
    characterTriggerWordsTags: [`reisalin stout`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "Rem": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/80978/rezero-characters-pack-or-sd-15-pdxl?modelVersionId=538783`,
    ).toString(),
    characterTriggerWordsTags: [`Rem`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "rem-rezero-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(`https://civitai.com/models/216918/rem-rezero`).toString(),
    characterTriggerWordsTags: [`rem`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "Rin_Tooyama": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/494498/new-game-or-rin-tooyama-pdxl?modelVersionId=549764`,
    ).toString(),
    characterTriggerWordsTags: [`Rin Tooyama`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "Rokuaka_RumiaTingelXL": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/470001/rumia-tingel-or-pony-xl-or-rokudenashi-majutsu-koushi-to-akashic-records?modelVersionId=523075`,
    ).toString(),
    characterTriggerWordsTags: [`RumiaTingel`],
    outfitTriggerTags: [`RumiaSchool`, `RumiaBikini`],
    creator: `LittleJelly`,
  },
  "roxy_outfit1_PONY_epoch-000020": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/424801?modelVersionId=473292`,
    ).toString(),
    characterTriggerWordsTags: [`roxy migurdia`],
    outfitTriggerTags: [`roxy-outfit1`, `roxy-inner1`, `roxy-default`],
    creator: `Ibukimakisiko`,
  },
  "roxy_outfit2_PONY_epoch-000020": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/424801?modelVersionId=473298`,
    ).toString(),
    characterTriggerWordsTags: [`roxy migurdia`],
    outfitTriggerTags: [`roxy-outfit2`, `roxy-inner2`, `roxy-default`],
    creator: `Ibukimakisiko`,
  },
  "roxy_pajamas_PONY_last": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/424801/pony-xl-roxy-migurdia-mushoku-tensei?modelVersionId=614679`,
    ).toString(),
    characterTriggerWordsTags: [`roxy migurdia`],
    outfitTriggerTags: [`roxy-pajamas`],
    creator: `Ibukimakisiko`,
  },
  "Ryuu_Lion": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/498752/danmachi-or-ryuu-lion-pdxl?modelVersionId=554414`,
    ).toString(),
    characterTriggerWordsTags: [`Ryuu Lion`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "ryuu-danmachi": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/342406/ryuu-lion-danmachi`,
    ).toString(),
    characterTriggerWordsTags: [`ryuu lion`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "Sagiri_Izumi": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/502815/eromanga-sensei-or-sagiri-izumi-pdxl?modelVersionId=558869`,
    ).toString(),
    characterTriggerWordsTags: [`Sagiri Izumi`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "sakura_ino_v1": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/577569/sakura-ino-dropout-idol-fruit-tart?modelVersionId=644027`,
    ).toString(),
    characterTriggerWordsTags: [`sakura_ino`],
    outfitTriggerTags: [`idol_a`, `idol_b`],
    creator: `enter741852963`,
  },
  "sally_bofuri_PONY_last": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/567030/pony-xl-sally-bofuri?modelVersionId=631911`,
    ).toString(),
    characterTriggerWordsTags: [`sally \\(bofuri\\)`],
    outfitTriggerTags: [
      `sally-default`,
      `sally-schooluniform`,
      `sally-pajamas`,
    ],
    creator: `Ibukimakisiko`,
  },
  "Sally(bofuri)-Pony": {
    recommendedWeight: 1.2,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/514124/sally-bofuri-i-dont-want-to-get-hurt-so-ill-max-out-my-defense?modelVersionId=571410`,
    ).toString(),
    characterTriggerWordsTags: [`Sally`],
    outfitTriggerTags: [],
    creator: `King_Dong`,
  },
  "sayaka-madomagi-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/269414/sayaka-miki-mahou-shoujo-madokamagica`,
    ).toString(),
    characterTriggerWordsTags: [`sayaka miki`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "sayu-ogiwara-s1-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/398568/sayu-ogiwara-higehiro-after-being-rejected-i-shaved-and-took-in-a-high-school-runaway`,
    ).toString(),
    characterTriggerWordsTags: [`sayu ogiwara`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "sekino_roko_v1": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/577637/sekino-roko-dropout-idol-fruit-tart?modelVersionId=644122`,
    ).toString(),
    characterTriggerWordsTags: [`sekino_roko`],
    outfitTriggerTags: [`idol_a`, `idol_b`],
    creator: `enter741852963`,
  },
  "sento_isuzu_xl_pony_v1": {
    recommendedWeight: 0.9,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/453423/pony-sento-isuzu-amagi-brilliant-park`,
    ).toString(),
    characterTriggerWordsTags: [`aaisuzu`],
    outfitTriggerTags: [],
    creator: `h_madoka`,
  },
  "shadow-alpha-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/364060/alpha-the-eminence-in-shadow-kage-no-jitsuryokusha-ni-naritakute-commission?modelVersionId=406796`,
    ).toString(),
    characterTriggerWordsTags: [`alpha`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "shadow-beta-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/364066/beta-the-eminence-in-shadow-kage-no-jitsuryokusha-ni-naritakute-commission?modelVersionId=406805`,
    ).toString(),
    characterTriggerWordsTags: [`beta`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "shamiko_machikado mazoku_PONY_epoch-000020": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/484915/pony-xl-yoshida-yuuko-machikado-mazoku?modelVersionId=539284`,
    ).toString(),
    characterTriggerWordsTags: [`yoshida yuuko \\(machikado mazoku\\)`],
    outfitTriggerTags: [`shamiko-default`, `shamiko-kikikanri`, `shamiko-gym`],
    creator: `Ibukimakisiko`,
  },
  "shizuku-kitayama-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/452594/shizuku-kitayama-the-irregular-at-magic-high-school-mahouka-koukou-no-rettousei?modelVersionId=503919`,
    ).toString(),
    characterTriggerWordsTags: [`shizuku kitayama`],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "shizuku-mahouka": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/298313/shizuku-kitayama-mahouka-koukou-no-rettousei`,
    ).toString(),
    characterTriggerWordsTags: [`shizuku kitayama`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "shokuhou_misaki_v2": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/19948/shokuhou-misaki-toaru-kagaku-no-railgun`,
    ).toString(),
    characterTriggerWordsTags: [`hmmisaki`],
    outfitTriggerTags: [],
    creator: `h_madoka`,
  },
  "sumika-fujimiya-s1-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/398579/sumika-fujimiya-uncle-from-another-world?modelVersionId=444492`,
    ).toString(),
    characterTriggerWordsTags: [`sumika fujimiya`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "suzukaze_aoba_newgame": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/227219/suzukaze-aoba-new-game`,
    ).toString(),
    characterTriggerWordsTags: [`suzukaze_aoba_newgame`],
    outfitTriggerTags: [],
    creator: `narugo1992`,
  },
  "takimoto_hifumi_newgame": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/227280/takimoto-hifumi-new-game`,
    ).toString(),
    characterTriggerWordsTags: [`takimoto_hifumi_newgame`],
    outfitTriggerTags: [],
    creator: `narugo1992`,
  },
  "takina-inoue-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/342798/takina-inoue-lycoris-recoil`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `nochekaiser`,
  },
  "takina-inoue-s1-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/342798/takina-inoue-lycoris-recoil?modelVersionId=566929`,
    ).toString(),
    characterTriggerWordsTags: [`inoue takina`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "takina-lycoreco-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/226041/takina-inoue-lycoris-recoil`,
    ).toString(),
    characterTriggerWordsTags: [`takina inoue`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "taneshima popura_PONY_last": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/463900/pony-xl-taneshima-popura-working`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`popura-default`, `popura-schooluniform`],
    creator: `Ibukimakisiko`,
  },
  "tatenashi-sarashiki-s2-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/431107/tatenashi-sarashiki-infinite-stratos-is`,
    ).toString(),
    characterTriggerWordsTags: [`tatenashi sarashiki`],
    outfitTriggerTags: [`white military uniform`],
    creator: `nochekaiser`,
  },
  "tearju-lunatique-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/353010?modelVersionId=394760`,
    ).toString(),
    characterTriggerWordsTags: [`tearju lunatique`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "Towa-15": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/410608?modelVersionId=563752`,
    ).toString(),
    characterTriggerWordsTags: [`towa`],
    outfitTriggerTags: [],
    creator: `duongve13112002`,
  },
  "tokishikko dana_PONY_epoch-000020": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/479322/pony-xl-tokishikko-dana-futoku-no-guild?modelVersionId=533059`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [`tokishikko-default`, `tokishikko-inner`],
    creator: `Ibukimakisiko`,
  },
  "Towa": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/523400/one-room-hiatari-futsuu-tenshi-tsuki-or-towa-pdxl`,
    ).toString(),
    characterTriggerWordsTags: [`Towa`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "Tsumugi_Tsutsumi-58": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/434957?modelVersionId=578297`,
    ).toString(),
    characterTriggerWordsTags: [`tsumugi tsutsumi`],
    outfitTriggerTags: [],
    creator: `duongve13112002`,
  },
  "Tsumugi_Tsutsumi": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/523560/one-room-hiatari-futsuu-tenshi-tsuki-or-tsumugi-tsutsumi-pdxl`,
    ).toString(),
    characterTriggerWordsTags: [`Tsumugi Tsutsumi`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "tsundere-elf-s1-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/391246/sui-tsundere-elf-suzail-gierger-zegalnelv-zegilrea-granzelga-elga-uncle-from-another-world?modelVersionId=436486`,
    ).toString(),
    characterTriggerWordsTags: [`tsundere elf`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "Tsurumi_Hisui": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/480089?modelVersionId=574564`,
    ).toString(),
    characterTriggerWordsTags: [`tsurumi hisui`],
    outfitTriggerTags: [],
    creator: `duongve13112002`,
  },
  "Ushikai_Musume": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/513343/goblin-slayer-or-ushikai-musume-pdxl?modelVersionId=570509`,
    ).toString(),
    characterTriggerWordsTags: [`Ushikai Musume`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "yachiyo-madomagi-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/271624/yachiyo-nanami-magia-record`,
    ).toString(),
    characterTriggerWordsTags: [`yachiyo nanami`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "yami-loveru": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/258473/konjiki-no-yami-to-love-ru`,
    ).toString(),
    characterTriggerWordsTags: [],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "yashajin ai_PONY_last": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/454348/pony-xl-yashajin-ai-ryuuou-no-oshigoto?modelVersionId=505835`,
    ).toString(),
    characterTriggerWordsTags: [`yashajin ai`],
    outfitTriggerTags: [`yashajinai-default`],
    creator: `Ibukimakisiko`,
  },
  "Yor_Forger": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/487426/spy-x-family-or-yor-forger-pdxl?modelVersionId=542026`,
    ).toString(),
    characterTriggerWordsTags: [`Yor Forger`, `yor briar`, `Thorn Princess`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "yoruka-bahamut-01": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/191383/yoruka-kirihime-saijaku-muhai-no-bahamut`,
    ).toString(),
    characterTriggerWordsTags: [`yoruka kirihime`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "yoshinaga koi_PONY_last": {
    recommendedWeight: 1,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/462141/pony-xl-yoshinaga-koi-slow-loop?modelVersionId=514275`,
    ).toString(),
    characterTriggerWordsTags: [`yoshinaga koi`],
    outfitTriggerTags: [`yoshinagakoi-casual`, `yoshinagakoi-schooluniform`],
    creator: `Ibukimakisiko`,
  },
  "Yousei_Yunde": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/513455/goblin-slayer-or-yousei-yunde-pdxl?modelVersionId=570622`,
    ).toString(),
    characterTriggerWordsTags: [`Yousei Yunde`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "yui-kotegawa-darkness-ponyxl-lora-nochekaiser": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/342877?modelVersionId=451506`,
    ).toString(),
    characterTriggerWordsTags: [`yui kotegawa`],
    outfitTriggerTags: [],
    creator: `nochekaiser881`,
  },
  "yui-loveru": {
    recommendedWeight: 0.8,
    supportedBaseModels: [`SD1.5`],
    url: new URL(
      `https://civitai.com/models/258476/yui-kotegawa-to-love-ru`,
    ).toString(),
    characterTriggerWordsTags: [`yui kotegawa`],
    outfitTriggerTags: [],
    creator: `eft`,
  },
  "Yun_Iijima": {
    recommendedWeight: 0.7,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/494687/new-game-or-yun-iijima-pdxl?modelVersionId=549975`,
    ).toString(),
    characterTriggerWordsTags: [`Yun Iijima`],
    outfitTriggerTags: [],
    creator: `Eternal2kPP`,
  },
  "yuuka_blue archive_PONY_last": {
    recommendedWeight: 1.0,
    supportedBaseModels: [`Pony`],
    url: new URL(
      `https://civitai.com/models/374498/pony-xl-hayase-yuuka-blue-archive?modelVersionId=418259`,
    ).toString(),
    characterTriggerWordsTags: [`yuuka \\(blue archive\\)`],
    outfitTriggerTags: [`yuuka-default`, `yuuka-gym`],
    creator: `Ibukimakisiko`,
  },
} as const satisfies Record<string, LoraDefine>;

export type LoraTable = typeof loraTable;
export type LoraName = keyof LoraTable;

export type LoraCharacterTriggerWordsTag =
  LoraTable[LoraName][`characterTriggerWordsTags`][number];
export type LoraOutfitTriggerWordsTag =
  LoraTable[LoraName][`outfitTriggerTags`][number];
