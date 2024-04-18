import { BackgroundSetting } from "../setting-define.mjs";
import {
  fromAbovePosesPreset,
  fromBelowPosesPreset,
  fromHorizontalPosesPreset,
} from "./pose.mjs";

export const backgroundsPreset = {
  oceanBeach: [
    {
      type: `from-above`,
      key: `ocean-partially-submerged`,
      poses: [...fromAbovePosesPreset.usual, ...fromAbovePosesPreset.onFloor],
    },
    {
      type: `from-below`,
      key: `blue-sky`,
      poses: fromBelowPosesPreset.usual,
    },
    {
      type: `from-horizontal`,
      key: `ocean`,
      poses: fromHorizontalPosesPreset.usual,
    },
    {
      type: `from-horizontal`,
      key: `ocean-beach`,
      poses: [
        ...fromHorizontalPosesPreset.usual,
        ...fromHorizontalPosesPreset.onFloor,
      ],
    },
  ],
  bedroom: [
    {
      type: `from-horizontal`,
      key: `bedroom`,
      poses: fromHorizontalPosesPreset.usual,
    },
  ],
  steamingBedSheetSpokenHeart: [
    {
      type: `from-above`,
      key: `steaming-bed-sheet-spoken-heart`,
      poses: fromAbovePosesPreset.onBed,
    },
  ],
  bedSheetWindow: [
    {
      type: `from-horizontal`,
      key: `bed-sheet-window`,
      poses: fromHorizontalPosesPreset.onBed,
    },
  ],
  colorfulHeartBackgrounds: [
    {
      type: `from-above`,
      key: `colorful-heart-backgrounds`,
      poses: [...fromAbovePosesPreset.usual, ...fromAbovePosesPreset.onFloor],
    },
    {
      type: `from-below`,
      key: `colorful-heart-backgrounds`,
      poses: fromBelowPosesPreset.usual,
    },
    {
      type: `from-horizontal`,
      key: `colorful-heart-backgrounds`,
      poses: [
        ...fromHorizontalPosesPreset.usual,
        ...fromHorizontalPosesPreset.onFloor,
      ],
    },
  ],
  wedding: [
    {
      type: `from-above`,
      key: `wedding`,
      poses: fromAbovePosesPreset.wedding,
    },
    {
      type: `from-below`,
      key: `wedding`,
      poses: fromBelowPosesPreset.wedding,
    },
    {
      type: `from-horizontal`,
      key: `wedding`,
      poses: fromHorizontalPosesPreset.wedding,
    },
  ],
  city: [
    {
      type: `from-above`,
      key: `brick floor`,
      poses: [...fromAbovePosesPreset.usual, ...fromAbovePosesPreset.onFloor],
    },
    {
      type: `from-below`,
      key: `city`,
      poses: fromBelowPosesPreset.usual,
    },
    {
      type: `from-horizontal`,
      key: `city`,
      poses: fromHorizontalPosesPreset.usual,
    },
  ],
  blueSkyConfettiCheering: [
    {
      type: `from-below`,
      key: `blue-sky-confetti`,
      poses: fromBelowPosesPreset.cheering,
    },
  ],
  grass: [
    {
      type: `from-above`,
      key: `grass`,
      poses: [...fromAbovePosesPreset.usual, ...fromAbovePosesPreset.onFloor],
    },
    {
      type: `from-horizontal`,
      key: `grass-blue-sky`,
      poses: [
        ...fromHorizontalPosesPreset.usual,
        ...fromHorizontalPosesPreset.onFloor,
      ],
    },
  ],
  blueSky: [
    {
      type: `from-below`,
      key: `blue-sky`,
      poses: fromBelowPosesPreset.usual,
    },
  ],
  nightRooftop: [
    {
      type: `from-above`,
      key: `night-rooftop`,
      poses: fromAbovePosesPreset.usual,
    },
    {
      type: `from-below`,
      key: `night-sky`,
      poses: fromBelowPosesPreset.usual,
    },
    {
      type: `from-horizontal`,
      key: `night-rooftop`,
      poses: fromHorizontalPosesPreset.usual,
    },
  ],
  cafe: [
    {
      type: `from-above`,
      key: `floor`,
      poses: fromAbovePosesPreset.usual,
    },
    {
      type: `from-horizontal`,
      key: `cafe`,
      poses: fromHorizontalPosesPreset.usual,
    },
    {
      type: `from-horizontal`,
      key: `cafe-window`,
      poses: fromHorizontalPosesPreset.usual,
    },
  ],
  casino: [
    {
      type: `from-above`,
      key: `casino`,
      poses: fromAbovePosesPreset.usual,
    },
    {
      type: `from-horizontal`,
      key: `casino`,
      poses: fromHorizontalPosesPreset.usual,
    },
  ],
  christmas: [
    {
      type: `from-above`,
      key: `christmas`,
      poses: [...fromAbovePosesPreset.usual, ...fromAbovePosesPreset.onFloor],
    },
    {
      type: `from-below`,
      key: `christmas`,
      poses: fromBelowPosesPreset.usual,
    },
    {
      type: `from-horizontal`,
      key: `christmas`,
      poses: [
        ...fromHorizontalPosesPreset.usual,
        ...fromHorizontalPosesPreset.onFloor,
      ],
    },
    {
      type: `from-horizontal`,
      key: `christmas`,
      poses: fromHorizontalPosesPreset.onFloor,
    },
  ],
  classroom: [
    {
      type: `from-above`,
      key: `classroom-floor`,
      poses: [...fromAbovePosesPreset.usual, ...fromAbovePosesPreset.onFloor],
    },
    {
      type: `from-below`,
      key: `classroom-window`,
      poses: fromBelowPosesPreset.usual,
    },
    {
      type: `from-below`,
      key: `classroom-chalkboard`,
      poses: fromBelowPosesPreset.usual,
    },
    {
      type: `from-horizontal`,
      key: `classroom-window`,
      poses: fromHorizontalPosesPreset.usual,
    },
  ],
  "karaoke-box": [
    {
      type: `from-horizontal`,
      key: `karaoke-box`,
      poses: fromHorizontalPosesPreset.singing,
    },
  ],
} as const satisfies {
  [k in string]: (
    | BackgroundSetting<"from-above">
    | BackgroundSetting<"from-below">
    | BackgroundSetting<"from-horizontal">
  )[];
};
