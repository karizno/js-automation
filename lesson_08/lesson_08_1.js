// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
console.log('--- Task 1 ---');
const arrToReverse = [1, 2, 3, 4, 5, 6];
function revert (arr) {
    return arr.reverse();
};
console.log(`Original array: ${arrToReverse}`);
console.log(`Reversed array: ${revert(arrToReverse)}`);