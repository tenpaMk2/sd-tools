import { PoseSetting } from "../setting-define.mjs";

export const fromAbovePosesPreset = {
  usual: [
    { key: `from-side-looking-ahead` },
    { key: `grabbing-own-breasts` },
    { key: `paw-pose` },
    { key: `shushing` },
    { key: `standing` },
    { key: `hands-on-own-chest` },
  ],
  onFloor: [
    // { key: `full-body-lying` }, // Exlude because not good image.
    { key: `lying-on-stomach` },
    { key: `lying-reaching-towards-viewer` },
    { key: `lying` },
    { key: `wariza` },
  ],
  onBed: [
    { key: `on-bed-lying-on-stomach` },
    { key: `on-bed-lying-reaching-towards-viewer` },
    { key: `on-bed-lying` },
    { key: `on-bed-wariza` },
  ],
  wedding: [{ key: `holding-bouquet` }],
} as const satisfies {
  [k in string]: PoseSetting<"from-above">[];
};

export const fromBelowPosesPreset = {
  usual: [
    { key: `arms-up` },
    { key: `from-side` },
    { key: `from-side-profile` },
    { key: `paw-pose` },
    { key: `squatting` },
    { key: `upper-body` },
  ],
  cheering: [{ key: `cheering-with-pom-poms` }],
  wedding: [{ key: `holding-bouquet` }],
} as const satisfies {
  [k in string]: PoseSetting<"from-below">[];
};

export const fromHorizontalPosesPreset = {
  usual: [
    { key: `arms-up` },
    { key: `contrapposto` },
    { key: `double-v` },
    { key: `from-side-looking-ahead` },
    { key: `hands-on-own-hips` },
    { key: `heart-hands` },
    { key: `paw-pose` },
    { key: `portrait` },
    { key: `twisted-torso` },
    { key: `v` },
  ],
  onFloor: [
    { key: `all-fours-from-behind` },
    { key: `all-fours` },
    { key: `kneeling-spread-legs` },
    { key: `the-pose-head-rest` },
  ],
  onBed: [
    { key: `on-bed-all-fours-from-behind` },
    { key: `on-bed-all-fours` },
    { key: `on-bed-kneeling-spread-legs` },
    { key: `on-bed-the-pose-head-rest` },
  ],
  wedding: [{ key: `holding-bouquet` }],
  singing: [{ key: `singing` }, { key: `singing-from-side` }],
  // TODO: skirt
} as const satisfies {
  [k in string]: PoseSetting<"from-horizontal">[];
};
