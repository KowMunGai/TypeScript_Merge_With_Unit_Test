export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
) {
  const a = collection1;
  const b = collection2.slice().reverse();
  const c = collection3;

  const res: number[] = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length || j < b.length || k < c.length) {
    const fromA = i < a.length ? a[i] : Infinity;
    const fromB = j < b.length ? b[j] : Infinity;
    const fromC = k < c.length ? c[k] : Infinity;

    let minValue = 0;

    if (fromA <= fromB && fromA <= fromC) {
      minValue = fromA;
      i++;
    } else if (fromB <= fromA && fromB <= fromC) {
      minValue = fromB;
      j++;
    } else {
      minValue = fromC;
      k++;
    }

    res.push(minValue);
  }

  return res;
}
