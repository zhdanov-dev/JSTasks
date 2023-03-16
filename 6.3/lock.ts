function sum(a: number) {
	return function (b: number) {
		return a + b;
	};
}
//
function inBetween(a: number, b: number) {
	return (cur: number) => {
		return cur >= a && cur <= b;
	};
}

function inArray(arr: number[]) {
	return (cur: number) => {
		return arr.includes(cur);
	};
}
//
function byField(field: string) {
	return (a: object, b: object) => (a[field] > b[field] ? 1 : -1);
}
// в последнем заменить while на for
