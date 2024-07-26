import type { BackgroundTag } from "@tenpamk2/sd-tag-defines";
import type { TagEntry } from "../../entry.mjs";
import { bar } from "./common/bar.mjs";
import { beach } from "./common/beach.mjs";
import { bedSheet } from "./common/bed-sheet.mjs";
import { bedroom } from "./common/bedroom.mjs";
import { blueSkyConfetti } from "./common/blue-sky-confetti.mjs";
import { bookshelf } from "./common/bookshelf.mjs";
import { cafe } from "./common/cafe.mjs";
import { casino } from "./common/casino.mjs";
import { christmas } from "./common/christmas.mjs";
import { city } from "./common/city.mjs";
import { classroom } from "./common/classroom.mjs";
import { colorfulBackground } from "./common/colorful-background.mjs";
import { garden } from "./common/garden.mjs";
import { grass } from "./common/grass.mjs";
import { gymStoreroom } from "./common/gym-storeroom.mjs";
import { gym } from "./common/gym.mjs";
import { karaokeBox } from "./common/karaoke-box.mjs";
import { nightMoon } from "./common/night-moon.mjs";
import { nightRooftop } from "./common/night-rooftop.mjs";
import { ocean } from "./common/ocean.mjs";
import { office } from "./common/office.mjs";
import { onsen } from "./common/onsen.mjs";
import { poolside } from "./common/poolside.mjs";
import { racingCircuit } from "./common/racing-circuits.mjs";
import { sky } from "./common/sky.mjs";
import { sweatWhiteBackground } from "./common/sweat-white-background.mjs";
import { tatami } from "./common/tatami.mjs";
import { tennisCourt } from "./common/tennis-court.mjs";
import { wedding } from "./common/wedding.mjs";

export type CameraAngle = `from-above` | `from-below` | `from-horizontal`;
export type BackgroundType = `standing` | `near-clean-floor` | `sitting-on`;
export type BackgroundEntries = TagEntry<BackgroundTag>[];

export type BackgroundDefine = Partial<
  Record<
    CameraAngle,
    {
      entries: BackgroundEntries;
    }
  >
> & {
  backgroundType: BackgroundType;
  removeShoes: boolean;
};

