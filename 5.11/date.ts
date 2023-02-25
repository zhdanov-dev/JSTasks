let newDate = new Date(2012, 1, 20, 3, 12);
//
function getWeekDay(date: Date) {
	let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вc'];
	return days[date.getDay()];
}
//
function getLocalDay(date: Date) {
	let day = date.getDay();
	if (day == 0) {
		day = 7;
	}
	return day;
}
//
function getDateAgo(date: Date, days: number) {
	let newDate = new Date(date);
	newDate.setDate(date.getDate() - days);
	return newDate.getDate();
}
//
function getLastDayOfMonth(year: number, month: number) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}
//
function getSecondsToday() {
	let now = new Date();
	let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	let difference: number = now - today;
	return Math.round(difference / 1000);
}
//
function getSecondsToTomorrow() {
	let now = new Date();
	let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
	let difference = tomorrow - now;
	return Math.round(difference / 1000);
}
//
function formatDate(date: Date) {
	let difference = new Date() - date;
	if (difference < 1000) {
		return 'прямо сейчас';
	}

	let sec = Math.floor(difference / 1000);
	if (sec < 60) {
		return sec + ' сек. назад';
	}

	let min = Math.floor(difference / 60000);
	if (min < 60) {
		return min + ' мин. назад';
	}

	let newDate = date;
	newDate = [
		'0' + newDate.getDate(),
		'0' + (newDate.getMonth() + 1),
		'' + newDate.getFullYear(),
		'0' + newDate.getHours(),
		'0' + newDate.getMinutes(),
	].map(component => component.slice(-2));
	
	return newDate.slice(0, 3).join('.') + ' ' + newDate.slice(3).join(':');
}
