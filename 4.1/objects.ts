let user: { [a: string]: any } = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
//
function isEmpty(obj: object) {
	for (let key in obj) {
		return false;
	}
	return true;
}
//
let salaries: object = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let sum = 0;
for (let key in salaries) {
	sum += salaries[key];
}
//
function multiplyNumeric(obj: object) {
	for (let key in obj) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2;
		}
	}
}
