// function fun(x) {
//   // let first = [1];
//   let second = [1, 1];
//   x = Number(x);
//   if (x === 1) return 1;
//   let floor = 3;
//   while(true) {
//     let copy = second.slice();
//     second = new Array(copy.length + 1);
//     second[0] = copy[0];
//     second[second.length - 1] = copy[copy.length - 1];
//     for (let i = 1; i < second.length - 1; ++i) {
//       second[i] = copy[i-1] + copy[i];
//       if (second[i] === x) return floor;
//     }
//     floor ++;
//   }
// }
function fun(x) {
  const str = x + x[0];
  // str = str + str[0];
  // const stack = [];
  // for (let i = 0; i < str.length; ++i) {
  //   stack.push(str[i]);
  // }
  // let i = 0;
  // while (stack.length > 0) {
  //   if (stack.pop() !== str[i]) return false;
  //   ++i;
  // }
  // return true;
  const reverse = str.split('').reverse().join('');
  return reverse === str;
}
// function fun(table, n) {
//   let counter = 0;
//   const arr = table.split('');
//   for (let i = 0; i < table.length - 1; ++i) {
//     if (i === 0) {
//       if (arr[i] == 0 && arr[i + 1] == 0) {
//         arr[i] = 1;
//         ++counter;
//       }
//     } else {
//       if (arr[i - 1] == 0 && arr[i] == 0 && arr[i + 1] == 0) {
//         arr[i] = 0;
//         ++counter;
//       }
//     }
//   }
//   if (n <= counter) return true;
//   return false;
// }
console.log(fun('abbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'));
