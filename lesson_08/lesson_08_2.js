// 2. найти максимальное значение числа в массиве ([3,67,15...])
console.log('--- Task 2 ---');
let arrToFindMaxValueElement = [1, 2, 3, 6, 5, 6];
function findMaxValueElement (arr) {
    return Math.max(...arr);
};
console.log(`${findMaxValueElement(arrToFindMaxValueElement)} is max value element \nin array ${arrToFindMaxValueElement}`);
