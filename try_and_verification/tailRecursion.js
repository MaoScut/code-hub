function tailFactorial(n, total) {
	'use strict';
	if(n == 1) return total;
	return tailFactorial(n-1, n * total);
}
console.log(tailFactorial(100000, 1));