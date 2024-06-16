import { OutfitTag } from "../../../index.mjs";
import { OutfitDefine } from "../outfits.mjs";
import { upskirtPreset } from "../upskirt-preset";

type Variation =
  | `ai-no-lora`
  | `ai-nochekaiser`
  | `chika-eternal2kpp`
  | `chika-no-lora`
  | `chika-nochekaiser`
  | `kaguya-eternal2kpp`
  | `kaguya-no-lora`
  | `kaguya-nochekaiser`
  | `miko-no-lora`
  | `miko-nochekaiser`;

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
  `red neck ribbon -> red ribbon`,
  `short dress`,
  `loafers`,
] as const satisfies OutfitTag[];

const gyaru = [
  `shuuchiin academy school uniform`,
  `school uniform`,
  `collared shirt`,
  `white shirt`,
  `long sleeves`,
  `collarbone`,
  `clothes around waist`,
  `around waist cardigan -> cardigan`,
  `brown around waist cardigan -> brown cardigan`,
  `cardigan around waist`,
  `vest`,
  `black vest`,
  `skirt`,
  `black skirt`,
  `miniskirt`,
  `socks`,
  `black socks`,
  `loafers`,
] as const satisfies OutfitTag[];

const outfitEntries = {
  "ai-no-lora": [...gyaru],
  "ai-nochekaiser": [...gyaru, `sweater around waist`],
  "chika-eternal2kpp": [...normal, `socks`, `white socks`],
  "chika-no-lora": [...normal, `socks`, `white socks`],
  "chika-nochekaiser": [...normal, `socks`, `white socks`],
  "kaguya-eternal2kpp": [...normal, `socks`, `black socks`],
  "kaguya-no-lora": [...normal, `socks`, `black socks`],
  "kaguya-nochekaiser": [...normal, `socks`, `black socks`],
  "miko-no-lora": [
    ...normal,
    `armband`,
    `yellow armband`,
    `pantyhose`,
    `black pantyhose`,
  ],
  "miko-nochekaiser": [
    ...normal,
    `armband`,
    `yellow armband`,
    `pantyhose`,
    `black pantyhose`,
  ],
} as const satisfies Record<Variation, OutfitDefine["outfitEntries"]>;

const upskirtEntries = {
  "ai-no-lora": upskirtPreset.colorfulPanties,
  "ai-nochekaiser": upskirtPreset.colorfulPanties,
  "chika-eternal2kpp": upskirtPreset.colorfulPanties,
  "chika-no-lora": upskirtPreset.colorfulPanties,
  "chika-nochekaiser": upskirtPreset.colorfulPanties,
  "kaguya-eternal2kpp": upskirtPreset.colorfulPanties,
  "kaguya-no-lora": upskirtPreset.colorfulPanties,
  "kaguya-nochekaiser": upskirtPreset.colorfulPanties,
  "miko-no-lora": upskirtPreset.pantiesUnderPantyhose,
  "miko-nochekaiser": upskirtPreset.pantiesUnderPantyhose,
} as const satisfies Record<Variation, OutfitDefine["upskirtEntries"]>;

export const kaguyaSamaShuuchiinAcademySchoolUniform = (variation: Variation) =>
  ({
    lora: null,
    loraOutfitTriggerWordEntries: [],
    outfitEntries: outfitEntries[variation],
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
    upskirtEntries: upskirtEntries[variation],
    whenRemoveShoes: {
      excludeTags: [`loafers`],
      additionalFootEntriesAfterRemoving: [`no shoes`],
    },
  }) as const satisfies OutfitDefine;
