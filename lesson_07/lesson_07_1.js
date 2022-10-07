// 1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. 
// У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.

const dice = (maxDiceValue = 6, minDiceValue = 1) => Math.floor(Math.random() * (maxDiceValue - minDiceValue + 1) + minDiceValue)
let firstPlayerScore = 0;
let secondPlayerScore = 0;

for (let i=1; i<=3; i++) {
    let firstPlayerDiceRoll = dice();
    let secondPlayerDiceRoll = dice();

    console.log(`Iteration ${i}`);
    console.log(`1st Player: ${firstPlayerDiceRoll}`)
    firstPlayerScore += firstPlayerDiceRoll;
    console.log(`2nd Player: ${secondPlayerDiceRoll}\n`)
    secondPlayerScore += secondPlayerDiceRoll;
}

console.log('Score:');
console.log(`1st Player: ${firstPlayerScore}`);
console.log(`2nd Player: ${secondPlayerScore}`);

if (firstPlayerScore === secondPlayerScore) {
    console.log('>>> The game is a tie! <<<');
} else if (firstPlayerScore > secondPlayerScore) {
    console.log('>>> First player won! <<<');
} else {
    console.log('>>> Second player won! <<<');
}