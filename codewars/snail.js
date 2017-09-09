const snail = function(array) {
  // enjoy
  if (array[0].length === 0) return [];
  const size = array[0].length;
  const wall = [];
  for (let p = -1; p <= size; ++p) {
    const tmp = [];
    for (let q = -1; q <= size; ++q) {
      if (p === -1 || q === -1 || p === size || q === size) {
        tmp[q] = 'wall';
      } else {
        tmp[q] = array[p][q];
      }
    }
    wall[p] = tmp;
  }
  let i = 0;
  let j = 0;
  let loop = 0;
  const result = [];
  const dir = [];
  dir[0] = () => {
    if (wall[i][j + 1] !== 'wall') ++j;
    else {
      loop = 1;
      ++i;
    }
  };
  dir[1] = () => {
    if (wall[i + 1][j] !== 'wall') ++i;
    else {
      loop = 2;
      --j;
    }
  };
  dir[2] = () => {
    if (wall[i][j - 1] !== 'wall') --j;
    else {
      loop = 3;
      --i;
    }
  };
  dir[3] = () => {
    if (wall[i - 1][j] !== 'wall') --i;
    else {
      loop = 0;
      ++j;
    }
  };
  while (!(wall[i][j + 1] === 'wall' && wall[i + 1][j] === 'wall' && wall[i - 1][j] === 'wall' && wall[i][j - 1] === 'wall')) {
    result.push(wall[i][j]);
    wall[i][j] = 'wall';
    dir[loop]();
  }
  result.push(wall[i][j]);
  return result;
};
const array = [[1,2,3],[8,9,4],[7,6,5]];
console.log(snail(array));
