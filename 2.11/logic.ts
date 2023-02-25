let age: number = 15;
if (age >= 14 && age <= 90) {
}
if (!(age >= 14 && age <= 90)) {
}
if (age < 14 || age > 90) {
}
//
let userName: string | null = prompt('Кто там?', '');

if (userName === 'Админ') {
	let pass: string | null = prompt('Пароль?', '');

	if (pass === 'Я главный') {
		alert('Здравствуйте!');
	} else if (pass === '' || pass === null) {
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}
} else if (userName === '' || userName === null) {
	alert('Отменено');
} else {
	alert('Я вас не знаю');
}
