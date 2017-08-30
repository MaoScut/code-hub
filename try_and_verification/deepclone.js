function main(result, source) {
  // const result = {};
  if (source === null || typeof source !== 'object') {
    console.log('can not copy null or other simple type!');
    return {};
  }
  Object.keys(source).forEach((k) => {
    if (typeof source[k] === 'object' && source[k] !== null) {
      result[k] = source[k].constructor === Array ? [] : {};
      main(result[k], source[k]);
    } else {
      result[k] = source[k];
    }
  });
  return result;
}
let s = {
  hh: {
    hh1: 'hh1',
    pp: {
      kk: {
        bb: {
          jj: {
            ee: {
              ar: {
                hh: 1,
              },
            },
          },
        },
      },
    },
  },
  n: null,
  arr: [1, 2, 3],
  f: function(){},
  bb: 'bb',
};
let t = {};
main(t, s);
console.log(t);
// console.log(typeof null);