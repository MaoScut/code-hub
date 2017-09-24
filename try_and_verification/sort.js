// 彻底弄清楚排序

// 冒泡排序
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; ++i) {
    for (let j = 0; j < len - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
// 提升版
function powerBubbleSort(arr) {
  const len = arr.length;
  let needGoing = true;
  for (let i = 0; i < len - 1 && needGoing; ++i) {
    needGoing = false;
    for (let j = 0; j < len - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        needGoing = true;
      }
    }
  }
}

// 选择排序
function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; ++i) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < len; ++j) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

const a1 = [2, 3, 44, 12, 56, 25, 23];

// 直接插入排序
function insertSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; ++i) {
    const candidate = arr[i + 1];
    let j = i;
    while (j >= 0 && arr[j] > candidate) {
      arr[j + 1] = arr[j];
      --j;
    }
    ++j;
    arr[j] = candidate;
  }
}

// 希尔排序
function shellSort(arr) {
  // arr.unshift(0);
  let increment = arr.length;
  do {
    increment = Math.floor(increment / 3) + 1;
    for (let i = increment; i < arr.length; ++i) {
      if (arr[i] < arr[i - increment]) {
        const tmp = arr[i];
        let j = i - increment;
        while (arr[j] > tmp && j >= 0) {
          arr[j + increment] = arr[j];
          j -= increment;
        }
        arr[j + increment] = tmp;
      }
    }
  } while (increment > 1);
  // arr.shift();
}

// 堆排序
// 建堆，二叉堆
// function sift(arr, i, len) {
//   const tmp = arr[i];
//   let j = (2 * i) + 1;
//   while (j < len) {
//     if (j + 1 < len && arr[j + 1] > arr[j]) {
//       ++j;
//     }
//     if (arr[j] > tmp) {
//       arr[i] = arr[j];
//       i = j;
//       j = (2 * i) + 1;
//     } else {
//       break;
//     }
//   }
//   arr[i] = tmp;
// }
// function heapSort(arr) {
//   const len = arr.length;
//   const end = Math.floor((len - 1 - 0.5) / 2);
//   for (let i = end; i >= 0; --i) {
//     sift(arr, i, arr.length);
//   }
//   for (let i = 0; i < len; ++i) {
//     [arr[0], arr[len - i - 1]] = [arr[len - i - 1], arr[0]];
//     sift(arr, 0, len - i - 1);
//   }
// }
function sift(arr, root, len) {
  let i = root;
  const tmp = arr[i];
  let j = (2 * i) + 1;
  while (j < len) {
    if (j + 1 < len && arr[j + 1] > arr[j]) ++j;
    if (arr[j] > tmp) {
      arr[i] = arr[j];
      i = j;
      j = (2 * i) + 1;
    } else break;
  }
  arr[i] = tmp;
}
function heapSort(arr) {
  const len = arr.length;
  // 建堆
  const lastIndex = Math.floor((len - 1 - 0.5) / 2);
  for (let i = lastIndex; i >= 0; --i) {
    // 把以i为根节点，i到某索引位置的元素调整为堆
    sift(arr, i, len);
  }
  // 堆生成后，第一个元素就是最大的，把它放到数组最后面，然后再调整
  for (let i = 0; i < len; ++i) {
    [arr[0], arr[len - 1 - i]] = [arr[len - 1 - i], arr[0]];
    sift(arr, 0, len - i - 1);
  }
}
function quickSort(arr) {
  function qs(array, low, high) {
    if (low < high) {
      let i = low;
      let j = high;
      const c = array[low];
      while (i < j) {
        while (j > i && array[j] >= c) --j;
        array[i] = array[j];
        while (i < j && array[i] <= c) ++i;
        array[j] = array[i];
      }
      array[i] = c;
      qs(array, low, i - 1);
      qs(array, i + 1, high);
    }
  }
  qs(arr, 0, arr.length - 1);
}

function myShellSort(arr) {
  let step = arr.length;
  do {
    step = Math.floor(step / 2);
    for (let i = 0; i < step; ++i) {
      for (let j = i + step; j < arr.length; j += step) {
        const tmp = arr[j];
        while (j > i && arr[j - step] > tmp) {
          arr[j] = arr[j - step];
          j -= step;
        }
        // j += step;
        arr[j] = tmp;
      }
    }
  } while (step > 1);
}
// bubbleSort(a1);
// selectSort(a1);
// insertSort(a1);
// shellSort(a1);
// heapSort(a1);
// quickSort(a1, 0, a1.length - 1);
// myShellSort(a1);
// console.log(a1);

function test(func) {
  // 产生20 - 40 的随机数
  for (let j = 0; j < 20; ++j) {
    const randomLen = Math.floor(20 + (Math.random() * (40 - 20)));
    const randomArr = [];
    for (let i = 0; i < randomLen; ++i) {
      randomArr.push(Number((Math.random() * 10).toFixed(3)));
    }
    const testArr = randomArr.slice();
    randomArr.sort((v1, v2) => v1 - v2);
    func(testArr);
    console.log(testArr.every((v, index) => v === randomArr[index]));
  }
}
test(shellSort);
