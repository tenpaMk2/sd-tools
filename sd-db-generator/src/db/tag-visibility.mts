import { tagVisibilities, type Visibility } from "@tenpamk2/sd-tag-defines";

export type TagVisibilityDefine = Visibility;
export const tagVisibilityTable = tagVisibilities;
export type TagVisibilityTable = typeof tagVisibilityTable;
export type TagVisibilityKey = keyof TagVisibilityTable;
