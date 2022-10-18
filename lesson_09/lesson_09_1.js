// Решить используя промисы и async/await
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3. С помощью Promise.race дождитесь 
// загрузки первого сработавшего промиса и выведите результат его работы на экран.

console.log('--- Lesson 9. Task 1 ---');

const delay = (maxValue = 5, minValue = 1) => Math.floor(Math.random() * (maxValue - minValue) + minValue);

let promiseOne = new Promise (resolve => {
    setTimeout (() => {
        resolve(1);
    }, delay() * 1000);
})

let promiseTwo = new Promise (resolve => {
    setTimeout (() => {
        resolve(2);
    }, delay() * 1000);
})

let promiseThree = new Promise (resolve => {
    setTimeout (() => {
        resolve(3);
    }, delay() * 1000);
})

Promise.race([promiseOne, promiseTwo, promiseThree])
    .then(result => {
    console.log(`${result}`);
    });