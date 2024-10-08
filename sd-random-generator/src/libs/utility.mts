import { createWriteStream } from "fs";

export const generateDynamicPrompt = (
  prompts: readonly string[],
  options: { lineBreak?: boolean } = { lineBreak: false },
) => `{${prompts.join(`|${options?.lineBreak ? `\n` : ``}`)}}`;

export const getKeys = <T extends { [key: string]: unknown }>(
  obj: T,
): (keyof T)[] => {
  return Object.keys(obj);
};

/**
 * Get all combinations of choices.
 * @param choices
 * @returns all combinations of choices.
 * @example getCombinations([[1, 2], [`a`, `b`, `c`]]) // [[1, 'a'], [1, 'b'], [1, 'c'], [2, 'a'], [2, 'b'], [2, 'c']]
 */
export const getCombinations = <T,>(choices: T[][]): T[][] => {
  if (choices.length === 1) {
    return choices[0].map((item) => [item]);
  }

  const result: any[][] = [];
  const allCasesOfRest = getCombinations(choices.slice(1)); // recur with the rest of array
  for (const a of allCasesOfRest) {
    for (const b of choices[0]) {
      result.push([b, ...a]);
    }
  }
  return result;
};

/**
 * Split an array into chunks.
 * @param array Array to split.
 * @param chunkSize Size of each chunk.
 * @returns Array of chunks.
 */
export const splitIntoChunks = <T,>(array: T[], chunkSize: number): T[][] => {
  const result = [] as T[][];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

/**
 * Export an array to a file.
 * @param path Path to the file.
 * @param array Array to export.
 */
export const exportArray = async (path: string, array: any[]) => {
  const ws = createWriteStream(path);
  for (const a of array) {
    ws.write(`${a}\n`);
  }
  ws.end();
};

/**
 * Export an array as dynamic prompts to a file.
 * @param path Path to the file.
 * @param array Array to export.
 */
export const exportAsDynamicPrompts = async (path: string, array: any[]) => {
  const ws = createWriteStream(path);
  for (const [index, a] of array.entries()) {
    if (index === 0) {
      ws.write(`{${a}\n`);
    } else if (index === array.length - 1) {
      ws.write(`${a}}`);
    } else {
      ws.write(`|${a}\n`);
    }
  }
  ws.end();
};

export const isNullrishOrEmptyArray = (
  value: unknown,
): value is null | undefined | [] =>
  value === null ||
  value === undefined ||
  (Array.isArray(value) && value.length === 0);

// TODO: Use this in other places.
export const pickRandomly = <T extends { probability: number }>(items: T[]) => {
  if (items.length === 0)
    throw new Error(`Unexpected error: Cannot pick because of no items.`);

  const total = items.reduce((acc, item) => acc + item.probability, 0);

  const random = Math.random();
  let sum = 0;
  for (const item of items) {
    sum += item.probability;
    if (random <= sum / total) return item;
  }
  throw new Error(`Unexpected error: No item was picked.`);
};

export const fetchWithRetry = async (
  input: Parameters<typeof fetch>[0],
  init?: Parameters<typeof fetch>[1],
) => {
  let retryCount = 0;
  do {
    try {
      return await fetch(input, init);
    } catch (error) {
      console.error(`Failed to fetch: ${error}`);
      retryCount++;
    }
  } while (retryCount < 3);

  throw new Error(`Failed to fetch after 3 retries.`);
};
