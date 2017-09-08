function pickPeaks(arr) {
  if (arr.length <= 2) {
    return {
      pos: [],
      peaks: [],
    };
  }
  let stack = [{ value: arr[1], index: 1 }];
  const pos = [];
  const peaks = [];
  for (let i = 2, len = arr.length; i < len; i += 1) {
    if (arr[i] >= stack[stack.length - 1].value) {
      stack.push({
        value: arr[i],
        index: i,
      });
    } else if (arr[i] < stack[stack.length - 1].value) {
      let pop = stack.pop();
      while (stack.length > 0 && pop.value === stack[stack.length - 1].value) {
        pop = stack.pop();
      }
      if (!pop.unproperPush) {
        pos.push(pop.index);
        peaks.push(pop.value);
      }
      stack = [{
        value: arr[i],
        index: i,
        unproperPush: true,
      }];
    }
  }
  return {
    pos,
    peaks,
  };
}

const test = [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3];
const test1 = [1, 2, 2, 2, 2, 3];
const test2 = [2, 1, 3, 1, 2, 2, 2, 2, 1];
console.log(pickPeaks(test2));
