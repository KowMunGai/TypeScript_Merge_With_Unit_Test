import { merge } from "../src/merge";

test("Merge 3 sorted arrays correctly", () => {
  const collection1 = [1, 3, 5];
  const collection2 = [6, 4, 2];
  const collection3 = [7, 8, 9];

  const result = merge(collection1, collection2, collection3);

  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Merge with empty arrays", () => {
  expect(merge([], [], [])).toEqual([]);
  expect(merge([1], [], [])).toEqual([1]);
  expect(merge([], [2], [])).toEqual([2]);
  expect(merge([], [], [3])).toEqual([3]);
});
