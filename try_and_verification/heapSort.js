// js实现堆排序
// 把一个数组调整成大根堆
function sift(R, root, len) {
  let i = root;
  let j = (2 * i) + 1;
  const tmp = R[i];
  while (j < len) {
    // 为了保证后面的j+1不超过索引，即j+1<len，故j<len-1
    if (j < len - 1 && R[j] < R[j + 1]) {
      j += 1;
    }
    if (tmp < R[j]) {
      // 注意，只需要把j的值给i就行了，不需要把tmp的值给j
      // 如果有需要调整的树，那么其根节点必然是tmp
      R[i] = R[j];
      i = j;
      j = (2 * i) + 1;
    } else break;
  }
  R[i] = tmp;
}
// 堆排序和直接选择排序类似，只是通过调整堆，把无序区的最大值放到第一位
function heapSort(arr) {
  let i;
  let tmp;
  // n是最后一个数字的索引
  const lastIndex = arr.length - 1;
  for (i = Math.floor((lastIndex / 2) - 0.5); i >= 0; i -= 1) {
    sift(arr, i, arr.length);
  }
  for (i = lastIndex; i >= 1; i -= 1) {
    tmp = arr[0];
    arr[0] = arr[i];
    arr[i] = tmp;
    sift(arr, 0, i - 1);
  }
}
function getIntRandom(low, high) {
  low = Math.floor(low);
  high = Math.floor(high);
  const rand =  Math.random() * (high - low) + low;
  return Math.floor(rand);
}
function findTop(n, arr) {
  // 怪不得要设置成不包括第二个参数指向的位置，这样就不用写n-1了
  const fontArr = arr.slice(0, n);
  // 把fontArr调整成堆
  // 你可以从底向上调整，在数量很少的情况下，直接从上往下调整就行了
  sift(fontArr, 0, n);
  let i = n;
  while (i < arr.length) {
    if (arr[i] < fontArr[0]) {
      fontArr[0] = arr[i];
      sift(fontArr, 0, n);
    }
    i += 1;
  }
  return fontArr;
}
function quickSort(arr, low, high) {
  if (low < high) {
    let i = low;
    let j = high;
    const flag = arr[i];
    while (i < j) {
      while (arr[j] >= flag && j > i) j -= 1;
      arr[i] = arr[j];
      while (arr[i] <= flag && i < j) i += 1;
      arr[j] = arr[i];
    }
    arr[i] = flag;
    quickSort(arr, low, i - 1);
    quickSort(arr, i + 1, high);
  }
}
function timestamp() {
  let time = null;
  return function() {
    if (time) {
      console.log(new Date() - time);
      time = null;
    } else {
      time = new Date();
    }
  };
}

// 原始数组
const randomArr = [];
for (let i = 0; i < 1000000; i += 1) {
  randomArr.push(getIntRandom(0, 1000));
}
const time = timestamp();

const quickArr = randomArr.slice();
const heapArr = randomArr.slice();
// console.log('快速全排序与堆排序的比较');
// time();
// quickArr.sort((v1, v2) => v1 - v2);
// time();

// time();
// heapSort(heapArr);
// time();

console.log('找10个最小的数的比较');
time();
quickArr.sort((v1, v2) => v1 - v2);
console.log('快速全排序的前10个数为：' + quickArr.slice(0, 10).sort());
time();

time();
console.log('堆排序找出的10个最小数: ' + findTop(10, randomArr).sort());
time();

// 自己写的快速排序和js的排序比较
// const myQuickArr = randomArr.slice();
// time();
// quickSort(myQuickArr, 0, myQuickArr.length - 1);
// time();
// console.log(quickArr.every((v, index) => v === myQuickArr[index]));
