// n queens problem
function nQueens(n) {
	var result = [];
	var k = 0;
	result[k] = 0;
	while (k >= 0) { //when k<0; there is no solution for this 'n'
		result[k]++;
		while (result[k] <= n && !place(result, k))
			result[k]++; //find proper position for the current queen
		if (result[k] <= n) {
			if (k == n - 1) break; //the last queen is put at a proper position, end
			else {
				k++;
				result[k] = 0; //turn to next queen and init her poosition
			}
		} else {
			result[k] = 0; //before feedback, we should reset the position or it will influence next time we find proper position for her
			k--;
		}
	}
	return result;
}
//judge the current position is proper or not
//k is the serial number of the queen
//res is the array of a partial solution
function place(res, k) {
	var abs = Math.abs;
	for (var i = 0; i < k; i++) {
		if (res[i] == res[k] || abs(res[i] - res[k]) == abs(i - k))
			return false;
	}
	return true;
}

var start = Date.now();
var result = nQueens(30);
var end = Date.now();
console.log(result, end - start);