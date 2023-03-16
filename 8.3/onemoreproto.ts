Function.prototype.defer = function (ms: number) {
	setTimeout(this, ms);
};
//
Function.prototype.defer = function (ms: number) {
	let func = this;
	return function (...args) {
		setTimeout(() => func.apply(this, args), ms);
	};
};
