let { name, years: age, isAdmin = false } = user;
//
function topSalary(salaries: object[]) {
	let max = 0;
	let maxName = null;

	for (const [name, salary] of Object.entries(salaries)) {
		if (max < salary) {
			max = salary;
			maxName = name;
		}
	}

	return maxName;
}