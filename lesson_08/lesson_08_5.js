// 5. сортировка массива по возрастанию/убыванию
console.log('--- Task 5 ---');

let array = [3, 6, 2, 1, 8, 5];

function getAscendingArray (arr) {
    return arr.sort( (a, b) => a - b );
}

function getDescendingArray (arr) {
    return arr.sort( (a, b) => b - a );
}

console.log(`Original array: ${array}`);
console.log(`Ascending array: ${getAscendingArray(array)}`);
console.log(`Descending array: ${getDescendingArray(array)}`);