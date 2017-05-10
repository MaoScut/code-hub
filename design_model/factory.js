//factory design model for js

//simple factory
//instantiated according parameter
var BallFactory = function(type) {
	type = type.toLowerCase();
	switch (type) {
		case 'basketball':
			return new Basketball();
			break;
		case 'tabletennis':
			return new Tabletennis();
			break;
		case 'soccer':
			return new Soccer();
			break;
		default:
			return null;
	}
}
//test
//var testObj = BallFactory('basketball');
//testObj.getMember();
var Basketball = function() {
	this.intro = 'Basketball is popular in America';
};
Basketball.prototype = {
	getMember: function() {
		console.log('each team has five members.')
	},
	getSize: function() {
		console.log('bigger than soccer.')
	}
};

var Tabletennis = function() {
	this.intro = 'a so cool sport indoor.';
};
Tabletennis.prototype = {
	getMember: function() {
		console.log('two man figth with each other.')
	},
	getSize: function() {
		console.log('smaller than soccer.')
	}
};

var Soccer = function() {
	this.intro = 'Soccer is popular worldwide!';
}
Soccer.prototype = {
	getMember: function() {
		console.log('each team needs 12 members.')
	},
	getSize: function() {
		console.log('a litter smaller than basketball.')
	}
}

//another factory model
//produce a simple object ,extend it, and return it
var BookFactory = function(name, time, type) {
	var o = new Object();
	o.name = name;
	o.time = time;
	o.type = type;
	o.showMessage = function() {
		console.log(`name: ${this.name}; time: ${this.time}; type: ${this.type}`)
	}
	return o;
}
var myBook = BookFactory('js', '2017', 'program');
myBook.showMessage();