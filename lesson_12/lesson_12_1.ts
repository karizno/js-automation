// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.
// const users = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep',
//         car: 'VW'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut',
//         children: 2
//     }
// ];

interface User {
    name: string;
    age: number;
    occupation: string;
    car?: string;
    children?: number;
}

const mustermann: User = {
    name: 'Max Mustermann',
    age: 25, 
    occupation: 'Chimney sweep',
    car: 'VW'
}

const muller: User = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2
}

console.log(mustermann);
console.log(muller)