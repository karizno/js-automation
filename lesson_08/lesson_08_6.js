// 6. удалить из массива все повторяющиеся элементы
// * все действия и переборы стараться выполнять методами конструктора Array и Object
// ** все примеры должны быть решены функция, функция должна принимать параметры и работать с любыми заданными атрибутами.
// макс 10
console.log('--- Task 6 ---');

let arr = [1, 12, 1, 3, 3, 3, 4, 5, 5];

function deleteDuplicateInArr (array) {
    let newArr = arr.reduce(function(accumulator, item) {
    if (accumulator.indexOf(item) < 0) {
        accumulator.push(item);
    }
    return accumulator;
    }, []);
    return newArr;
}

console.log(deleteDuplicateInArr(arr));
