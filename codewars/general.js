//  get MeanValue of an double dimension array(a matrix)
//  return an array
function getMeanValue(arr) {
  const sumArr = arr.reduce((pre, cur) => {
    //  let temp = new Array(arr[0].length);
    const p = pre;
    for (let i = 0; i < pre.length; i++) {
      p[i] += cur[i];
    }
    return p;
  }, Array(arr[0].length).fill(0));
  return sumArr.map(v => v / arr.length);
}

// get an int number from a section (left close and right open[)) 
function getIntRandom(range) {
  return Math.floor(Math.random() * (range[1] - range[0]) + range[0]);
}

//  get n unique int randoms from an int section
function uniqueIntRandomArr (n, section) {
  const result = new Array(n);
  // let _section = section.slice();
  // for(let i = 0;i<n; i++){
  //  let rand = getIntRandom([0, _section.length]);
  // result.push(_section[rand]);

  // }
  for (let i = 0; i < n; i++) {
    let rand = getIntRandom(section);
    while (result.indexOf(rand) !== -1) rand = getIntRandom(section);
    result[i] = rand;
  }
  return result;
}

// distance of two array
function getDistance(x,y) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result += Math.abs(x[i] - y[i]);
  }
  return result;
}

// get float random from a section which is like [)
function getRandom(range) {
  return (Math.random() * (range[1] - range[0])) + range[0];
}

// the Matrix size is row*col
// every element is a float random at range
function produceRandomMatrix({ row, col, range }) {
  const matrix = [];
  for (let i = 0; i < row; i++) {
    let vector = [];
    if (col == 1) vector = getRandom(range);
    else {
      for (let j = 0; j < col; j++) {
        vector.push(getRandom(range));
      }
    }
    matrix.push(vector);
  }
  return matrix;
}

