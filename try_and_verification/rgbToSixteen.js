
function main(rgb) {
  // 一定要用正则，如果先去掉空格，数字之间夹着空格这种情况会被认为正常
  // console.log((255).toString(16));
  // const captureNumReg = /rgb(d+ *, *d+ *, *d+ *)/;
  // 同时验证每个数字的范围，但是捕获组的位置不清楚
  // 我觉得确实是应该先验证是否合法，再去replace，直接replace又要区分rgb和数字，最后一个数字也要单独处理
  // const captureNumReg1 = /rgb\(((\d{1,2}|(1\d{2})|(2[0-4]\d)|(25[0-5])),\s*){2}(\d{1,2}|(1\d{2})|(2[0-4]\d)|(25[0-5]))\)/;
  const rgbPattern = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  let [, ...arr] = rgb.match(rgbPattern) || [];
  // 匹配失败，match返回null，然后返回[]，三个数字解构失败
  // 不能用arr.every来判断是否有哪个是undefined，因为当缺了一个数字的时候，也是假（不对，只要不是null，必然是三个数字）
  // 只要判断长度是不是3就好了，3的话，同时满足，模式合法，3个数字都有
  if (arr.length !== 3) {
    return rgb;
  }
  // 必须转化为数字，否则toString失败
  arr = arr.map(v => Number(v));
  // 只要有一个小于0或者大于255，非法，换个方式说，就是每个数字都在范围内，if条件为假
  if (arr.some(v => v > 255 || v < 0)) return rgb;
  return `#${arr[0].toString(16)}${arr[1].toString(16)}${arr[2].toString(16)}`;
  // console.log(captureNumReg.test(rgb));
}
const t1 = 'rgb(125,25,25)';
// console.log(main(t1));
// const reg = /^((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/;
// console.log(reg.test('2') === true);
// console.log(reg.test('25') === true);
// console.log(reg.test('12') === true);
// console.log(reg.test('89') === true);
// console.log(reg.test('123') === true);
// console.log(reg.test('-1') === false);
// console.log(reg.test('256???') === false);
// console.log(reg.test('257') === false);
// const captureNumReg1 = /rgb\(((\d{1,2}|(1\d{2})|(2[0-4]\d)|(25[0-5])),\s*){2}(\d{1,2}|(1\d{2})|(2[0-4]\d)|(25[0-5]))\)/;

// console.log(main('rgb(255,255,255)'));
// console.log(main('rgb(255,255,     255)'));
// console.log(main('rgb(0, 0, 0)'));
// console.log(main('rgb(0,1, 3)'));
// console.log(main('rgb(25, 25, 25)'));
// console.log(main('rgb(5, 55,           255)'));
// console.log('error');
// console.log(main('rgb(-1, 255, 255)'));
// console.log(main('rgb(0, 258, 255)'));
// console.log(main('rgb(255, 275, 255)'));
// console.log(main('rgb(, 255, 255)'));
// console.log(main('rgb(255, 255)'));
// console.log(main('rgb(255, 255, 255,)'));

function checkFormat(rgb) {
  // 允许前缀0
  // const pattern = /rgb\((0*((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5])),\s*){2}0*((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\)/;
  // 不允许前缀0
  const pattern = /rgb\((((\d)|([1-9]\d)|(1\d{2})|(2[0-4]\d)|(25[0-5])),\s*){2}((\d)|([1-9]\d)|(1\d{2})|(2[0-4]\d)|(25[0-5]))\)/;
  return pattern.test(rgb);
}
// 先写好测试真的很必要
console.log(checkFormat('rgb(255,255,255)'));
console.log(checkFormat('rgb(255,255,     255)'));
console.log(checkFormat('rgb(025, 0,0)'));
console.log(checkFormat('rgb(0,1, 3)'));
console.log(checkFormat('rgb(25, 25, 25)'));
console.log(checkFormat('rgb(5, 55,           255)'));
console.log('error');
console.log(checkFormat('rgb(-1, 255, 255)'));
console.log(checkFormat('rgb(0, 258, 255)'));
console.log(checkFormat('rgb(255, 275, 255)'));
console.log(checkFormat('rgb(, 255, 255)'));
console.log(checkFormat('rgb(255, 255)'));
console.log(checkFormat('rgb(255, 255, 255,)'));
