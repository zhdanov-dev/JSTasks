for (let i = 2; i <= 10; i++) {
	if (i % 2 == 0) {
		alert(i);
	}
}
//
let i: number = 0;
while (i < 3) {
	alert(`number ${i}!`);
	i++;
}
//
let num: string | null;

do {
	num = prompt('Введите число больше 100?', '0');
} while (Number(num) <= 100 && num);
//
let n: number = 10;

nextPrime: for (let i = 2; i <= n; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j == 0) continue nextPrime;
	}
	alert(i);
}
