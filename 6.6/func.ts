function makeCounter() {
	let count = 0;
	function counter() {
		return count++;
	}

	counter.set = value => (count = value);
	counter.dec = () => count--;
	return counter;
}
//
function sum(a: number) {
	let currentSum = a;
	function newSum(b: number) {
		currentSum += b;
		return newSum;
	}

	newSum.toString = function () {
		return currentSum;
	};

	return newSum;
}