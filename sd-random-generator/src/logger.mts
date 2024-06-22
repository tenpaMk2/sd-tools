import { SingleBar } from "cli-progress";
import picocolors from "picocolors";

const paddingDigits = 8;

export const log = (str: string) => {
  console.log(
    `${picocolors.cyan(`LOG`.padEnd(paddingDigits, ` `) + `|`)} ${str}`,
  );
};

export const warn = (str: string) => {
  console.warn(
    `${picocolors.yellow(`WARN`.padEnd(paddingDigits, ` `) + `|`)} ${str}`,
  );
};

export class ProgressBar {
  readonly maxProgress = 1;
  readonly progress: SingleBar;

  constructor() {
    this.progress = new SingleBar({
      format:
        picocolors.magenta(`PROGRESS`.padEnd(paddingDigits, ` `) + `|`) +
        picocolors.blue(` {bar} | ETA: {etaSecond}s`),
      barCompleteChar: "\u2588",
      barIncompleteChar: "\u2591",
    });

    this.progress.start(this.maxProgress, 0, {
      etaSecond: "N/A",
    });
  }

  update(progress: number, etaSecond: number) {
    this.progress.update(progress, {
      etaSecond: Math.floor(etaSecond),
    });
  }

  stop() {
    this.progress.stop();
  }
}
