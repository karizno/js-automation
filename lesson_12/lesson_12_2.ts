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

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

interface Person {
    [index: number]: object;
}

const maxMustermann: User = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'  
}

const janeDoe: Admin = {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
}

const kateMuller: User = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
}

const bruceWillis: Admin = {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
}

let persons: Person;
persons = [maxMustermann, janeDoe, kateMuller, bruceWillis];
console.log(persons);