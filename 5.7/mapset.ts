function unique(arr: string[]) {
	return [...new Set(arr)];
}
//
function aclean(arr: string[]) {
	let map = new Map();

	for (let word of arr) {
		let sorted = word.toLowerCase().split('').sort().join(''); // (*)
		map.set(sorted, word);
	}

	return [...map.values()];
}
//
let map = new Map();
map.set('name', 'John');
let keys = [...map.keys()];
keys.push("more");
alert(keys); // name, more