export const backgroundTable = {
  "bar-sitting-on": bar({ backgroundType: `sitting-on` }),
  "bar-standing": bar({ backgroundType: `standing` }),
  "beach-near-clean-floor": beach({ backgroundType: `near-clean-floor` }),
  "beach-sitting-on": beach({ backgroundType: `sitting-on` }),
  "beach-standing": beach({ backgroundType: `standing` }),
  "bedroom-near-clean-floor": bedroom({ backgroundType: `near-clean-floor` }),
  "bedroom-sitting-on": bedroom({ backgroundType: `sitting-on` }),
  "bedroom-standing": bedroom({ backgroundType: `standing` }),
  "bed-sheet-red-curtains-near-clean-floor": bedSheet({
    variation: `red-curtains`,
    backgroundType: `near-clean-floor`,
  }),
  "bed-sheet-steaming-near-clean-floor": bedSheet({
    variation: `steaming`,
    backgroundType: `near-clean-floor`,
  }),
  "blue-sky-confetti-standing-for-cheering": blueSkyConfetti({
    backgroundType: `standing`,
  }),
  "blue-sky-confetti-standing": blueSkyConfetti({ backgroundType: `standing` }),
  "bookshelf-near-clean-floor": bookshelf({
    backgroundType: `near-clean-floor`,
  }),
  "bookshelf-sitting-on": bookshelf({ backgroundType: `sitting-on` }),
  "bookshelf-standing": bookshelf({ backgroundType: `standing` }),
  "cafe-standing": cafe({ backgroundType: `standing` }), // TODO: Add `cafe-sitting-on` .
  "casino-sitting-on": casino({ backgroundType: `sitting-on` }),
  "casino-standing": casino({ backgroundType: `standing` }),
  "christmas-near-clean-floor": christmas({
    backgroundType: `near-clean-floor`,
  }),
  "christmas-standing": christmas({ backgroundType: `standing` }),
  "city-sitting-on": city({ backgroundType: `sitting-on` }),
  "city-standing": city({ backgroundType: `standing` }),
  "classroom-chalkboard-sitting-on": classroom({
    variation: `chalkboard`,
    backgroundType: `sitting-on`,
  }),
  "classroom-chalkboard-standing": classroom({
    variation: `chalkboard`,
    backgroundType: `standing`,
  }),
  "classroom-window-sitting-on": classroom({
    variation: `window`,
    backgroundType: `sitting-on`,
  }),
  "classroom-window-standing": classroom({
    variation: `window`,
    backgroundType: `standing`,
  }),
  "colorful-background-near-clean-floor": colorfulBackground({
    variation: `normal`,
    backgroundType: `near-clean-floor`,
  }),
  "colorful-background-sitting-on": colorfulBackground({
    variation: `normal`,
    backgroundType: `sitting-on`,
  }),
  "colorful-background-standing": colorfulBackground({
    variation: `normal`,
    backgroundType: `standing`,
  }),
  "colorful-heart-background-near-clean-floor": colorfulBackground({
    variation: `heart`,
    backgroundType: `near-clean-floor`,
  }),
  "colorful-heart-background-sitting-on": colorfulBackground({
    variation: `heart`,
    backgroundType: `sitting-on`,
  }),
  "colorful-heart-background-standing": colorfulBackground({
    variation: `heart`,
    backgroundType: `standing`,
  }),
  "garden-sitting-on": garden({
    backgroundType: `sitting-on`,
  }),
  "garden-standing": garden({
    backgroundType: `standing`,
  }),
  "gym-volleyball-near-clean-floor": gym({
    variation: `volleyball`,
    backgroundType: `near-clean-floor`,
  }),
  "gym-volleyball-standing": gym({
    variation: `volleyball`,
    backgroundType: `standing`,
  }),
  "gym-storeroom-near-clean-floor": gymStoreroom({
    backgroundType: `near-clean-floor`,
  }),
  "gym-storeroom-sitting-on": gymStoreroom({
    backgroundType: `sitting-on`,
  }),
  "gym-storeroom-standing": gymStoreroom({
    backgroundType: `standing`,
  }),
  "grass-near-clean-floor": grass({ backgroundType: `near-clean-floor` }),
  "grass-sitting-on": grass({ backgroundType: `sitting-on` }),
  "grass-standing": grass({ backgroundType: `standing` }),
  "karaoke-box-sitting-on": karaokeBox({ backgroundType: `sitting-on` }),
  "karaoke-box-standing": karaokeBox({ backgroundType: `standing` }),
  "night-rooftop-standing": nightRooftop({ backgroundType: `standing` }),
  "night-moon-sitting-on": nightMoon({ backgroundType: `sitting-on` }),
  "night-moon-standing": nightMoon({ backgroundType: `standing` }),
  "onsen-near-clean-floor": onsen({ backgroundType: `near-clean-floor` }),
  "onsen-sitting-on": onsen({ backgroundType: `sitting-on` }),
  "onsen-standing": onsen({ backgroundType: `standing` }),
  "ocean-standing": ocean({ backgroundType: `standing` }),
  "office-sitting-on": office({ backgroundType: `sitting-on` }),
  "office-standing": office({ backgroundType: `standing` }),
  "poolside-near-clean-floor": poolside({ backgroundType: `near-clean-floor` }),
  "poolside-sitting-on": poolside({ backgroundType: `sitting-on` }),
  "poolside-standing": poolside({ backgroundType: `standing` }),
  "racing-circuit-sitting-on": racingCircuit({ backgroundType: `sitting-on` }),
  "racing-circuit-standing": racingCircuit({ backgroundType: `standing` }),
  "sky-blue-sky-standing": sky({
    variation: `blue-sky`,
    backgroundType: `standing`,
  }),
  "sky-orange-sky-standing": sky({
    variation: `orange-sky`,
    backgroundType: `standing`,
  }),
  "sweat-white-background-near-clean-floor": sweatWhiteBackground({
    variation: `normal`,
    backgroundType: `near-clean-floor`,
  }),
  "sweat-white-background-sitting-on": sweatWhiteBackground({
    variation: `normal`,
    backgroundType: `sitting-on`,
  }),
  "sweat-white-background-standing-for-armpit": sweatWhiteBackground({
    variation: `normal`,
    backgroundType: `standing`,
  }),
  "sweat-white-background-standing": sweatWhiteBackground({
    variation: `normal`,
    backgroundType: `standing`,
  }),
  "tatami-near-clean-floor": tatami({ backgroundType: `near-clean-floor` }),
  "tatami-sitting-on": tatami({ backgroundType: `sitting-on` }),
  "tennis-court-near-clean-floor": tennisCourt({
    backgroundType: `near-clean-floor`,
  }),
  "tennis-court-sitting-on": tennisCourt({ backgroundType: `sitting-on` }),
  "tennis-court-standing": tennisCourt({ backgroundType: `standing` }),
  "wedding-standing": wedding({ backgroundType: `standing` }),
  "wedding-near-clean-floor": wedding({ backgroundType: `near-clean-floor` }),
  "wedding-sitting-on": wedding({ backgroundType: `sitting-on` }),
  "bedroom-for-undressing": bedroom({ backgroundType: `standing` }),
} as const satisfies Record<string, BackgroundDefine>;

export type BackgroundTable = typeof backgroundTable;
export type BackgroundKey = keyof BackgroundTable;
