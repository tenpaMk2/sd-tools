import { NormalEntry } from "../../prompt-define.mjs";
import { OutfitTag } from "../../tag-defines/adapter.mjs";

export const upskirtPreset = {
  colorfulPanties: [
    `underwear`,
    `panties`,
    `crotch seam`,
    [
      { entries: [`aqua panties`] },
      { entries: [`black panties`] },
      { entries: [`blue panties`] },
      // { entries: [`brown panties`] },
      { entries: [`green panties`] },
      // { entries: [`grey panties`] },
      { entries: [`orange panties`] },
      { entries: [`pink panties`] },
      { entries: [`purple panties`] },
      { entries: [`red panties`] },
      { entries: [`white panties`] },
      { entries: [`yellow panties`] },
    ],
  ],
  monochromePanties: [
    `underwear`,
    `panties`,
    `crotch seam`,
    [{ entries: [`black panties`] }, { entries: [`white panties`] }],
  ],
  vividPanties: [
    `underwear`,
    `panties`,
    `crotch seam`,
    [
      { entries: [`aqua panties`] },
      { entries: [`blue panties`] },
      { entries: [`green panties`] },
      { entries: [`orange panties`] },
      { entries: [`pink panties`] },
      { entries: [`purple panties`] },
      { entries: [`red panties`] },
      { entries: [`yellow panties`] },
    ],
  ],
  pantiesUnderPantyhose: [
    `panties under pantyhose`,
    `underwear`,
    `panties`,
    `crotch seam`,
    [{ entries: [`white panties`] }, { entries: [`black panties`] }],
  ],
  whitePanties: [`underwear`, `panties`, `crotch seam`, `white panties`],
  pinkPanties: [`underwear`, `panties`, `crotch seam`, `pink panties`],
  redPanties: [`underwear`, `panties`, `crotch seam`, `red panties`],
} as const satisfies {
  [k in string]: NormalEntry<OutfitTag>[];
};

// TODO: Move this file to anywhere.
