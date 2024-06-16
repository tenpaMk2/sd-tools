import {
  DistinguishableTag,
  LoraEntry,
  LoraName,
  Tag,
  TagEntry,
} from "@tenpamk2/sd-db-generator";
import { Database } from "./db.mjs";

/**
 * Token definition.
 */
export class Token<T extends Tag> {
  readonly tag: T;
  readonly weight: number;

  constructor({ tag, weight }: { tag: T; weight?: number }) {
    this.tag = tag;
    this.weight = weight ?? 1.0; // `weight` can be negative.
  }

  toString() {
    // Resolve tag name if it's a distinguishable tag.
    const distinguishableTagTable =
      Database.singleton().distinguishableTagTable;
    const tag =
      distinguishableTagTable[this.tag as DistinguishableTag] ?? this.tag;

    return this.weight === 1.0 ? tag : `${tag}:${this.weight}`;
  }
}

export class Pattern<T extends Tag> {
  readonly tokens: Token<T>[];
  readonly probability: number;

  constructor({
    tokens,
    probability,
    asSymlink,
  }: {
    tokens: Token<T>[];
    probability?: number;
    /**
     * Create without deep copy of tokens. No duplication check.
     * It's efficient for times and memories.
     */
    asSymlink?: boolean;
  }) {
    if (asSymlink) {
      this.tokens = tokens;
      this.probability = probability ?? 1.0;
      return;
    }

    const isDuplicate =
      new Set(tokens.map((t) => t.tag)).size !== tokens.length;

    if (!isDuplicate) {
      this.tokens = tokens;
      this.probability = probability ?? 1.0;
      return;
    }

    const uniques = tokens.reduce((previous, current) => {
      if (!previous.has(current.tag)) return previous.set(current.tag, current);

      const existing = previous.get(current.tag)!;
      if (existing.weight < current.weight)
        return previous.set(current.tag, current);

      return previous;
    }, new Map<T, Token<T>>());

    this.tokens = [...uniques.values()];
    this.probability = probability ?? 1.0;
  }

  filter(callback: (token: Token<T>) => boolean) {
    return new Pattern<T>({
      tokens: this.tokens.filter(callback),
      probability: this.probability,
    });
  }

  concat<U extends Tag>(items: Token<U>[]) {
    return new Pattern<T | U>({
      tokens: [...this.tokens, ...items],
      probability: this.probability,
    });
  }

  toPrompt() {
    const distinguishableTagTable =
      Database.singleton().distinguishableTagTable;

    const resolvedTokens = this.tokens.map(
      (token) =>
        ({
          tag: (distinguishableTagTable[token.tag as DistinguishableTag] ??
            token.tag) as T,
          weight: token.weight,
          type: `normal`,
          token,
        }) as const,
    );
    const isDuplicate =
      new Set(resolvedTokens.map((t) => t.tag)).size !== resolvedTokens.length;

    if (!isDuplicate) {
      return this.tokens.map((token) => token.toString()).join(`, `);
    }

    const uniques = resolvedTokens.reduce((previous, current) => {
      if (!previous.has(current.tag)) return previous.set(current.tag, current);

      const existing = previous.get(current.tag)!;
      if (existing.weight < current.weight)
        return previous.set(current.tag, current);

      return previous;
    }, new Map<(typeof resolvedTokens)[number]["tag"], (typeof resolvedTokens)[number]>());

    return [...uniques.values()]
      .map(({ token }) => token.toString())
      .join(`, `);
  }

  toString() {
    const roundedProbability = Math.round(this.probability * 1000000) / 1000000;
    const padded = roundedProbability.toString().padEnd(10, `0`);
    return `${padded}: ${this.toPrompt()}`;
  }
}

export class PatternCollection<T extends Tag> {
  constructor(readonly patterns: Pattern<T>[]) {
    const totalProbability = patterns.reduce(
      (prev, current) => prev + current.probability,
      0,
    );

    this.patterns = patterns
      .filter(({ probability }) => probability !== 0)
      .map(
        ({ tokens, probability }) =>
          new Pattern<T>({
            tokens,
            probability: probability / totalProbability,
          }),
      );
  }

  static create<T extends Tag>(entries: TagEntry<T>[]): PatternCollection<T> {
    const createPatternCollectionRecursively = (
      entries: TagEntry<T>[],
    ): PatternCollection<T> => {
      const pcs = entries.map((entry) => {
        if (typeof entry === `string`) {
          const pattern = new Pattern<T>({
            tokens: [new Token({ tag: entry })],
          });
          return new PatternCollection<T>([pattern]);
        } else if (`tag` in entry) {
          const pattern = new Pattern<T>({
            tokens: [new Token(entry)],
          });
          return new PatternCollection<T>([pattern]);
        } else if (Array.isArray(entry)) {
          const pairs = entry.map(({ probability, entries }) => {
            const patternCollection =
              createPatternCollectionRecursively(entries);
            return {
              probability: probability ?? 1,
              patternCollection,
            };
          });

          return PatternCollection.joinAll<T>(pairs);
        } else {
          throw new Error(`Invalid entry: ${entry}`);
        }
      });
      return PatternCollection.combine<T>(pcs);
    };

    return createPatternCollectionRecursively(entries);
  }

