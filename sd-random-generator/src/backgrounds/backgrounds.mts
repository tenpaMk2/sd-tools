import { BackgroundTag } from "@tenpamk2/sd-tag-defines";
import { NormalEntry } from "../prompt-define.mjs";

export type CameraAngle = `from-above` | `from-below` | `from-horizontal`;
export type BackgroundType = `standing` | `near-clean-floor` | `sitting-on`;

export type BackgroundDefine = {
  [k in CameraAngle]?: {
    entries: NormalEntry<BackgroundTag>[];
  };
} & {
  backgroundType: BackgroundType;
  removeShoes: boolean;
};

const colorfulBackgroundEntries = [
  `simple background`,
  [
    { entries: [`blue background`] },
    { entries: [`pink background`], probability: 2 },
    { entries: [`red background`] },
    { entries: [`white background`], probability: 3 },
    { entries: [`yellow background`] },
  ],
] as const satisfies NormalEntry<BackgroundTag>[];

const colorfulHeartBackgroundEntries = [
  ...colorfulBackgroundEntries,
  `heart background`,
] as const satisfies NormalEntry<BackgroundTag>[];

const colorfulBackgroundStanding = {
  "backgroundType": `standing`,
  "from-above": {
    entries: colorfulBackgroundEntries,
  },
  "from-below": {
    entries: colorfulBackgroundEntries,
  },
  "from-horizontal": {
    entries: colorfulBackgroundEntries,
  },
  "removeShoes": false,
} as const satisfies BackgroundDefine;

const colorfulHeartBackgroundStanding = {
  "backgroundType": `standing`,
  "from-above": {
    entries: colorfulHeartBackgroundEntries,
  },
  "from-below": {
    entries: colorfulHeartBackgroundEntries,
  },
  "from-horizontal": {
    entries: colorfulHeartBackgroundEntries,
  },
  "removeShoes": false,
} as const satisfies BackgroundDefine;

const wedding = (backgroundType: BackgroundType) =>
  ({
    backgroundType,
    "from-above": {
      entries: [`wedding`, `petals`, `white background`, `falling petals`],
    },
    "from-below": {
      entries: [`wedding`, `petals`, `white background`, `falling petals`],
    },
    "from-horizontal": {
      entries: [`wedding`, `petals`, `white background`, `falling petals`],
    },
    "removeShoes": false,
  }) as const satisfies BackgroundDefine;

const christmas = (backgroundType: BackgroundType) =>
  ({
    backgroundType,
    "from-above": {
      entries: [`indoors`, `christmas`, `christmas present`],
    },
    "from-below": {
      entries: [`indoors`, `christmas`, `christmas tree`],
    },
    "from-horizontal": {
      entries: [`indoors`, `christmas`, `christmas tree`],
    },
    "removeShoes": true,
  }) as const satisfies BackgroundDefine;

const karaokeBoxEntries = (backgroundType: BackgroundType) =>
  [
    `indoors`,
    `karaoke`,
    `karaoke-box`,
    ...(backgroundType === `sitting-on`
      ? ([`couch`, `on couch`] as const)
      : []),
  ] as const satisfies NormalEntry<BackgroundTag>[];

const karaokeBox = (backgroundType: BackgroundType) =>
  ({
    backgroundType,
    "from-above": {
      entries: karaokeBoxEntries(backgroundType),
    },
    "from-below": {
      entries: karaokeBoxEntries(backgroundType),
    },
    "from-horizontal": {
      entries: karaokeBoxEntries(backgroundType),
    },
    "removeShoes": false,
  }) as const satisfies BackgroundDefine;

