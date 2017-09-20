const PENDING = 'PENDING';
const FULLFILLED = 'FULLFILLED';
const REJECTED = 'REJECTED';
function MyPromise(func) {
  this.status = PENDING;
  this.rescb = null;
  this.rejcb = null;
  this.result = null;
  function fullFill(data) {
    if (this.status === PENDING) {
      this.status = FULLFILLED;
      if (this.rescb) {
        this.result = this.rescb(data);
      }
    }
  }
  function reject(data) {
    if (this.status === PENDING) {
      this.status = REJECTED;
      if (this.rejcb) {
        this.result = this.rejcb(data);
      }
    }
  }
  func(fullFill.bind(this), reject.bind(this));
}
MyPromise.prototype.then = function (onResolve, onReject) {
  const self = this;
  return new MyPromise((resolve, reject) => {
    self.rescb = onResolve;
    self.rejcb = onReject;
    resolve(self.data);
  });
};

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    // else reject();
  }, 2000);
});
p.then(() => console.log('then1'))
  .then(() => console.log('then2'));
