import { SingleBar } from "cli-progress";
import { blue, cyan, magenta, yellow } from "picocolors";

const paddingDigits = 8;

export const log = (str: string) => {
  console.log(`${cyan(`LOG`.padEnd(paddingDigits, ` `) + `|`)} ${str}`);
};

export const warn = (str: string) => {
  console.warn(`${yellow(`WARN`.padEnd(paddingDigits, ` `) + `|`)} ${str}`);
};

export class ProgressBar {
  readonly progress: SingleBar;

  constructor() {
    this.progress = new SingleBar({
      format:
        magenta(`PROGRESS`.padEnd(paddingDigits, ` `) + `|`) +
        blue(` {bar} | ETA: {etaSecond}s`),
      barCompleteChar: "\u2588",
      barIncompleteChar: "\u2591",
    });

    this.progress.start(1, 0, {
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
