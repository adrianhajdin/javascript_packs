
// VALUE VS REFERENCE (part 1: intro)
// arrays
const numbers = [ 1, 2, 3, 4 ]; // #123asd
const anotherNumbers = numbers; // #123asd
anotherNumbers.push(5);

// objects
const person = { firstName: 'John', lastName: 'Doe' };
const anotherPerson = person;
anotherPerson.lastName = 'DOEEEE';

console.log(numbers === anotherNumbers); // true
console.log(person === anotherPerson) // true

// VALUE VS REFERENCE (part 2: CLONING ARRAYS AND OBJECTS)

// SHALLOW CLONING - ONE LEVEL DEEP
const original = [ 1, 2, 3 ];
const newOriginal = [...original];

// DEEP CLONING - TWO LEVELS DEEP
const users = [ { name: 'John', age: 25 }, { name: 'Victor', age: 25 } ];
const newUsers = JSON.parse(JSON.stringify(users));