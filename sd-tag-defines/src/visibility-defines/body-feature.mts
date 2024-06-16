import { BodyFeatureTag } from "../tag-defines/body-feature.mjs";
import { Visibility } from "../visibility.mjs";

const all = {
  frontHead: true,
  sideHead: true,
  backHead: true,
  frontBreast: true,
  sideBreast: true,
  backBreast: true,
  frontMidriff: true,
  sideMidriff: true,
  backMidriff: true,
  frontHipAndThigh: true,
  sideHipAndThigh: true,
  backHipAndThigh: true,
  foot: true,
  wristAndHand: true,
  aroundBody: true,
} as const satisfies Visibility;

const invisible = {
  frontHead: false,
  sideHead: false,
  backHead: false,
  frontBreast: false,
  sideBreast: false,
  backBreast: false,
  frontMidriff: false,
  sideMidriff: false,
  backMidriff: false,
  frontHipAndThigh: false,
  sideHipAndThigh: false,
  backHipAndThigh: false,
  foot: false,
  wristAndHand: false,
  aroundBody: false,
} as const satisfies Visibility;

const preset = {
  all,
  head: {
    ...invisible,
    frontHead: true,
    sideHead: true,
    backHead: true,
  },
  hips: {
    ...invisible,
    backHipAndThigh: true,
  },
  longTail: {
    ...invisible,
    backHipAndThigh: true,
    aroundBody: true,
  },
  shortTail: {
    ...invisible,
    backHipAndThigh: true,
  },
  thighs: {
    ...invisible,
    frontHipAndThigh: true,
    sideHipAndThigh: true,
    backHipAndThigh: true,
  },
} as const satisfies Record<string, Visibility>;

const allDistinguishableBodyFeatureVisibilities = {
  "aqua short tail -> aqua tail": preset.shortTail,
  "black short tail -> black tail": preset.shortTail,
  "blue short tail -> blue tail": preset.shortTail,
  "brown short tail -> brown tail": preset.shortTail,
  "green short tail -> green tail": preset.shortTail,
  "grey short tail -> grey tail": preset.shortTail,
  "orange short tail -> orange tail": preset.shortTail,
  "pink short tail -> pink tail": preset.shortTail,
  "purple short tail -> purple tail": preset.shortTail,
  "red short tail -> red tail": preset.shortTail,
  "white short tail -> white tail": preset.shortTail,
  "yellow short tail -> yellow tail": preset.shortTail,
  "aqua long tail -> aqua tail": preset.longTail,
  "black long tail -> black tail": preset.longTail,
  "blue long tail -> blue tail": preset.longTail,
  "brown long tail -> brown tail": preset.longTail,
  "green long tail -> green tail": preset.longTail,
  "grey long tail -> grey tail": preset.longTail,
  "orange long tail -> orange tail": preset.longTail,
  "pink long tail -> pink tail": preset.longTail,
  "purple long tail -> purple tail": preset.longTail,
  "red long tail -> red tail": preset.longTail,
  "white long tail -> white tail": preset.longTail,
  "yellow long tail -> yellow tail": preset.longTail,
} as const satisfies Partial<Record<BodyFeatureTag, Visibility>>;

export const allBodyFeatureVisibilities = {
  ...allDistinguishableBodyFeatureVisibilities,
  "animal ear fluff": preset.all,
  "animal ears": preset.all,
  "cat ears": preset.all,
  "cat girl": preset.all,
  "cat tail": preset.longTail,
  "curvy": preset.all,
  "dark skin": preset.all,
  "dark-skinned female": preset.all,
  "demon tail": preset.longTail,
  "dog ears": preset.all,
  "dog girl": preset.all,
  "dog tail": preset.longTail,
  "elf": preset.all,
  "fox ears": preset.all,
  "fox girl": preset.all,
  "fox tail": preset.longTail,
  "gyaru": preset.all,
  "loli": preset.all,
  "mature female": preset.all,
  "pointy ears": preset.shortTail,
  "rabbit ears": preset.all,
  "rabbit girl": preset.all,
  "rabbit tail": preset.longTail,
  "tail": preset.shortTail, // TODO: `short tail` and `long tail`
  "tan": preset.all,
  "thick thighs": preset.thighs,
  "toned": preset.all,
  "wide hips": preset.hips,
} as const satisfies Record<BodyFeatureTag, Visibility>;
