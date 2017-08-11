// simulate the coin return of a vending machine
// The vending method receives the item price and the coins used to buy it and returns the change out using the the max value coins (for example, return {6:1, 2:1} is preferred over {4:2}).
// If the credit is less than the item price, it returns the coins inserted.
// It will return any money that is not valid for the machine.
// If it can not return the exact change out, it returns the least amount that is closest to the change out. The machine never loses money!
function VendingMachine(coins) {
	this.coins = coins;
}

VendingMachine.prototype.vending = function(price, credit) {
	let vaildMoney = 0;
	let _coin = Object.assign({}, this.coins);
	console.log('price', price);
	console.log('credit', credit);
	//caculate sum of vaild coins
	for (var k in this.coins) {
		let m = credit[k] ? credit[k] : 0;
		vaildMoney += m * k;
		_coin[k] += m;
	}
	if (vaildMoney < price) return credit;
	else {
		//credit is enough, add coin to the mechine
		this.coins = _coin;

		let checkOutMoney = vaildMoney - price;
		console.log('checkoutmoney', checkOutMoney);
		//exact money, return {}
		if (checkOutMoney == 0) return {};

		//since we should use max value coins as possible, arrange coins in the machine
		let coinsArr = [];
		for (let k in this.coins) {
			coinsArr.push({
				money: k,
				num: this.coins[k]
			})
		}
		coinsArr.sort((v1, v2) => (v2.money - v1.money));
		//console.log(coinsArr);
		//use backtracking method to find wheather the machine can check out exact money
		let solution = Array(coinsArr.length).fill(0); //should fill max!
		let k = 0;
		solution[0] = coinsArr[0].num + 1;
		let exact = false;
		while (k >= 0) {
			solution[k]--;
			while (solution[k] >= 0 && solution.reduce((pre, v, index) => (pre + v * coinsArr[index].money)) > checkOutMoney)
				solution[k]--;
			if (solution.reduce((pre, v, index) => (pre + v * coinsArr[index].money)) == checkOutMoney) {
				exact = true;
				break;
			} else {
				if (k == coinsArr.length - 1) {
					solution[k] = coinsArr[k].num + 1;
					k--;
				} else {
					k++;
					solution[k] = coinsArr[k].num + 1;
				}
			};
		}
		let checkOutObj = {};
		if (exact) {
			for (var i = 0; i < solution.length; i++) {
				checkOutObj[coinsArr[i].money] = solution[i];
				this.coins[coinsArr[i].money] -= solution[i]
			}
		} else {
			let minRest = checkOutMoney;
			for (var i = 0; i < coinsArr.length; i++) {
				_checkOutMoney = checkOutMoney;
				let obj = {};
				for (let j = i; j < coinsArr.length; j++) {
					while (_checkOutMoney >= coinsArr[j].money && coinsArr[j].num > 0) {
						_checkOutMoney -= coinsArr[j].money;
						if (obj[_coinsArr[j].money]) obj[_coinsArr[j].money]++;
						else obj[_coinsArr[j].money] = 1;
					}
				}
				if (_checkOutMoney < minRest) {
					minRest = _checkOutMoney;
					checkOutObj = obj;
				}
			}
			for (let k in credit) {
				if (!this.coins[k]) checkOutObj[k] = credit[k];
			}
		}
		return checkOutObj;
	}
}
