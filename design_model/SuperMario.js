let MarioState = function(){
	let _currentState={};
	let states = {
		jump(){
			console.log('I jump!');
		},
		move(){
			console.log('I move!');
		},
		shoot(){
			console.log('I shoot!');
		},
		squat(){
			console.log('I squat!');
		}
	};
	let Action = {
		changeState(){
			let arg = arguments;
			_currentState={};
			if(arg.length){
				for(let i =0;i<arg.length;i++){
					_currentState[arg[i]] = true;
				}
			}
			return this;
		},
		goes(){
			console.log('emit an action!');
			for(let k in _currentState){
				states[k] && states[k]();
			}
			return this;
		}
	}
	return {
		change: Action.changeState,
		goes: Action.goes
	}
}
MarioState().change('jump','shoot').goes();
let marry = new MarioState();
marry.change('move', 'squat').goes();