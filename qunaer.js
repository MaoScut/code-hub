function main1(arr, p) {
  let strArr = p.split('.');
  strArr = strArr.map((s) => {
    if (s === '*') return '[0-9]+';
    return s;
  });
  const pattern = `^${strArr[0]}\\.${strArr[1]}\\.${strArr[2]}`;
  const reg = new RegExp(pattern);
  const f = arr.filter(v => reg.test(v));
  let max = -Infinity;
  let index = -1;
  for (let i = 0; i < f.length; i++) {
    const num = Number(f[i].split('.').join(''));
    if (num > max) {
      max = num;
      index = i;
    }
  }
  return f[index];
}

// const list = ['1.2.3', '1.2.5', '1.2.6'];
const list = ['2.1.4','2.5.7','3.4.6','2.1.8','2.1.0'];
// console.log(main1(list, '2.1.*'));
function main2(str, obj) {
  // const obj = JSON.parse(json);
  function getValue(k, obj) {
    const keyArr = k.split('.');
    let o = obj;
    for (let i = 0; i < keyArr.length; i++) {
      o = o[keyArr[i]];
    }
    if (o === undefined) return '';
    return o;
  }
  let r = null;
  r = str.replace(/\{\{([a-z0-9][a-z0-9.]+)\}\}/g, (match, p1) => getValue(p1, obj));
  // {{#keyName}}content{{/keyName}}
  r = r.replace(/\{\{#(\w+)\}\}(.*)\{\{\/\1\}\}/g, (match, p1, p2) => {
    const flag = getValue(p1, obj);
    if (!Array.isArray(flag)) {
      if (flag) return p2;
      return '';
    }
    let content = '';
    for (let i = 0; i < flag.length; i++) {
      content += p2.replace(/\{\{\.\}\}/, flag[i]);
    }
    return content;
  });
  r = r.replace(/\{\{\^(\w+)\}\}(.*)\{\{\/\1\}\}/g, (match, p1, p2) => {
    const flag = getValue(p1, obj);
    if (!flag) return p2;
    return '';
  });
  return r;
}
// console.log(main2('<h1>Welcome {{name}}</h1>', {"name":"Qunar-Man"}));
const o = {
  name: 'mao',
  bool: false,
  arr: ['a1', 'a2', 'a3'],
  k1: {
    k2: {
      k3: {
        k4: 1000,
      },
    },
  },
  arr1: [1, 2, 3],
  arr2: [4, 5, 6],
};
// console.log(main2('<h1>Welcome {{name}} {{^bool}}{{name}}{{/bool}}</h1>{{#arr}}arr {{/arr}}', o));
// 需要支持的模板标签有：
// 1、 {{keyName}}：输出对象中属性名为keyName的值。需要支持多级属性，比如{{keyName.name1.name2}}；
// 2、{{#keyName}}content{{/keyName}}：keyName对应的值为“真”时，输出content，为“假”时不输出
// 3、{{#arr}}content{{/arr}}: arr对应的值为数组时，遍历这个数组，进行一次或多次渲染。
// 4、{{.}}表示数组遍历中当前的元素（可以只考虑基本数据类型）。
// 5、{{^keyName}}content{{/keyName}}：keyName对应的值为“假”时，输出content，为“真”时不输出；
// 注意：如果给定的数据中，没有对应的属性字段，标签替换为空
console.log(main2('{{k1.k2.k3.k4}}{{#arr1}}没有要变化的{{/arr1}}{{#arr2}}数字{{.}}{{/arr2}}{{^bool}}yaoshuchu{{/bool}}', o));
