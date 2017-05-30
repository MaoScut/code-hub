//use kmp algorithm to check whether s contains  p

//anaylaze p
function next(p){
	if(p.length==1) return [-1];
	if(p.length==2) return [-1, 0];
	let _next = [-1, 0];
	for(let i=2;i<p.length; i++){
		let k=0;
		while(p.slice(0,k)==p.slice(i-k,i)&&k<i){
			k++;
		}
		_next.push(k-1);
	}
	return _next;
}
function KMP(s, p){
	let pNext=next(p);
	let i=0, j=0;
	while(i<s.length&&j<p.length){
		if(j==-1||s[i]==p[j]){
			i++;
			j++;
		} else {
			j=pNext[j];//oh no, I use next[j] at the first time!
		}
	}
	if(j==p.length) return i-p.length;
	else return -1;
}