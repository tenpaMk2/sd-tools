import picocolors from "picocolors";

const PADDING_DIGITS = 8;

export const log = (str: string) => {
  console.log(
    `${picocolors.cyan(`LOG`.padEnd(PADDING_DIGITS, ` `) + `|`)} ${str}`,
  );
};

export const warn = (str: string) => {
  console.warn(
    `${picocolors.yellow(`WARN`.padEnd(PADDING_DIGITS, ` `) + `|`)} ${str}`,
  );
};
