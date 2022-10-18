// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и 
// выводить на экран.

console.log('--- Lesson 9. Task 2 ---');

// Part 1
const delay = (maxValue = 5, minValue = 1) => Math.floor(Math.random() * (maxValue - minValue) + minValue);

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(delay());
        }, 3000);
    });
}

getNum().then(data => console.log(data));

// Part 2
async function getNumAsync() {
    let result = await getNum();
    console.log(Math.pow(result, 2));
}

getNumAsync();