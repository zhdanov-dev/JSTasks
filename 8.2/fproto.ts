function User(name: string) {
	this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');
