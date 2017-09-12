function lcs(x, y) {
  const lenx = x.length;
  const leny = y.length;
  const cache = new Array(lenx);
  for (let i = -1; i < lenx; i += 1) {
    cache[i] = [];
    cache[i][-1] = '';
  }
  for (let j = -1; j < leny; j += 1) {
    cache[-1][j] = '';
  }
  // let result = '';
  // 注意左上角的要先知道
  for (let i = 0; i < lenx; i += 1) {
    for (let j = 0; j < leny; j += 1) {
      if (x[i] === y[j]) {
        cache[i][j] = `${cache[i - 1][j - 1]}${x[i]}`;
      } else {
        cache[i][j] = cache[i - 1][j].length > cache[i][j - 1].length ?
          cache[i - 1][j] : cache[i][j - 1];
      }
      // if (cache[i][j].length > result.length) {
      //   result = cache[i][j];
      // }
    }
  }
  // 最后一个就是最优的啊！
  return cache[lenx - 1][leny - 1];
}
const str11 = 'abcdefg';
const str12 = 'abc';
const str21 = 'abcdefghijklmnopq';
const str22 = 'apcdefghijklmnobq';
console.log(lcs(str21, str22));
