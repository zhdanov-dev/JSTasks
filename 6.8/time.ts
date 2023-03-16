function printNumbersInt(from: number, to: number) {
	let cur = from;
	let timerId = setInterval(function () {
		alert(cur);
		cur === to ? clearInterval(timerId) : cur++
	}, 1000);
}

function printNumbersTout(from: number, to: number) {
	let cur = from;

	setTimeout(function go() {
		alert(cur);
		cur < to ? setTimeout(go, 1000) : cur++;
	}, 1000);
}