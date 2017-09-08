function main(arr, res) {
  arr.forEach((v) => {
    if (Array.isArray(v)) main(v, res);
    else res.push(v);
  });
  return res;
}

const test = [1, 2, [3, [4, 5, 6, [7, 8]]], 9];
console.log(main(test, []));
