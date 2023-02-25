let x: number = +prompt('Введите первое число', '')!;
let y: number = +prompt('Введите второе число', '')!;
alert(x + y);
//
function readNumber() {
	let num: string | null;
	do {
		num = prompt('Введите число', '0');
	} while (!isFinite(num));

	if (num === null || num === '') return null;

	return +num;
}
//
function random(min: number, max: number) {
	return min + Math.random() * (max - min);
}
//
function randomInteger(min: number, max: number) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}