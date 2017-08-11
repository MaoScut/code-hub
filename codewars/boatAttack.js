function damagedOrSunk (board, attacks){
  //the battle starts here!
  //先收集每条船的区域
  let boats = {};
  // {
  // 	originNum:
  // 	attackTime:
  // }
  for(let i = 0; i < board.length; i ++) {
  	for(let j = 0; j < board[0].length; j++){
  		if(board[i][j]){
  			if(boats[board[i][j]]) boats[board[i][j]].originNum++;
  			else boats[board[i][j]] = {
  				originNum: 1,
  				attackTime: 0,
  			}
  		}
  	}
  }
  
  //对于每个攻击位置，如果这个位置不是0,那么攻击有效，把该位置变为0,同时横向或者纵向扫描，周围有非零，说明没沉，
  let length = board.length;
  attacks.forEach(position=>{
  	let boatIndex = board[length - position[1]][position[0]-1];
  	if(boatIndex) boats[boatIndex].attackTime ++;
  })
  let result = {
  	sunk: 0,
  	damaged: 0,
  	notTouched: 0,
  	point: 0,
  };
  for(let k in boats) {
  console.log(boats[k].originNUm);
  	if(boats[k].originNUm - boats[k].attackTime == 0) {
  		result.sunk ++;
  		result.point ++;
  	}
  	else if(boats[k].attackTime == 0) {
  		result.notTouched ++;
  		result.point --;
  	}
  	else {
  		result.damaged ++;
  		result.point += 0.5;
  	}
  }
  return result;
}