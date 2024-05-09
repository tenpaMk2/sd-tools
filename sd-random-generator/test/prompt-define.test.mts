import { expect, test } from "vitest";
import { PatternCollection } from "../src/prompt-define.mts";

test("`PatternCollection` : Single pattern test", () => {
  const pc = PatternCollection.create([`red eyes`, `blue shirt`, `loafers`]);
  const prompt = pc.pickOnePrompt();
  expect(prompt).toBe(`red eyes, blue shirt, loafers`);

  const pattern = pc.pickOnePattern();
  expect(pattern.probability).toBe(1);
});

test("`PatternCollection` : Multiple patterns test", () => {
  const pc = PatternCollection.create([
    `red eyes`,
    [
      { entries: [`blue bikini`] },
      {
        entries: [
          `yellow bikini`,
          [{ entries: [`micro bikini`] }, { entries: [`o-ring bikini`] }],
        ],
      },
    ],
    `loafers`,
  ]);
  const prompts = pc.pickAllPrompts();
  expect(prompts[0]).toBe(`red eyes, blue bikini, loafers`);
  expect(prompts[1]).toBe(`red eyes, yellow bikini, micro bikini, loafers`);
  expect(prompts[2]).toBe(`red eyes, yellow bikini, o-ring bikini, loafers`);

  const patterns = pc.patterns;
  expect(patterns[0].probability).toBe(0.5);
  expect(patterns[1].probability).toBe(0.25);
  expect(patterns[2].probability).toBe(0.25);
});

test("`PatternCollection` : `o-ring bikini` test", () => {
  const pc = PatternCollection.create([
    `bikini`,
    [
      { entries: [`aqua bikini`] },
      { entries: [`black bikini`] },
      { entries: [`blue bikini`] },
      { entries: [`green bikini`] },
      { entries: [`orange bikini`] },
      { entries: [`pink bikini`] },
      { entries: [`purple bikini`] },
      { entries: [`red bikini`] },
      { entries: [`white bikini`] },
      { entries: [`yellow bikini`] },
      { entries: [`gold bikini`] },
      { entries: [`silver bikini`] },
    ],
    `o-ring bikini`,
    `o-ring top`,
    `o-ring bottom`,
    `breasts skindentation`,
    `collarbone`,
    `shoulder blades`,
    `navel`,
    `bare arms`,
    `bare legs`,
    `barefoot`,
  ]);
  const prompts = pc.pickAllPrompts();
  expect(prompts[0]).toBe(
    `bikini, aqua bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[1]).toBe(
    `bikini, black bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[2]).toBe(
    `bikini, blue bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[3]).toBe(
    `bikini, green bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[4]).toBe(
    `bikini, orange bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[5]).toBe(
    `bikini, pink bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[6]).toBe(
    `bikini, purple bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[7]).toBe(
    `bikini, red bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[8]).toBe(
    `bikini, white bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[9]).toBe(
    `bikini, yellow bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[10]).toBe(
    `bikini, gold bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );
  expect(prompts[11]).toBe(
    `bikini, silver bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
  );

  const patterns = pc.patterns;
  expect(patterns[0].probability).toBe(1 / 12);
  expect(patterns[1].probability).toBe(1 / 12);
  expect(patterns[2].probability).toBe(1 / 12);
  expect(patterns[3].probability).toBe(1 / 12);
  expect(patterns[4].probability).toBe(1 / 12);
  expect(patterns[5].probability).toBe(1 / 12);
  expect(patterns[6].probability).toBe(1 / 12);
  expect(patterns[7].probability).toBe(1 / 12);
  expect(patterns[8].probability).toBe(1 / 12);
  expect(patterns[9].probability).toBe(1 / 12);
  expect(patterns[10].probability).toBe(1 / 12);
  expect(patterns[11].probability).toBe(1 / 12);

  type ExpectedPrompt =
    | `bikini, aqua bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, black bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, blue bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, green bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, orange bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, pink bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, purple bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, red bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, white bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, yellow bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, gold bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`
    | `bikini, silver bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`;
  const counts = new Map<ExpectedPrompt, number>([
    [
      `bikini, aqua bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, black bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, blue bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, green bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, orange bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, pink bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, purple bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, red bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, white bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, yellow bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, gold bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
    [
      `bikini, silver bikini, o-ring bikini, o-ring top, o-ring bottom, skindentation, collarbone, shoulder blades, navel, bare arms, bare legs, barefoot`,
      0,
    ],
  ]);

  const numOfTrials = 100000;
  for (let i = 0; i < numOfTrials; i++) {
    const prompt = pc.pickOnePrompt() as ExpectedPrompt;
    expect(counts.has(prompt)).toBe(true);
    counts.set(prompt, counts.get(prompt)! + 1);
  }

  for (const [prompt, count] of counts) {
    console.log(`"${prompt}": ${count / numOfTrials}`);
    expect(count / numOfTrials).toBeCloseTo(1 / 12, 2);
  }
});
