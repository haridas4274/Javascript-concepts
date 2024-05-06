const person = {
    name: 'John',
    age: 30
};

const newPerson = Object.create(person);
newPerson.name = 'Alice';
console.log(newPerson.name); // Output: Alice
console.log(newPerson.age); // Output: 30 (inherited from the prototype)
