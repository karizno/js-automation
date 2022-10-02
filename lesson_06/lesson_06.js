// 1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.
console.log('--- Exercise 1 ---')
let str = '123456';
let sum1 = 0;
let sum2 = 0;

for (let i=0; i<3; i++) {
    sum1 += Number(str[i]);
}
for (let i=3; i<6; i++) {
    sum2 += Number(str[i]);
}

if (sum1 === sum2) {
    console.log('да');
} else {
    console.log('нет');
}


// 2. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
// Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
console.log('\n--- Exercise 2 ---')
let n = 1000;
let num = 0;

while (n/2 > 50) {
    num++;
    n /= 2;
}

console.log(`Division result: ${n}\nIteration count: ${num}`);


// 3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
console.log('\n--- Exercise 3 ---')
let arr = [12, 15, 20, 25, 59, 79];
let arrSum = 0;

for (let i=0; i<arr.length; i++) {
    arrSum += arr[i];
    if (i === arr.length - 1) {
        console.log(`Arithmetic mean: ${arrSum/arr.length}`);
    }
}


// 4. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
console.log('\n--- Exercise 4 ---')
let arrFourth = [1, 2, 3, 4, 5];
arrFourth.splice(3, 0, 'a', 'b', 'c');
console.log(`arrFourth: ${arrFourth}`);

// 5. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log('\n--- Exercise 5 ---')
let arrFifth = [1, 2, 3, 4, 5];
arrFifth.splice(1, 0, 'a', 'b');
arrFifth.splice(6, 0, 'c');
arrFifth.splice(8, 0, 'e');
console.log(`arrFifth: ${arrFifth}`);


// 6. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
console.log('\n--- Exercise 6 ---')
let arrSixth = [3, 4, 1, 2, 7];
arrSixth.sort();
console.log(`arrSixth sorted: ${arrSixth}`);