function Calculator() {
	this.read = function () {
		this.a = +prompt('a?', '0')!;
		this.b = +prompt('b?', '0')!;
	};

	this.sum = function () {
		return this.a + this.b;
	};

	this.mul = function () {
		return this.a * this.b;
	};
}
let calculator = new Calculator();

function Accumulator(startingValue) {
	this.value = startingValue;
	
	this.read = function () {
		this.value += +prompt('Сколько нужно добавить?', '0')!;
	};
}
