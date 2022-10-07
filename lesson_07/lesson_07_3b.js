// 3. Напишите код который будет разбивать число на заданное количество рандомных чисел 
// сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма трех чисел будет равна 15) (4,6,5)
// б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

const numInit = 15;
let numRand = numInit;
let numSegments = 3;
let segment = 0;
let arr = [];

for (let i = 1; i < numSegments; i++) {

    segment = Number((Math.random() * numRand).toFixed(2));
    arr.push(segment);

// считаем сумму элементов формирующегося массива
    let sumArr = 0; 
    for (let arrElem in arr) {
        sumArr += arr[arrElem];
    }
// если сумма элементов массива равна исходному числу, то оставшиеся элементы массива заполняем нулями
    if (sumArr === numInit) {
        for (let j = i; j < numSegments; j++) {
            arr.push(0);
        }
        break;
    } else {
        numRand = Number((numRand - segment).toFixed(2));
        if (i === numSegments - 1) {
            arr.push(numRand);
            break;
        }
    }
}

let controlSum = 0;
for (let element in arr) {
    controlSum += arr[element];
}

console.log(`Result of dividing '${numInit}' into '${numSegments}' parts: \n${arr}\n`);
console.log(`Control sum: \n${controlSum.toFixed()}`);