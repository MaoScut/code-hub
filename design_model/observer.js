let Observer = (function() {
	let _message = {};
	return {
		regist: function(type, fn) {
			if (typeof _message[type] === 'undefined') {//should be compared with string!
				_message[type] = [fn];
			} else {
				_message[type].push(fn);
			}
		},
		fire: function(type, args={}) {
			if (!_message[type]) return;
			let events = {
				type: type,
				args: args
			};
			for(let i=0, j=_message[type].length;i<j;i++){
				_message[type][i].call(this, events)
			}
		},
		remove: function(type, fn) {
			if(_message[type] instanceof Array){
				let i = _message[type].length-1;
				for(;i>=0;i--){
					_message[type][i] ===fn && _message[type].splice(i,1);
				}
			}
		}
	}
})();

Observer.regist('test',(e)=>console.log(e.type,e.args.msg));
Observer.fire('test',{msg: 'arguments!'});