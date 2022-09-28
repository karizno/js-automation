// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
let str = "hello";
let bool = true;
let num = 10;

console.log(`"${str}" + ${bool} = "${str + bool}"`);
console.log(`"${str}" + ${num} = "${str + num}"`);
console.log(`${num} + ${bool} = ${num + bool}\n`);

// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
console.log(`"${str}" * ${bool} = ${str * bool}`);
console.log(`"${str}" * ${num} = ${str * num}`);
console.log(`${num} * ${bool} = ${num * bool}\n`);

// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
console.log(`"${str}" / ${bool} = ${str / bool}`);
console.log(`"${str}" / ${num} = ${str / num}`);
console.log(`${num} / ${bool} = ${num / bool}\n`);

// 4) Выполнить явное преобразование(number, string, boolean)
console.log(`Явное преобразование String("${str}"): "${String(str)}"`);
console.log(`Явное преобразование Number(${num}): ${Number(num)}`);
console.log(`Явное преобразование Boolean(${bool}): ${Boolean(bool)}`);