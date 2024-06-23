import {
  allDistinguishableBodyFeatureTags,
  allDistinguishableFaceTags,
  allDistinguishableHeadOutfitTags,
  allDistinguishableOutfitTags,
} from "@tenpamk2/sd-tag-defines";

export type DistinguishableTagDefine = string;

export const distinguishableTagTable = {
  ...allDistinguishableBodyFeatureTags,
  ...allDistinguishableOutfitTags,
  ...allDistinguishableFaceTags,
  ...allDistinguishableHeadOutfitTags,
} as const satisfies Record<string, DistinguishableTagDefine>;

export type DistinguishableTagTable = typeof distinguishableTagTable;
export type DistinguishableTag = keyof DistinguishableTagTable;
