export const allCameraTags = [
  `armpit focus`,
  `ass focus`,
  `breasts`,
  `close-up`,
  `cowboy shot`,
  `dutch angle`,
  `fisheye`,
  `foreshortening`,
  `from above`,
  `from behind`,
  `from below`,
  `from side`,
  `full body`,
  `portrait`,
  `pov`,
  `straight-on`,
  `thighs`,
  `upper body`,
] as const satisfies readonly string[];
export type CameraTag = (typeof allCameraTags)[number];
