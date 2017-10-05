// 找出一个数组中的第k大的元素，k从1开始
function topK(arr, k) {
  // 找出分界的元素
  const tmpArr = [];
  for (let i = 0; i < arr.length; i += 5) {
    tmpArr.push(arr[i]);
  }
  // 降序排列
  tmpArr.sort((v1, v2) => v2 - v1);
  const middle = tmpArr[Math.floor(tmpArr.length / 2)];
  const small = [];
  const equal = [];
  const big = [];
  arr.forEach((v) => {
    if (v === middle) {
      equal.push(v);
    } else if (v < middle) {
      small.push(v);
    } else {
      big.push(v);
    }
  });
  // 有点小卡，到底要不要取等于号呢？
  if (k <= big.length) return topK(big, k);
  if (k <= big.length + equal.length) return equal[0];
  return topK(small, k - (big.length + equal.length));
}
function getIntRandom(low, high) {
  const rand = (Math.random() * (high - low)) + low;
  return Math.floor(rand);
}
function produceTestSample(len) {
  const result = [];
  for (let i = 0; i < len; i += 1) {
    result.push(getIntRandom(0, 50));
  }
  return result;
}
function test() {
  const sample = produceTestSample(100);
  const myFuncRes = topK(sample, 20);
  sample.sort((v1, v2) => v2 - v1);
  // console.log('my: ', myFuncRes);
  // console.log('correct: ', sample[20 - 1]);
  console.log(myFuncRes === sample[19]);
}
// test();
for (let i = 0; i < 20; i += 1) {
  test();
}
