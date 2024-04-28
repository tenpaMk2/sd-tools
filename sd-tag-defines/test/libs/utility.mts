import { expect } from "vitest";

export const isSetsEqual = <T,>(a: Set<T>, b: Set<T>) => {
  if (a.size !== b.size) {
    return false;
  }

  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }

  return true;
};

export const testDuplication = <T extends string>(
  tags: readonly T[],
  tagsName: string,
) => {
  const counts = tags.reduce(
    (m, tag) => m.set(tag, (m.get(tag) ?? 0) + 1),
    new Map<T, number>(),
  );

  for (const [tag, count] of counts.entries()) {
    expect(count, `"${tag}" is duplicated in \`${tagsName}\`.`).toBe(1);
  }
};

export const testComma = <T extends string>(
  tags: readonly T[],
  tagsName: string,
) => {
  for (const tag of tags) {
    expect(
      tag.includes(`,`),
      `"${tag}" includes \`,\` in \`${tagsName}\` .`,
    ).toBe(false);
  }
};
