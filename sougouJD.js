
// let input = read_line();
// while (input) {
//   let size = input.split(' ');
//   const n = size[0];
//   const m = size[1];
//   let set1 = [];
//   let input1 = '';
//   while (set1.length !== n) {
//     input1 += read_line();
//     set1 = input1.split(' ');
//   }
//   let set2 = [];
//   let input2 = '';
//   while (set2.length !== m) {
//     input2 += read_line();
//     set2 = input2.split(' ');
//   }
//   print(main(set1, set2));
//   input = read_line();
// }

// function main(set1, set2) {
//   const set = new Set([...set1, ...set2]);
//   const resArr = [...set];
//   resArr.forEach((v, index, arr) => {
//     arr[index] = Number(v);
//   });
//   resArr.sort((v1, v2) => v1 - v2);
//   return resArr.join(' ');
// }
// const arr1 = [1];
// const arr2 = [2, 3];
// console.log(main(arr1, arr2));

// 检查是否合法的括号串
function isValidStr(str) {
  const stack = [];
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    if (str[i] === '(') {
      stack.push('(');
    }
    if (str[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) return true;
  return false;
}


// console.log(isValidStr(t1));
// console.log(isValidStr(t2));
// console.log(isValidStr(t3));
function main(str) {
  // 所有的右括号索引
  const right = [];
  const strArr = [];
  for (let i = 0; i < str.length; i += 1) {
    strArr[i] = str[i];
    if (str[i] === ')') {
      right.push(i);
    }
  }
  let result = 0;
  let j = 1;
  while (strArr.length > 0) {
    strArr.shift();
    const vaildIndex = [];
    for (let i = 0; i < right.length; i += 1) {
      // 复制数组先
      const copy = strArr.slice();
      copy.splice(right[i] - j, 1);
      if (isValidStr(copy.join(''))) {
        result += 1;
        vaildIndex.push(i);
      }
    }
    const ind = right.findIndex(v => v === vaildIndex[0]);
    right.splice(ind, 1);
    strArr.splice(vaildIndex[0], 1);
    j += 2;
  }
  return result;
}
const t1 = '(((())))'; // true
const t2 = '(())()(())'; // true
const t3 = '((()))()()';
const t4 = '()()()()';
console.log(main(t3));
