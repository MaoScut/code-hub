// var input = read_line();
// while(input) {
// /*var size1 = input.split(' ')[0];
// var size2 = input.split(' ')[1];
// var set1 = read_line().split(' ');
//   while(set1.length<size1) {
//   set1=set1.concat(read_line().split(' '));
//   }
//   var set2 = read_line().split(' ');
//   while(set2.length<size2) {
//   set2=set2.concat(read_line().split(' '));
//   }
//   */
//   var n = Number(input.split(" ")[0]);
//   var m = Number(input.split(" ")[1]);
//   var a = [], b = [];
//   var str1 = "", str2 = "";
//   while(a.length !== n){
//     str1 += read_line();
//     a = str1.split(" ");
//   }
//   while(b.length !== m){
//     str2 += read_line();
//     b = str2.split(" ");
//   }
//   main(a, b, n, m);
//   input = read_line();
// }
// function main(all, clicked) {
//   var obj = {};
//   all.forEach(function(v) {
//     obj[v] = false;
//   })
//   clicked.forEach(function(v) {
//     obj[v] = true;
//   })
//   var result = [];
//   Object.keys(obj).forEach(function(k) {
//     if(obj[k] === false) result.push(k);
//   })
//   result.sort();
//   return result;
// }
// let all = ['sina', 'qq', 'taobao', 'jd', 'baidu'];
// let clicked = ['qq', 'baidu', 'baidu'];
// 5
// sina
// qq
// taobao
// jd
// baidu
// 3
// qq
// baidu
// baidu
// console.log(main(all, clicked));
function main(n1, n2) {
  if(n1 > n2) {
    var s1 = n1 - n2;
    var s2 = 360 - (n1 - n2);
    if (s1 < s2) {
      return '-' + s1;
    } else {
      return s2;
    }
  } else {
    var s1 = n2 - n1;
    var s2 = 360 - (n2 - n1);
    if (s1 <= s2) {
      return s1;
    } else {
      return '-' + s2;
    }
  }
}
console.log(main(315, 45));
console.log(main(45, 270));