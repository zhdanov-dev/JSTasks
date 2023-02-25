let value: string | null = prompt(
	'Какое "официальное" название JavaScript?',
	''
);
if (value == 'ECMAScript') alert('Верно!');
else alert('Не знаете? ECMAScript!');
//
let value2: string | null = prompt('Введите число', '0');
if (Number(value2) > 0) alert(1);
else if (Number(value2) < 0) alert(-1);
else alert(0);
//
let a: number = 1,
	b: number = 2;
let result: string = a + b < 4 ? 'Мало' : 'Много';
//
let login: string = 'Сотрудник';
let message: string =
	login == 'Сотрудник'
		? 'Привет'
		: login == 'Директор'
		? 'Здравствуйте'
		: login == ''
		? 'Нет логина'
		: '';
