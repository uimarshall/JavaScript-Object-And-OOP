// 'Classes' does the same thing as 'prototypes' in Js
// A Class is a blue print for an object
// We define the 'pties' and 'mtds' we want an 'obj' to have in a 'Class so created'
// We can then instantiate diff objs from the 'Class' so created.
// The instances of the class will have the 'same pties but diff values',they may hv 'blue&red' as 'values' of a 'color' pty
// ======================================================
/** classes are not built into Js they are just syntactic sugar built on top of the 'Prototype'model
 * what is actually working under the hood in Js machine is the 'Prototype' model*/

// The 'new' KEYWORD does the underlisted:
// =========================================
/**
 - creates a new empty object {} e.g: let newUser = new User(), we now have newUser =  {}
 - sets the value of 'this' to be the new empty object, hence 'this' points to 'newUser'
 - calls the 'constructor' method
 * 
 */
// ============================================================================

// THE CONSTRUCTOR FUNCTION
// The constructor func is the one that actually creates the obj
// Its the func that fires whenever we want to create a new user in this case
// NOTE: only the pties are defined inside the constructor function, no mtds!!!
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
// The parameters passed into the constructor mtd are the values that the instances will hv when created
let newUser1 = new User("Ben", "ben@gmail.com", 29);
let newUser2 = new User("Ape", "ape@gmail.com", 33);
console.log(newUser1);
console.log(newUser2);
newUser1.shoot();
newUser2.care();

// METHOD CHAINING
// This is executing another method just after the first mtd has been executed on the same obj instance
newUser1
	.care()
	.updateShots()
	.updateShots()
	.shoot();
// ============================================================================

// INTRODUCTION OF OOP(class) CLEANS UP THE CODE BELOW
/** let useroneName = "Ekemini";
let useroneEmail = "ekems@gmail.com";
let useroneAge = 20;

let usertwoName = "Greg";
let usertwoEmail = "greg@gmail.com";
let usertwoAge = 23;

let userthreeName = "Abe";
let userthreeEmail = "abe@gmail.com";
let userthreeAge = 27;

// #Cleaning up the so many variables declared above
const users = {
    userone: {
        name: "Ekemini",
        email: "ekems@gmail.com",
        age: 20
    },
    usertwo: {
        name: "Greg",
        email: "greg@gmail.com",
        age: 23
    },
    userthree: {
        name: "Abe",
        email: "abe@gmail.com",
        age: 27
    }
};

console.log(users.userone.name); //Ekemini

*/
