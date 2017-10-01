// 自己实现一下原生的bind方法
// 这段太垃圾了吧？
// Function.prototype.myBind = function(context) {
//   const that = this;
//   return function() {
//     that.call(context, ...arguments);
//   }
// }
if (!Function.prototype.bind) {
  // 如果仅仅是这样，那么bind返回的函数如果当成构造函数使用的时候，就this便指向一开始绑定的对象了
  // 这不是我们想要的，此时this应该指向new 出来的对象，所以还要稍作修改
  // Function.prototype.bind = function(context) {
  //   if (this instanceof Function) throw Error('只能是函数调用');
  //   const self = this;
  //   // bind方法还可以输入默认参数，所以这里要保存参数
  //   const args = [].slice.call(arguments, 1);
  //   return function() {
  //     self.apply(context, args.concat(...arguments));
  //   }
  // }
  Function.prototype.bind = function(context) {
    if (this instanceof Function) throw Error('只能是函数调用');
    const originalFunc = this;
    // bind方法还可以输入默认参数，所以这里要保存参数
    const args = [].slice.call(arguments, 1);
    function F() {}
    F.prototype = originalFunc.prototype;
    const afterBind = function () {
      let thisToBind;
      if (this instanceof F) {
        // 这里对应的是用new调用的情况，试想一下，如果你之后想用new的方式去调用绑定后的函数
        // 那么在调用bind的时候第一个参数应该是null
        // 这里一旦是instance，就不用管调用bind时候的第一个参数是什么了
        thisToBind = this;
      } else if (context) {
        thisToBind = context;
      } else {
        // 有可能忘记传参数了，要设置为window
        thisToBind = window;
      }
      return originalFunc.call(
        thisToBind,
        args.concat([].slice.call(arguments)),
      );
    };
    afterBind.prototype = new F();
    return afterBind;
  };
}
function sayName() {
  console.log(this.name);
}
const obj = {
  name: 'hh',
};
sayName.myBind(obj)();
