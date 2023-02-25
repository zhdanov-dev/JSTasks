let styles: string[] = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');

function sumInput() {
	let numbers: number[] = [];

	while (true) {
		let value: string | null = prompt('Введите число', '0');
		if (value === '' || value === null || !isFinite(Number(value))) break;
		numbers.push(+value);
	}

	let sum: number = 0;
	for (let number of numbers) {
		sum += number;
	}
	return sum;
}

function getMaxSubSum(arr: number[]) {
	let maxSum: number = 0;
	let partialSum: number = 0;

	for (let item of arr) {
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);
		if (partialSum < 0) partialSum = 0;
	}

	return maxSum;
}
