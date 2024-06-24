import type { EmotionKey } from "../emotions/emotions.mjs";

export const emotionPreset = {
  default: {
    "smile-profile": 1.0,
    "smile": 1.0,
    "light-smile-profile": 1.0,
    "light-smile": 1.0,
    "expressionless": 0.8,
    "surprised": 0.8,
    "confused": 0.8,
    "embarrassed": 1.0,
    "seductive-smile": 1.0,
    "embarrassed-scowl": 0.5,
    "angry": 0.5,
    "grin": 0.2,
    "doyagao": 0.2,
  },
} as const satisfies Record<string, Partial<Record<EmotionKey, number>>>;
