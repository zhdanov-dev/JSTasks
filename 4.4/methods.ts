let calculator: object = {
	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	},

	read() {
		this.a = +prompt('a?', '0')!;
		this.b = +prompt('b?', '0')!;
	},
};
//
let ladder: object = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep() {
		alert(this.step);
		return this;
	},
};
