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
    }
  }
  return cache[lenx][leny];
}
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
    simalirity[i] = minEditDistance(words[i], term);
    if (simalirity[i] < min) {
      min = simalirity[i];
      minIndex = i;
    }
  }
  return words[minIndex];
};

const dic = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
console.log(dic.findMostSimilar('javascript'));
// console.log(lcs('rkacypviuburk', 'zqdrhpviqslik'));
// console.log(minEditDistance('snowy', 'sunny'));
