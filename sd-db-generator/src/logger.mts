import { cyan, yellow } from "picocolors";

const PADDING_DIGITS = 8;

export const log = (str: string) => {
  console.log(`${cyan(`LOG`.padEnd(PADDING_DIGITS, ` `) + `|`)} ${str}`);
};

export const warn = (str: string) => {
  console.warn(`${yellow(`WARN`.padEnd(PADDING_DIGITS, ` `) + `|`)} ${str}`);
};
