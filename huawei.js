function main(str) {
  let arr = str.split(' ');
  arr = arr.map(v => Number(v));
  arr.sort((v1, v2) => v1 - v2);
  const result = [arr[0]];
  let counter = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === result[result.length - 1]) {
      ++counter;
    } else {
      result.push(counter);
      result.push(arr[i]);
      counter = 1;
    }
  }
  result.push(counter);
  return result.join(' ');
}
const t = '5 5 1 1 1 6';
console.log(main(t));
// function main(route1, route2) {
//   const arr1 = route1.split('-').reverse();
//   const arr2 = route2.split('-').reverse();
//   let counter = 0;
//   // let meetPonit = 0;
//   while (arr1[counter] !== undefined && arr2[counter] !== undefined) {
//     if (arr1[counter] === arr2[counter]) {
//       ++counter;
//     } else {
//       break;
//     }
//   }
//   if (counter - 1 < 0) return '0 0';
//   return `${arr1[counter - 1]} ${counter - 1}`;
// }

// const r1 = 'A-B-C-D-E-F-G-H-I-J-K';
// const r2 = 'T-Y-U-H-I-J-K';
// console.log(main(r1, r2));
// function main(str, source, target) {
//   const arr = str.split('');
//   // 记录下所有source的索引
//   const sourceIndex = [];
//   for (let i = 0; i < arr.length; i ++) {
//     if (arr[i] === source) {
//       sourceIndex.push(i);
//     }
//   }
//   // 0表示source，1表示target
//   let start = 0;
//   const end = Math.pow(2, sourceIndex.length);
//   const result = [];
//   while (start < end) {
//     const tmp = arr.slice();
//     let binary = start.toString(2);
//     while (binary.length < sourceIndex.length) {
//       binary = '0' + binary;
//     }
//     for (let i = binary.length - 1; i >= 0; i--) {
//       if (binary[i] === '1') {
//         tmp[sourceIndex[i]] = target;
//       }
//     }
//     result.push(tmp.join(''));
//     ++start;
//   }
//   return result.join(',');
// }

// console.log(main('997', '9', '8'));
