# JavaScript-Object-And-OOP

## A repository for JavaScript Object and Object Oriented Programming

## Preamble

Object literal is very important in writing cleaner code by converting many variable declarations to object and can even store it in an array.

`In OOP, var = properties, while functions = methods`
E.g

`let useroneName = "Ekemini"`
`let useroneEmail = "ekems@gmail.com"`
`let useroneAge = 20`

`let usertwoName = "Greg"`
`let usertwoEmail = "greg@gmail.com"`
`let usertwoAge = 23`

## Cleaning up the so many variables declared above

`const users = { userone: { name: "Ekemini", email: "ekems@gmail.com", age: 20 }, usertwo: { name: "Greg", email: "greg@gmail.com", age: 20 }}`

`console.log(users.userone.name) // Ekemini`

The dot notation and bracket notation can be used to update the properties encapsulated by the object e.g userone.name ="Antia" is same as useronw["name"] = "Antia", however dot bracket notation does not work the same in all respects. Dot notation only works with already named properties inside the object, it throws an error if a variable or property declared outside the object is called as a property.

`CLASS = PROTOTYPE in JAVASCRIPT`

- In the real sense, JavaScript does not have class built into it, the inner workings of JavaScript uses prototype, class is just a syntactic sugar built into JavaScript - it does not change anything, Prototype is what does the work! Under the hood.
