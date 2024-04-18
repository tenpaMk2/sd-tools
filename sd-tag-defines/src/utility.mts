/**
 * Returns the keys of an object
 * @param obj The object to get the keys of
 * @returns The keys of the object
 */
export const getKeys = <T extends { [key: string]: unknown }>(
  obj: T,
): (keyof T)[] => {
  return Object.keys(obj);
};
