function spy(func: any) {
	function wrap(...args: any[]) {
		wrap.calls.push(args);
		return func.apply(this, args);
	}

	wrap.calls = [];
	return wrap;
}
//
function delay(func: any, ms: number) {
	return function () {
		setTimeout(() => func.apply(this, arguments), ms);
	};
}
//
function debounce(func: any, ms: number) {
	let cd = false;

	return function () {
		if (cd) return;
		func.apply(this, arguments);
		cd = true;
		setTimeout(() => (cd = false), ms);
	};
}
//
function throttle(func: any, ms: number) {
	let throt = false;
	let savedArgs: any;
	let savedThis: any;

	function wrapper() {
		if (throt) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}

		func.apply(this, arguments);
		throt = true;
		setTimeout(function () {
			throt = false;
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedArgs = savedThis = null;
			}
		}, ms);
	}

	return wrapper;
}
