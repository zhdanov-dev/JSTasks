function camelize(str: string) {
	return str
		.split('-')
		.map((word, indx) =>
			indx == 0 ? word : word[0].toUpperCase() + word.slice(1)
		)
		.join('');
}
//
function filterRange(arr: number[], a: number, b: number) {
	return arr.filter(item => a <= item && item <= b);
}
//
function filterRangeInPlace(arr: number[], a: number, b: number) {
	for (let i = 0; i < arr.length; i++) {
		let val = arr[i];
		if (val < a || val > b) {
			arr.splice(i, 1);
			i--;
		}
	}
}
//
let arr: number[] = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
//
function copySorted(arr: string[]) {
	return arr.slice().sort();
}
//
function Calculator() {
	this.methods = {
		'-': (a: number, b: number) => a - b,
		'+': (a: number, b: number) => a + b,
	};

	this.calculate = function (str: string) {
		let split = str.split(' '),
			a = +split[0],
			operator = split[1],
			b = +split[2];

		if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
			return NaN;
		}

		return this.methods[operator](a, b);
	};

	this.apendMethod = function (name: string, func) {
		this.methods[name] = func;
	};
}
//
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

	let names = users.map(item => item.name);

	let usersMapped = users.map(user => ({
		toFullName: `${user.name} ${user.surname}`,
		id: user.id,
	}));
//
function sortByAge(arr: object[]) {
	arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}
//
function shuffle(array: number[]) {
	array.sort(() => Math.random() - 0.5);
}
//
function getAverageAge(users: object[]) {
	return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
//
function unique(arr: string[]) {
	let result: string[] = [];
	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str);
		}
	}

	return result;
}
//
function groupById(array: object[]) {
	return array.reduce((obj, value) => {
		obj[value.id] = value;
		return obj;
	}, {});
}
