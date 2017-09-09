function nextBigger(n) {
  // your code here
  let arr = [...String(n)];
  let index = arr.length - 1;
  while (index >= 1 && arr[index] <= arr[index - 1]) {
    --index;
  }
  if (index === 0) return -1;
  const tmp = arr[index - 1];
  const i = index - 1;
  const copy = arr.slice(index);
  copy.sort();
  let j = 0;
  while (copy[j] <= tmp && j < copy.length - 1) ++j;
  [copy[j], arr[i]] = [arr[i], copy[j]];
  arr = arr.slice(0, index).concat(copy);
  return Number(arr.join(''));
}
console.log(nextBigger(144));