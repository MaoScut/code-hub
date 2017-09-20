function decompose(k) {
  // your code
  function dec(n, arr) {
    if (n === 2 || n === 3) return null;
    if (n === 0) {
      // arr.push(1);
      return arr;
    }
    const i = Math.floor(Math.sqrt(n));
    arr.push(i);
    return dec(n - (i * i), arr);
  }
  return dec(k * k - (k - 1) * (k - 1), [k - 1]);
}



console.log(decompose(50));