export const backgroundTable = {
  "cafe": {
    "backgroundType": `standing`,
    "from-horizontal": { entries: [`indoors`, `cafe`, `window`] },
    "removeShoes": false,
  },
  "ocean": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `ocean`, `blue sky`, `wet`, `partially submerged`],
    },
    "from-below": { entries: [`outdoors`, `blue sky`, `ocean`] }, // TODO: splashing
    "from-horizontal": {
      entries: [`outdoors`, `ocean`, `blue sky`, `wet`, `partially submerged`],
    },
    "removeShoes": false,
  },
  "beach-standing": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `beach`],
    },
    "from-below": {
      entries: [
        `outdoors`,
        `beach`,
        [{ entries: [`blue sky`] }, { entries: [`sunset`, `orange sky`] }],
      ],
    },
    "from-horizontal": {
      entries: [
        `outdoors`,
        `beach`,
        [{ entries: [`blue sky`] }, { entries: [`sunset`, `orange sky`] }],
      ],
    },
    "removeShoes": false,
  },
  "beach-near-clean-floor": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [`outdoors`, `beach`],
    },
    "from-below": {
      entries: [
        `outdoors`,
        `beach`,
        `palm tree`,
        [{ entries: [`blue sky`] }, { entries: [`sunset`, `orange sky`] }],
      ],
    },
    "from-horizontal": {
      entries: [
        `outdoors`,
        `beach`,
        `palm tree`,
        [{ entries: [`blue sky`] }, { entries: [`sunset`, `orange sky`] }],
      ],
    },
    "removeShoes": false,
  },
  "colorful-backgrounds-standing": colorfulBackgroundStanding,
  "colorful-heart-backgrounds-standing": colorfulHeartBackgroundStanding,
  "colorful-backgrounds-near-clean-floor": {
    ...colorfulBackgroundStanding,
    backgroundType: `near-clean-floor`,
  },
  "colorful-heart-backgrounds-near-clean-floor": {
    ...colorfulHeartBackgroundStanding,
    backgroundType: `near-clean-floor`,
  },
  "steaming-bed-sheet": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [`bed sheet`, `sweat`, `steam`, `steaming body`, `on bed`],
    },
    "from-horizontal": {
      entries: [`bed sheet`, `sweat`, `steam`, `steaming body`, `on bed`],
    },
    "removeShoes": true,
  },
  "grass-blue-sky": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `grass`],
    },
    "from-below": {
      entries: [`outdoors`, `grass`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `grass`, `blue sky`],
    },
    "removeShoes": false,
  },
  "grass": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [`outdoors`, `grass`],
    },
    "from-below": {
      entries: [`outdoors`, `grass`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `grass`, `blue sky`],
    },
    "removeShoes": false,
  },
  "casino": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`indoors`, `casino`, `playing card`],
    },
    "from-below": {
      entries: [`indoors`, `casino`, `playing card`, `ceiling`],
    },
    "from-horizontal": {
      entries: [`indoors`, `casino`, `playing card`],
    },
    "removeShoes": false,
  },
  "city": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `city`, `day`, `road`],
    },
    "from-below": {
      entries: [`outdoors`, `city`, `day`, `building`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `city`, `day`],
    },
    "removeShoes": false,
  },
  "wedding-standing": wedding(`standing`),
  "wedding-near-clean-floor": wedding(`near-clean-floor`),
  "christmas-standing": christmas(`standing`),
  "christmas-near-clean-floor": christmas(`near-clean-floor`),
  "classroom-chalkboard": {
    "backgroundType": `standing`,
    "from-below": {
      entries: [`indoors`, `classroom`, `chalkboard`],
    },
    "from-horizontal": {
      entries: [`indoors`, `classroom`, `chalkboard`],
    },
    "removeShoes": false,
  },
  "classroom-window": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`indoors`, `classroom`, `window`, `school desk`],
    },
    "from-below": {
      entries: [`indoors`, `classroom`, `window`, `school desk`],
    },
    "from-horizontal": {
      entries: [`indoors`, `classroom`, `window`, `school desk`],
    },
    "removeShoes": false,
  },
  "karaoke-box-standing": karaokeBox(`standing`),
  "karaoke-box-sitting-on": karaokeBox(`sitting-on`),
  "night-rooftop": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `cityscape`, `city lights`, `rooftop`, `night`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `cityscape`, `city lights`, `rooftop`, `night`],
    },
    "removeShoes": false,
  },
  "night-moon": {
    "backgroundType": `standing`,
    "from-below": {
      entries: [`night`, `night sky`, `moon`],
    },
    "removeShoes": false,
  },
  "blue-sky-confetti-for-cheering": {
    "backgroundType": `standing`,
    "from-below": {
      entries: [`outdoors`, `blue sky`, `confetti`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `blue sky`, `confetti`],
    },
    "removeShoes": false,
  },
  "sun-sky": {
    "backgroundType": `standing`,
    "from-below": {
      entries: [
        `outdoors`,
        [{ entries: [`blue sky`] }, { entries: [`sunset`, `orange sky`] }],
      ],
    },
    "from-horizontal": {
      entries: [
        `outdoors`,
        [{ entries: [`blue sky`] }, { entries: [`sunset`, `orange sky`] }],
      ],
    },
    "removeShoes": false,
  },
  "volleyball-gym-standing": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [
        `indoors`,
        `volleyball`,
        `gym`,
        `volleyball net`,
        `wooden floor`,
      ],
    },
    "from-below": {
      entries: [
        `indoors`,
        `volleyball`,
        `gym`,
        `volleyball net`,
        `blurry background`,
      ],
    },
    "from-horizontal": {
      entries: [
        `indoors`,
        `volleyball`,
        `gym`,
        `volleyball net`,
        `wooden floor`,
        `blurry background`,
      ],
    },
    "removeShoes": false,
  },
  "volleyball-gym-near-clean-floor": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [`indoors`, `volleyball`, `gym`, `wooden floor`],
    },
    "from-below": {
      entries: [
        `indoors`,
        `volleyball`,
        `gym`,
        `volleyball net`,
        `blurry background`,
      ],
    },
    "from-horizontal": {
      entries: [
        `indoors`,
        `volleyball`,
        `gym`,
        `volleyball net`,
        `wooden floor`,
        `blurry background`,
      ],
    },
    "removeShoes": false,
  },
  "gym-storeroom-standing": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`],
    },
    "from-below": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`],
    },
    "from-horizontal": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`],
    },
    "removeShoes": false,
  },
  "gym-storeroom-near-clean-floor": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [`indoors`, `gym storeroom`, `mat`],
    },
    "from-below": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`, `mat`],
    },
    "from-horizontal": {
      entries: [`indoors`, `gym storeroom`, `vaulting horse`, `mat`],
    },
    "removeShoes": false,
  },
  "garden": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `garden`, `flower`],
    },
    "from-below": {
      entries: [`outdoors`, `garden`, `flower`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `garden`, `flower`, `blue sky`],
    },
    "removeShoes": false,
  },
  "poolside-standing": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `pool`, `poolside`, `wet`, `partially submerged`],
    },
    "from-below": {
      entries: [`outdoors`, `pool`, `poolside`, `wet`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `pool`, `poolside`, `wet`],
    },
    "removeShoes": false,
  },
  "poolside-near-clean-floor": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [`outdoors`, `poolside`, `wet`],
    },
    "from-below": {
      entries: [`outdoors`, `poolside`, `wet`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `pool`, `poolside`, `wet`, `water`],
    },
    "removeShoes": false,
  },
  "onsen-standing": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`],
    },
    "from-below": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`],
    },
    "removeShoes": false,
  },
  "onsen-near-clean-floor": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`],
    },
    "from-below": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`, `blue sky`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `onsen`, `wet`, `steam`],
    },
    "removeShoes": false,
  },
  "race-confetti": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `road`, `tire`, `confetti`],
    },
    "from-below": {
      entries: [`outdoors`, `blue sky`, `confetti`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `road`, `tire`, `confetti`, `blue sky`],
    },
    "removeShoes": false,
  },
  "bedroom-standing": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`indoors`, `carpet`, `pink carpet`, `bed`],
    },
    "from-below": {
      entries: [`indoors`, `ceiling`, `ceiling light`],
    },
    "from-horizontal": {
      entries: [`indoors`, `carpet`, `pink carpet`, `bed`, `window`],
    },
    "removeShoes": true,
  },
  "bedroom-near-clean-floor": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [`indoors`, `carpet`, `pink carpet`, `bed`],
    },
    "from-below": {
      entries: [`indoors`, `ceiling`, `ceiling light`],
    },
    "from-horizontal": {
      entries: [`indoors`, `carpet`, `pink carpet`, `bed`, `window`],
    },
    "removeShoes": true,
  },
  // "bedroom-sitting-on": {
  //   "backgroundType": `sitting-on`,
  //   "from-above": {
  //     entries: [
  //       `indoors`,
  //       `carpet`,
  //       `pink carpet`,
  //       `bed`,
  //       `on floor`,
  //       // [{ entries: [`on floor`] }, { entries: [`on bed`] }], // TODO: bug
  //     ],
  //   },
  //   "from-below": {
  //     entries: [
  //       `indoors`,
  //       `ceiling`,
  //       `ceiling light`,
  //       `on floor`,
  //       // [{ entries: [`on floor`] }, { entries: [`on bed`] }],
  //     ],
  //   },
  //   "from-horizontal": {
  //     entries: [
  //       `indoors`,
  //       `carpet`,
  //       `pink carpet`,
  //       `bed`,
  //       `window`,
  //       `on floor`,
  //       // [{ entries: [`on floor`] }, { entries: [`on bed`] }],
  //     ],
  //   },
  //   "removeShoes": true,
  // },
  "red-curtains-bed": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [`bed sheet`, `red curtains`, `pillow`],
    },
    "from-below": {
      entries: [`bed`, `red curtains`],
    },
    "from-horizontal": {
      entries: [`bed sheet`, `red curtains`, `pillow`, `lamp`],
    },
    "removeShoes": true,
  },
  "tennis-court-standing": {
    "backgroundType": `standing`,
    "from-above": {
      entries: [`outdoors`, `tennis court`],
    },
    "from-below": {
      entries: [`outdoors`, `fence`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `tennis court`, `fence`],
    },
    "removeShoes": false,
  },
  "tennis-court-near-clean-floor": {
    "backgroundType": `near-clean-floor`,
    "from-above": {
      entries: [`outdoors`, `tennis court`],
    },
    "from-horizontal": {
      entries: [`outdoors`, `tennis court`, `tennis net`],
    },
    "removeShoes": false,
  },
} as const satisfies Record<string, BackgroundDefine>;

export type BackgroundKey = keyof typeof backgroundTable;
