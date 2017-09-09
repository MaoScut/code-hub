function isPrime(n) {
  if (n === 1) return false;
  if (n === 2) return true;
  let result = true;
  const bound = Math.sqrt(n) + 1;
  for (let i = 2; i < bound; ++i) {
    if (n % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}
function nextPrime() {
  let p = 1;
  return function () {
    ++p;
    while (!isPrime(p)) {
      ++p;
    }
    return p;
  };
}

function sumOfDivided(lst) {
  const list = lst.slice();
  let go = true;
  const res = [];
  const prime = nextPrime();
  while (go) {
    const nextArr = [];
    const currPrime = prime();
    let sum = 0;
    let sumShouldbePushed = false;
    go = false;
    for (let i = 0; i < list.length; ++i) {
      if (list[i] % currPrime === 0) {
        sumShouldbePushed = true;
        sum += list[i];
      }
      if (Math.abs(list[i]) > currPrime) {
        go = true;
        nextArr.push(list[i]);
      }
    }
    if (sumShouldbePushed) {
      res.push([currPrime, sum]);
    }
  }
  return res;
}
// console.log(sumOfDivided([12, 15]));

// 产生素数的神奇方法！
function prime(bound) {
  const mark = new Array(bound);
  for (let i = 2; i < bound; ++i) {
    if (mark[i]) {
      continue;
    }
    console.log(i);
    for (let j = 2 * i; j < bound; j += i) {
      mark[j] = true;
    }
  }
}
prime(20);
