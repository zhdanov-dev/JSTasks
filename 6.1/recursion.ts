function sumToFor(n: number) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

function sumToRec(n: number) {
	return (n == 1) ? 1 : n + sumToRec(n - 1);
}

function sumToFormula(n: number) {
	return (n * (n + 1)) / 2;
}
//
function fact(n: number) {
	return n == 1 ? 1 : n * fact(n - 1);
}
//
function fib(n: number) {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
//
function printListFor(list: object) {
	while (list) {
		alert(list.value);
		list = list.next;
	}
}

function printListRec(list: object) {
	alert(list.value);
	if (list.next) {
		printListRec(list.next);
	}
}