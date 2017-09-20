function main(n) {
  const result = [1];
  let pow2 = 1;
  let pow3 = 1;
  let pow5 = 1;
  const multi = [1, 2, 3, 5];
  let multi2 = 0;
  let multi3 = 0;
  let multi5 = 0;
  while (result.length < n) {
    const array = [Math.pow(2, pow2) * multi[multi2], Math.pow(3, pow3) * multi[multi2], Math.pow(5, pow5) * multi[multi2]];
    const min = Math.min(...array);
    const minIndex = array.findIndex(v => v === min);
    if (result[result.length - 1] !== min) result.push(min);
    if (minIndex === 0) {
      if (multi2 === 3) {
        multi2 = 0;
        ++pow2;
      } else {
        ++multi2
      }
    } else if (minIndex === 1) {
      if (multi3 === 3) {
        multi3 = 0;
        ++pow3;
      } else {
        ++multi3;
      }
    } else {
      if (multi5 === 3) {
        multi5 = 0;
        ++pow5;
      } else {
        ++multi5;
      }
  }
}
  return result;
}

console.log(main(10))