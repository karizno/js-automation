// 4. даны 2 4-х значных числа с неповторяющимися цифрами, 
// надо определить сколько цифр в этих числах совпадают по значению и позиции 
// и сколько только по значению (3487 и 3794 ---> 1 и 2 )
console.log('--- Task 4 ---');
let firstNum = String(3487);
let secondNum = String(3794);

let valueAndPosCounter = 0;
let valueCounter = 0;


function numberMatcher (first, second) {
    for (let i = 0; i < first.length; i++) {
        if (first[i] === second[i]) {
            valueAndPosCounter++;
        } else {
            for (let j = 0; j < second.length; j++) {
                if (first[i] === second[j]) {
                    valueCounter++;
                }
            }
        }
        
    }
    return `${valueAndPosCounter} digits are the same in value and position;\n${valueCounter} digits are the same in value only`;
}

console.log(numberMatcher(firstNum, secondNum));