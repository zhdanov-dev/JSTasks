function sumSalaries(salaries: object[]) {
	let sum = 0;
	for (let salary of Object.values(salaries)) {
		sum += salary;
	}
	return sum;
}
//
function count(obj: object) {
	return Object.keys(obj).length;
}
