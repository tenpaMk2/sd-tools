import { EmotionKey } from "../emotions/emotions.mjs";

export const emotionPreset = {
  "all-flat": {
    "smile-profile": 1.0,
    "smile": 1.0,
    "light-smile-profile": 1.0,
    "light-smile": 1.0,
    "expressionless": 1.0,
    "surprised": 1.0,
    "confused": 1.0,
    "embarrassed": 1.0,
    "seductive-smile": 1.0,
    "embarrassed-scowl": 1.0,
    "angry": 1.0,
    "grin": 1.0,
    "doyagao": 1.0,
  },
} as const satisfies Record<string, Partial<Record<EmotionKey, number>>>;
