// function interval(ms, callback) {
//   let finished = true;
//   let stop = false;
//   const cb = function () {
//     if (finished) {
//       callback();
//       // finished = true;
//     }
//   };
//   // 有问题，setTimeout的cb，时间到了，是被放入回调队列而已，其中的代码并不马上执行，
//   function timeout() {
//     cb();
//     // if (!stop) setTimeout(timeout, ms);
//     if (!stop) {
//       // exist = true;
//       // finished = false;
//       setTimeout(timeout, ms);
//     }
//   }
//   function clear() {
//     stop = true;
//   }
//   // function start() {
//   //   if(finished)
//   //     setTimeout(cb, ms);
//   // }
//   return {
//     start: timeout,
//     stop: clear,
//   };
// }

// const myInterval = interval(() => console.log('interval'), 1000);
// myInterval.start();
// setTimeout(() => myInterval.stop(), 5000);

// setTimeout(() => console.log('timeout'), 0);
// setImmediate(() => console.log('immediate'));

// let inputs = [[0, 1], [0, 2], [1, 3], [1, 4]];
// let deepth = 0;
// function Node(value, pre) {
//     this.key = value;
//     this.pre = pre;
//     this.layer = (pre === null ? 0 : pre.layer) + 1;
//     if(this.layer>deepth) deepth = this.layer;
// }
// let nodeArr = [new Node(0, null)];
// inputs.forEach(v => {
//     let pre = nodeArr[v[0]];
//     let value = v[1];
//     nodeArr[value] = new Node(value, pre);
// });
// console.log(deepth);

// function main(arr) {
//   let res = 0;
//   let resCandiate = [];
//   for(let i = 0; i < arr.length; i++) {
//     let index = i;
//     let rs = 0;
//     let r = 0;
//     while(index>=0) {
//       r += arr[index];
//       if(r > rs) rs = r;
//       index -= 1;
//     }
//     if(rs > res) res = rs;
//   }
//   console.log(res);
// }
// const arr = [-23, 17, -7, 11, -2, 1, -34];
// main(arr);

console.log([...new Map([1,2,3,6,1,2])]);