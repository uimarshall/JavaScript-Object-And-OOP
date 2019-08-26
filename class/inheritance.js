class User {
	constructor(name, email, age) {
		this.name = name;
		this.email = email;
		this.age = age;
		this.shots = 0;
	}

	shoot() {
		console.log(`${this.name} just got shot!!!`);
		/**After executing the first functionality(which is console.log), 
         return the user(instance)  so that we can chain another mtd to it.
         */
		return this; //in this case, it should return newUser1 or newUser2
	}
	care() {
		console.log(`${this.name} has just been treated, back on his feet`);
		// For mtd chaining
		return this;
	}
	updateShots() {
		this.shots++;
		console.log(`${this.email} now has ${this.shots} lives in total`);
		// For mtd chaining
		return this;
	}
}
// The parameters passed into the constructor mtd are the values that the instncaes will hv when created
let newUser1 = new User("Ben", "ben@gmail.com", 29);
let newUser2 = new User("Ape", "ape@gmail.com", 33);

// INHERITANCE
class Admin extends User {
	deleteUser(user) {
		users = users.filter(u => {
			return u.email != user.email;
		});
	}
}

let admin = new Admin("boss", "boss@gmail.com", 55);
let users = [newUser1, newUser2, admin];
admin.deleteUser(newUser2);
console.log(users);
