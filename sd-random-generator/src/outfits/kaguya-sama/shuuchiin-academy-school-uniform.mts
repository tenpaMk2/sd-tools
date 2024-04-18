import { OutfitAndExposureTag } from "@tenpamk2/sd-tag-defines";
import { upskirtPreset } from "../common/upskirt-preset.mjs";
import { OutfitDefine } from "../resolver.mjs";

const normal = [
  `shuuchiin academy school uniform`,
  `school uniform`,
  `dress`,
  `black dress`,
  `collared dress`,
  `sailor collar`,
  `white sailor collar`,
  `collarbone`,
  `neck ribbon`,
  `red neck ribbon`,
  `short dress`,
  `loafers`,
] as const satisfies OutfitAndExposureTag[];

const gyaru = [
  `shuuchiin academy school uniform`,
  `school uniform`,
  `collared shirt`,
  `white shirt`,
  `long sleeves`,
  `collarbone`,
  `clothes around waist`,
  `around waist cardigan`,
  `brown around waist cardigan`,
  `cardigan around waist`,
  `vest`,
  `black vest`,
  `skirt`,
  `black skirt`,
  `miniskirt`,
  `socks`,
  `black socks`,
] as const satisfies OutfitAndExposureTag[];

const outfitAndExposureEntries = {
  "ai-nochekaiser": [...gyaru, `sweater around waist`],
  ai: [...gyaru],
  "chika-nochekaiser": [...normal, `socks`, `white socks`],
  chika: [...normal, `socks`, `white socks`],
  "kaguya-nochekaiser": [...normal, `socks`, `black socks`],
  kaguya: [...normal, `socks`, `black socks`],
  "miko-nochekaiser": [
    ...normal,
    `armband`,
    `yellow armband`,
    `pantyhose`,
    `black pantyhose`,
  ],
  miko: [
    ...normal,
    `armband`,
    `yellow armband`,
    `pantyhose`,
    `black pantyhose`,
  ],
} as const satisfies { [k in string]: OutfitAndExposureTag[] };

export const kaguyaSamaShuuchiinAcademySchoolUniform = (
  variation: keyof typeof outfitAndExposureEntries,
) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitAndExposureEntries: outfitAndExposureEntries[variation],
    specialVisibility: {
      armpits: false,
      hangingBreasts: false,
      tautClothes: true,
      cleavage: false,
      sideboob: false,
      backboob: false,
      underboobLevel: `invisible`,
      zettaiRyouiki: false,
      insideOfThighs: false,
    },
    liftType: `dress`,
    upskirtEntries: [`miko`, `miko-nochekaiser`].some((x) => x === variation)
      ? upskirtPreset.pantiesUnderPantyhose
      : upskirtPreset.colorfulPanties,
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
