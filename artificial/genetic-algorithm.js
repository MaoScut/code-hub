// 适应值函数
// T是一个常数
// C和P都是10维向量
function initAdapter(T, C, P) {
  return function (x) {
    const V = [];
    for (let i = 0; i < 10; i += 1) {
      V[i] = 10 + T * x[i] * (0.0012 + P[i] * 0.0001) / C[i];
    }
    const sumV = V.reduce((pre, cur) => pre + cur);
    const TCP = x.map((v, index) =>(T * v * P[index] / C[index]));
    const sumTCP = TCP.reduce((pre, cur) => pre + cur);
    return sumTCP / (T + sumV);
  };
}
function adapter(v) {

}
// 输出求和为1的十维变量
function produceLimitedVector() {
  const originArr = [];
  for (let i = 0; i < 10; i += 1) {
    // 保留两位小数
    originArr[i] = Number(Math.random().toFixed(2));
  }
  const sum = originArr.reduce((pre, curr) => pre + curr);
  // const t = originArr.map(v => (v / sum).toFixed(2));
  return originArr.map(v => Number((v / sum).toFixed(2)));
}
// 把十维向量编码为01串，长度为70
function encoder(ve) {
  const vector = ve.map(v => Number((v * 100).toFixed(0)));
  let str = '';
  vector.forEach((v) => {
    let binary = v.toString(2);
    while (binary.length < 7) {
      binary = `0${binary}`;
    }
    str += binary;
  });
  return str;
}
function decoder(str) {
  let i = 0;
  const vetor = [];
  while (i < str.length) {
    let j = 0;
    let cell = '';
    while (j < 7) {
      cell += str[i + j];
      j += 1;
    }
    // const num = str[i] + str[i + 1] + str[i + 2];
    vetor.push(Number.parseInt(cell, 2));
    i += 7;
  }
  return vetor.map(v => v / 100);
}
// const v = produceLimitedVector();
// console.log(v);
// const e = encoder(v);
// console.log(e);
// console.log(decoder(e));
// console.log(produceLimitedVector().reduce((pre, curr) => pre + curr));
function getRandom(section) {
  return (Math.random() * (section[1] - section[0])) + section[0];
}
function compare(func) {
  return (v1, v2) => (func(v2) - func(v1));
}

function f(x) {
  return x * x;
}
function g(x) {
  return -(((((x * x) / 2) - 5) * x) + 10);
}
function Coder(section, precision) {
  this.section = section.slice();
  this.precision = precision;
  this.inCoder = (num) => {
    // num = num.slice(0, num.indexOf('.') + this.precision + 1)
    const smallSectionNum = (this.section[1] - this.section[0]) / Math.pow(10, -this.precision);
    let bLength = 0;
    while (Math.pow(2, bLength) < smallSectionNum) bLength ++;
    // inlarge num to avoid digital
    num = (num * Math.pow(10, this.precision)).toFixed(0);
    const bS0 = this.section[0] * Math.pow(10, this.precision);
    const result = (num - bS0).toString(2);
    const zeroStr = new Array(bLength - result.length).fill(0).join('');
    return zeroStr + result;
  };
  this.deCoder = (bNum) => {
    bNum = Number.parseInt(bNum, 2);
    bNum = bNum / Math.pow(10, this.precision);
    return bNum + this.section[0];
  };
}

// use genetic algorithm to figure out a math function's maximum
function GA(produceSample, func, coder) {
  // produce 100 primary simple ramdomly
  const simple = [];
  // let coder = new Coder (section, precision);
  // for(var i=0;i<100;i++){
  //   var rand = getRandom(section);
  //   simple.push(rand.toFixed(precision));
  // }
  for (let i = 0; i < 100; i++) {
    // var rand = getRandom(section);
    simple.push(produceSample());
  }
  // select 10 good simple
  // maybe you can try every time just pick up one most max and repeat for 10 times
  // 无论是几维，只要和适应度函数配套就好了
  const gSimple = simple.sort((v1, v2) => (func(v2) - func(v1))).slice(0, 10);
  // cross
  let preSimple = gSimple.slice();
  for (let j = 0; j < 500; j++) {
    let cSimple = [];
    for (let i = 0; i < 5; i++) {
      // 每个循环产生两个新的样本
      // pick out two gSimple
      let s1 = gSimple[Math.floor(getRandom([0, 10]))];
      let s2 = gSimple[Math.floor(getRandom([0, 10]))];
      // transform s1, s2 into binary
      // s1=(s1*Math.pow(10,precision)).toString(2);
      // s2=(s2*Math.pow(10,precision)).toString(2)
      // s1 = coder.inCoder(s1);
      // s2 = coder.inCoder(s2);
      s1 = coder.encoder(s1);
      s2 = coder.encoder(s2);
      // produce cross section
      const len = s1.length;
      const cStart = Math.floor(getRandom([0, len]));
      const cEnd = Math.floor(getRandom([cStart, len]));
      // cross
      // you should make sure that after crossing, result must at section!
      s1 = s1.split('');
      s2 = s2.split('');
      if (Math.random() < 0.6) {
        for (let k = cStart; k <= cEnd; k++) {
          const temp = s1[k];
          s1[k] = s2[k];
          s2[k] = temp;
        }
        // s1 = s1.join('');
        // s2 = s2.join('');
      }
      // 变异
      const p = 0.001;
      // 随机选择长度的十分之1去变异
      for (let k = 0; k < s1.length / 10; k += 1) {
        const r1 = Math.floor(getRandom(0, s1.length));
        const r2 = Math.floor(getRandom(0, s1.length));
        if (Math.random() < p) s1[r1] = !String(Number(s1[r1]));
        if (Math.random() < p) s2[r2] = !String(Number(s2[r1]));
      }
      // 先解码，转化为正常的十进制向量
      s1 = coder.decoder(s1);
      s2 = coder.decoder(s2);
      // 把突变出去的再变回求和为1的向量
      const ns1 = s1.reduce((pre, cur) => pre + cur);
      const ns2 = s2.reduce((pre, cur) => pre + cur);
      s1 = s1.map(v => Number((v / ns1).toFixed(2)));
      s2 = s2.map(v => Number((v / ns2).toFixed(2)));
      // cSimple.push(parseInt(s1,2)/Math.pow(10,precision));
      // cSimple.push(parseInt(s2,2)/Math.pow(10,precision));
      // cSimple.push(coder.deCoder(s1));
      // cSimple.push(coder.deCoder(s2));
      cSimple.push(s1);
      cSimple.push(s2);
    }
    // pick out top 10 among currentSimple and previousSimple
    cSimple = cSimple.concat(preSimple).sort(compare(func)).slice(0, 10);
    // record current result for the next circulation
    preSimple = cSimple;
    // console.log(preSimple);
  }
  return preSimple;
}
const myCoder = {
  encoder,
  decoder,
};
console.log(GA(produceLimitedVector, initAdapter(1, 1, 1), myCoder));
