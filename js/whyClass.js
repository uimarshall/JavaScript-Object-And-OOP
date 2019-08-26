let useroneName = "Ekemini";
let useroneEmail = "ekems@gmail.com";
let useroneAge = 20;

let usertwoName = "Greg";
let usertwoEmail = "greg@gmail.com";
let usertwoAge = 23;

let userthreeName = "Abe";
let userthreeEmail = "abe@gmail.com";
let userthreeAge = 27;

// #Cleaning up the so many variables declared above
// A Class is a blue print for an object
// We define the pties and mtds we want an obj to have in a class
// We can create a class for users and instantiate diff users from the 'users' class
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
