function mix(s1, s2) {
	function statistic(s1) {
		let obj = {};
		for(let i = 0; i < s1.length; i ++) {
			if(!obj[s1[i]]) obj[s1[i]] = 1;
			else obj[s1[i]] ++;
		}
		return obj;
	}
	let o1 = statistic(s1);
	let o2 = statistic(s2);
	console.log(o1);
	console.log(o2);
	let lowerLetter = [];
	for (let i = 97; i < 123; i ++) {
		lowerLetter.push(String.fromCharCode(i));
	}
	let resultObjArr = [];
	lowerLetter.forEach(v => {
		o1[v] = o1[v] || 0;
		o2[v] = o2[v] || 0;
		if(Math.max(o1[v], o2[v]) > 1) {
			if(o1[v] > o2[v]) resultObjArr.push({
				letter: v,
				location: 1,
				number: o1[v],
			});
				// '1:' + Array(o1[v]).fill(v).join('') + '/';
			else {
				if(o1[v] < o2[v]) resultObjArr.push({
					letter: v,
					location: 2,
					number: o2[v],
				})
				 // += '2' + Array(o2[v]).fill(v).join('') + '/';
				else resultObjArr.push({
					letter: v,
					location: 0,
					number: o1[v],
				}) 
					// += '=:' + Array(o1[v]).fill(v).join('') + '/';
			}
		}
	});
	console.log(resultObjArr);
	let partArr = [];
	resultObjArr.forEach(v => {
		if(!partArr[v.number]) partArr[v.number] = [v];
		else partArr[v.number].push(v);
	});
	// resultObjArr.reverse();
	let result = '';
	partArr.reverse().forEach(v => {
		reArrange(v);
		v.forEach(k => {
		if(k.location == 0) result += '=:' + Array(k.number).fill(k.letter).join('') + '/';
		else result += k.location + ':' + Array(k.number).fill(k.letter).join('') + '/';
		});
	})

	return result.slice(0, -1);
}
function reArrange(arr) {
	let _arr = arr.slice();
	let a1 = [];
	let a2 = [];
	let ae = [];
	arr.forEach(v => {
		switch(v.location){
			case 1: a1.push(v); break;
			case 2: a2.push(v); break;
			case 0: ae.push(v); break;
		}
	});
	a1.sort((v1, v2) => {
			if(v1.letter < v2.letter) return -1;
			if(v1.letter > v2.letter) return 1;
			if(v1.letter == v2.letter) return 0;
	});
		a2.sort((v1, v2) => {
			if(v1.letter < v2.letter) return -1;
			if(v1.letter > v2.letter) return 1;
			if(v1.letter == v2.letter) return 0;
	});
	ae.sort((v1, v2) => {
			if(v1.letter < v2.letter) return -1;
			if(v1.letter > v2.letter) return 1;
			if(v1.letter == v2.letter) return 0;
	});
 a1 = a1.concat(a2, ae);
 for(let i = 0; i < arr.length; i ++) {
 	arr[i] = a1[i]
 }
}
// let s1 = 'mmmmm m nnnnn y&friend&Paul has heavy hats! &';
// let s2 = 'my frie n d Joh n has ma n y ma n y frie n ds n&';
// let r = '1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss';
// console.log(mix(s1, s2));
// console.log(r);