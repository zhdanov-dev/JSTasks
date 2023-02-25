let str: string = '';
let newStr = str[0].toUpperCase() + str.slice(1);

function checkSpam(str: string) {
	let lowerStr = str.toLowerCase();
	return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

function truncate(str: string, maxlength: number) {
	return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
}

function extractCurrencyValue(str: string) {
	return +str.slice(1);
}
