function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
  // TODO: this is your task ;)
  const words = this.words;
  const simalirity = [];
  let min = Infinity;
  let minIndex = 0;
  for (let i = 0; i < words.length; i++) {
    // let bound = -1;
    // let optionCount = 0;
    // const strArr = [...words[i]];
    // for (let j = 0; j < term.length; ++j) {
    //   const tmpIndex = words[i].indexOf(term[j], bound + 1);
    //   if (tmpIndex > bound) {
    //     bound = tmpIndex;
    //   } else {
    //     strArr.push(term[j]);
    //     ++optionCount;
    //   }
    // }
    // optionCount += strArr.length - term.length;
    // simalirity[i] = optionCount;
    // simalirity[i] = (words[i].length - lcsLen) + (term.length - lcsLen);
    simalirity[i] = minEditDistance(words[i], term);
    if (simalirity[i] < min) {
      min = simalirity[i];
      minIndex = i;
    }
  }
  console.log(simalirity);
  return words[minIndex];
};
function minEditDistance(x, y) {
  const lenx = x.length;
  const leny = y.length;
  const cache = new Array(lenx);
  for (let i = 0; i <= lenx; i += 1) {
    cache[i] = [];
    cache[i][0] = i;
  }
  for (let j = 0; j <= leny; j += 1) {
    cache[0][j] = j;
  }
  // let result = Infinity;
  // 注意左上角的要先知道
  for (let i = 1; i <= lenx; i += 1) {
    for (let j = 1; j <= leny; j += 1) {
      if (x[i - 1] === y[j - 1]) {
        cache[i][j] = cache[i - 1][j - 1];
      } else {
        const rep = cache[i - 1][j - 1] + 1;
        const del = cache[i - 1][j] + 1;
        const add = cache[i][j - 1] + 1;
        cache[i][j] = Math.min(rep, del, add);
      }
      // if (cache[i][j] < result) {
      //   result = cache[i][j];
      // }
    }
  }
  return cache[lenx][leny];
}

const dic = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
console.log(dic.findMostSimilar('javascript'));
// console.log(lcs('rkacypviuburk', 'zqdrhpviqslik'));
// console.log(minEditDistance('snowy', 'sunny'));
