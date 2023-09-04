// to acess first element of an array

function first(arr, n) {
  if (!arr) {
    return [];
  }
  if (n === undefined) {
    return arr[0];
  }

  if (n < 0) {
    return [];
  }
  // or use arr.slice(0, n)
  return arr
    .map((num, index) => (n < index + 1 ? undefined : num))
    .filter((n) => n !== undefined);
}
