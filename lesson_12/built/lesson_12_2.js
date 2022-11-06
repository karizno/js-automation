"use strict";
// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфейс Person, 
// который будет соответствовать массиву
// type Person = unknown;
// const persons: User[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];
const maxMustermann = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
};
const janeDoe = {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
};
const kateMuller = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
};
const bruceWillis = {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
};
let persons;
persons = [maxMustermann, janeDoe, kateMuller, bruceWillis];
console.log(persons);
