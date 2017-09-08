// bar.js
// foo就等价于foo中的exports变量
const foo = require('./foo');

function Person() {
  this = 1;
}
let p = new Person();
console.log(foo.add(1, 2));
