function checkAge(age: number) {
	return age > 18 ? true : confirm('Родители разрешили?');
}
//
function min(a: number, b: number) {
	return a < b ? a : b;
}
//
function pow(x: number, n: number) {
	return Math.pow(x, n);
}

let x: number | null = +prompt('x?', '')!;
let n: number | null = +prompt('n?', '')!;

if (n < 1) {
	alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
	alert(pow(x, n));
}