  map(callback: (p: Pattern<T>) => Pattern<T>) {
    return new PatternCollection<T>(this.patterns.map(callback));
  }

  combineWith<U extends Tag>(patternCollection: PatternCollection<U>) {
    if (patternCollection.patterns.length === 0) return this;

    const combination = this.patterns
      .map((patternA) =>
        patternCollection.patterns.map(
          (patternB) =>
            new Pattern<T | U>({
              tokens: [...patternA.tokens, ...patternB.tokens],
              probability: patternA.probability * patternB.probability,
            }),
        ),
      )
      .flat();
    return new PatternCollection<T | U>(combination);
  }

  static combine<T extends Tag>(patternCollections: PatternCollection<T>[]) {
    if (patternCollections.length === 0) return new PatternCollection<T>([]);

    return patternCollections.reduce((previousCollection, currentCollection) =>
      previousCollection.combineWith<T>(currentCollection),
    );
  }

  static joinAll<T extends Tag>(
    pairs: { probability: number; patternCollection: PatternCollection<T> }[],
  ) {
    const totalProbability = pairs.reduce(
      (prev, current) => prev + current.probability,
      0,
    );

    const patterns = pairs
      .map(({ probability, patternCollection }) => {
        if (patternCollection.patterns.length === 0) {
          return new Pattern<T>({
            tokens: [],
            probability: probability / totalProbability,
            asSymlink: true,
          });
        }

        return patternCollection.patterns.map((p) => {
          return new Pattern<T>({
            tokens: p.tokens,
            probability: (p.probability * probability) / totalProbability,
            asSymlink: true,
          });
        });
      })
      .flat();

    return new PatternCollection<T>(patterns);
  }

  combineIf<U extends Tag>(
    callback: (p: Pattern<T>) => boolean,
    patternCollection: PatternCollection<U>,
  ) {
    const targetPatterns = this.patterns.filter(callback);
    const targetPatternsProbability = targetPatterns.reduce(
      (prev, current) => prev + current.probability,
      0,
    );
    const targetPatternCollections = new PatternCollection<T>(targetPatterns);

    const combined = targetPatternCollections.combineWith<U>(patternCollection);

    if (targetPatterns.length === this.patterns.length) return combined; // When match all patterns.

    const excludedPatterns = this.patterns.filter((p) => !callback(p));
    const excludedPatternsProbabiility = 1 - targetPatternsProbability;
    const excludedOnly = new PatternCollection<T>(excludedPatterns);

    return PatternCollection.joinAll<T | U>([
      { probability: targetPatternsProbability, patternCollection: combined },
      {
        probability: excludedPatternsProbabiility,
        patternCollection: excludedOnly,
      },
    ]);
  }

  isEmpty() {
    return this.patterns.length === 0;
  }

  pickOnePattern() {
    if (this.patterns.length === 0)
      throw new Error(`Unexpected error: Cannot pick because of no patterns.`);

    const random = Math.random();
    let sum = 0;
    for (const pattern of this.patterns) {
      sum += pattern.probability;
      if (random <= sum) return pattern;
    }
    throw new Error(`Unexpected error: No item was picked.`);
  }

  pickOnePrompt() {
    return this.pickOnePattern().toPrompt();
  }

  pickAllPrompts() {
    return this.patterns.map((p) => p.toPrompt());
  }

  static createTokensInstantly<T extends Tag>(
    entries: TagEntry<T>[],
  ): Token<T>[] {
    if (!entries || entries.length === 0) return [];

    return this.create<T>(entries).pickOnePattern().tokens;
  }

  // TODO: Fix dynamic prompts has no probability.
}

/**
 * Lora string definition.
 */
export class LoraString {
  readonly loraName: LoraName;
  readonly weight: number;

  constructor({ loraName, weight }: { loraName: LoraName; weight?: number }) {
    this.loraName = loraName;
    this.weight = weight ?? 1.0; // `weight` can be negative.
  }

  toString() {
    return `<lora:${this.loraName}:${this.weight}>`;
  }
}

/**
 * Lora picker.
 */
export class LoraPicker {
  constructor(readonly entry: LoraEntry) {
    for (const { probability } of entry.probabilityAndWeights) {
      if (probability < 0)
        throw new Error(`Error: Probability must be positive.`);
    }
  }

  pick(): LoraString {
    const totalProbability = this.entry.probabilityAndWeights.reduce(
      (prev, current) => prev + current.probability,
      0,
    );

    if (totalProbability === 0)
      throw new Error(`Error: Cannot pick because of no patterns.`);

    const random = Math.random();
    let sum = 0;
    for (const { probability, weight } of this.entry.probabilityAndWeights) {
      sum += probability;
      if (random <= sum)
        return new LoraString({ loraName: this.entry.loraName, weight });
    }
    throw new Error(`Error: No item was picked.`);
  }
}
