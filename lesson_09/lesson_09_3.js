// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, 
// а затем найдет сумму полученных чисел и выводит на экран.

console.log('--- Lesson 9. Task 3 ---');

// Part 1
const delay = (maxValue, minValue) => Math.floor(Math.random() * (maxValue - minValue) + minValue);

function getNum1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delay(maxValue = 5, minValue = 1));
        }, 3000);
    });
}

function getNum2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delay(maxValue = 10, minValue = 6));
        }, 5000);
    });
}

async function getSum() {
    let result1 = await getNum1();
    let result2 = await getNum2();
    console.log(`${result1 + result2}`);
}

getSum();