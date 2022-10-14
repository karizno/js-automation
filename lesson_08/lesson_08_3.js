// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M
console.log('--- Task 3 ---');
let arrForCustomFibonacciSequence = [];
let arrLength = 9;
let startFibonacciPosition = 5;

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }

function customFibonacciSequence (funcFibonacci, funcStartFibonacciPosition, funcArrLength) {
    for (let i = 0; i < funcArrLength; i++) {
        arrForCustomFibonacciSequence.push(funcFibonacci(funcStartFibonacciPosition));
        funcStartFibonacciPosition++;
    }
    return arrForCustomFibonacciSequence;
}

console.log(customFibonacciSequence(fib, startFibonacciPosition, arrLength));