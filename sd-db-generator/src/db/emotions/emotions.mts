import { EmotionTag } from "@tenpamk2/sd-tag-defines";
import { TagEntry } from "../../entry.mjs";

export type EmotionDefine = {
  entries: TagEntry<EmotionTag>[];
};

export const emotionTable = {
  "smile-profile": {
    entries: [
      `blush`,
      `smile`,
      [
        { entries: [`half-closed eyes`] },
        { entries: [`parted lips`] },
        { entries: [`:d`, `open mouth`] },
        { entries: [`closed mouth`] },
      ],
      [
        { entries: [] },
        { entries: [`heart`, `spoken heart`], probability: 0.5 },
      ],
    ],
  },
  "smile": {
    entries: [
      `blush`,
      `smile`,
      [
        { entries: [`half-closed eyes`] },
        { entries: [`parted lips`] },
        { entries: [`:d`, `open mouth`] },
        { entries: [`closed mouth`] },
        { entries: [`one eye closed`, `;d`, `open mouth`] },
        { entries: [`one eye closed`, `;\\)`, `closed mouth`] },
      ],
      [
        { entries: [] },
        { entries: [`heart`, `spoken heart`], probability: 0.5 },
      ],
    ],
  },
  "light-smile-profile": {
    entries: [
      `blush`,
      `light smile`,
      [
        { entries: [`open mouth`] },
        { entries: [`parted lips`] },
        { entries: [`closed mouth`] },
      ],
      [
        { entries: [] },
        { entries: [`heart`, `spoken heart`], probability: 0.5 },
      ],
    ],
  },
  "light-smile": {
    entries: [
      `blush`,
      `light smile`,
      [
        { entries: [`open mouth`] },
        { entries: [`parted lips`] },
        { entries: [`closed mouth`] },
        { entries: [`one eye closed`, `;d`, `open mouth`] },
        { entries: [`one eye closed`, `;\\)`, `closed mouth`] },
      ],
      [
        { entries: [] },
        { entries: [`heart`, `spoken heart`], probability: 0.5 },
      ],
    ],
  },
  "expressionless": { entries: [`blush`, `expressionless`] },
  "surprised": { entries: [`blush`, `surprised`, `:o`, `open mouth`, `!`] },
  "confused": { entries: [`blush`, `nose blush`, `confused`, `?`] },
  "embarrassed": { entries: [`blush`, `nose blush`, `embarrassed`] },
  "seductive-smile": {
    entries: [
      `blush`,
      [
        { entries: [`seductive smile`, `half-closed eyes`] },
        { entries: [`naughty face`, `half-closed eyes`] },
      ],
    ],
  },
  "embarrassed-scowl": {
    entries: [`blush`, `nose blush`, `embarrassed`, `scowl`],
  },
  "angry": { entries: [`blush`, `angry`] },
  "grin": { entries: [`blush`, `smile`, `grin`] },
  "doyagao": {
    entries: [`blush`, `smug`, `doyagao`, `v-shaped eyebrows`, `puff of air`],
  },
  // TODO: tearing up
} as const satisfies Record<string, EmotionDefine>;

export type EmotionTable = typeof emotionTable;
export type EmotionKey = keyof EmotionTable;

export type EmotionType =
  | `cute`
  | `serious`
  | `tsundere`
  | `emotionless`
  | `mesugaki`;
