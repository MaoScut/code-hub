'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function main(set1, set2) {
  var set = new Set([].concat(_toConsumableArray(set1), _toConsumableArray(set2)));
  var resArr = [].concat(_toConsumableArray(set));
  resArr.forEach(function (v, index, arr) {
    arr[index] = Number(v);
  });
  resArr.sort(function (v1, v2) {
    return v1 - v2;
  });
  return resArr.join(' ');
}
var arr1 = [1];
var arr2 = [2, 3];
console.log(main(arr1, arr2));
