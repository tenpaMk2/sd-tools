const allHairColorTags = [
  `aqua hair`,
  `black hair`,
  `blonde hair`,
  `blue hair`,
  `brown hair`,
  `dark blue hair`,
  `dark green hair`,
  `green hair`,
  `grey hair`,
  `light blue hair`,
  `light brown hair`,
  `light green hair`,
  `light purple hair`,
  `multicolored hair`,
  `orange hair`,
  `pink hair`,
  `purple hair`,
  `red hair`,
  `streaked hair`,
  `two-tone hair`,
  `white hair`,
] as const satisfies readonly string[];

const allHairLengthTags = [
  `short hair`,
  `medium hair`,
  `long hair`,
  `very long hair`,
  `absurdly long hair`,
] as const satisfies readonly string[];

export const allHairTags = [
  ...allHairColorTags,
  ...allHairLengthTags,
  `ahoge`,
  `alternate hairstyle`,
  `antenna hair`,
  `arched bangs`,
  `asymmetrical bangs`,
  `asymmetrical hair`,
  `asymmetrical sidelocks`,
  `bangs pinned back`,
  `blunt bangs`,
  `blunt ends`,
  `bob cut`,
  `bow-shaped hair`,
  `braid`,
  `braided bangs`,
  `braided bun`,
  `braided ponytail`,
  `center-flap bangs`,
  `colored inner hair`,
  `cone hair bun`,
  `crossed bangs`,
  `crown braid`,
  `curly hair`,
  `curtained bangs`,
  `diagonal bangs`,
  `double bun`,
  `doughnut hair bun`,
  `dreadlocks`,
  `drill hair`,
  `drill sidelocks`,
  `dyed bangs`,
  `flipped hair`,
  `flower-shaped hair`,
  `folded ponytail`,
  `frentch braid`,
  `front braid`,
  `gradient hair`,
  `hair between eyes`,
  `hair bun`,
  `hair down`,
  `hair flaps`,
  `hair intakes`,
  `hair over eyes`,
  `hair over one eye`,
  `hair over shoulder`,
  `hair pulled back`,
  `hair rings`,
  `hair slicked back`,
  `hair up`,
  `half updo`,
  `heart ahoge`,
  `heart antenna hair`,
  `heart hair bun`,
  `high ponytail`,
  `hime cut`,
  `huge ahoge`,
  `inverted bob`,
  `long bangs`,
  `low ponytail`,
  `low tied sidelocks`,
  `low twin braids`,
  `low twintails`,
  `low-braided long hair`,
  `low-tied long hair`,
  `messy hair`,
  `mizura`,
  `multi-tied-hair`,
  `multiple braids`,
  `one side up`,
  `parted bangs`,
  `pixie cut`,
  `pointy hair`,
  `ponytail`,
  `ringlets`,
  `short hair with long locks`,
  `short ponytail`,
  `short twintails`,
  `side braid`,
  `side ponytail`,
  `sidelocks`,
  `single braid`,
  `single hair bun`,
  `single hair intake`,
  `single hair ring`,
  `single sidelock`,
  `split ponytail`,
  `straight hair`,
  `swept bangs`,
  `topknot`,
  `tri braids`,
  `tri tails`,
  `triple bun`,
  `twin braids`,
  `twin drills`,
  `twintails`,
  `two side up`,
  `undercut`,
  `wavy hair`,
  `wide ponytail`,
] as const satisfies readonly string[];
export type HairTag = (typeof allHairTags)[number];