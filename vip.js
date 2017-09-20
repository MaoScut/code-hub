function main(s, t) {
  const arrs = s.split('');
  const arrt = t.split('');
  arrt.sort();
  for (let i = 0; i < arrs.length; ++i) {
    if (arrt.length === 0) break;
    if (arrt[0] > arrs[i]) {
      arrs[i] = arrt[0];
      arrt.shift();
    }
  }
  return arrs.join('');
}

const s = 'fedcba';
const t = 'ee';
console.log(main(s, t));
