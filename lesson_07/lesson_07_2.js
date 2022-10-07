// 2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. 
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

const dateStart = new Date(2000, 0, 1);
const dateEnd = new Date();
const dayOfMonth = 13;
let counter = 0;

// Цикл реализован с учетом возможных вариаций начальной точки отсчёта (т.е. когда месяц и число не являются началом года в dateStart)
for (let year = dateStart.getFullYear(); year <= dateEnd.getFullYear(); year++) {
    if (year === dateStart.getFullYear() && dateStart.getDate() <= dayOfMonth) {
        for (let month = dateStart.getMonth(); month < 12; month++) {
            let dateCheck = new Date(year, month, dayOfMonth);
            if (dateCheck.getDay() === 5) counter++;
        }
    } else if (year === dateStart.getFullYear() && dateStart.getDate() > dayOfMonth) {
        for (let month = dateStart.getMonth() + 1; month < 12; month++) {
            let dateCheck = new Date(year, month, dayOfMonth);
            if (dateCheck.getDay() === 5) counter++;
        }
    } else {
        for (let month = 0; month < 12; month++) {
            let dateCheck = new Date(year, month, dayOfMonth);
            if (dateCheck.getDay() === 5 && dateCheck <= dateEnd) counter++;
        }
    }
}

console.log(`${counter} days with date 'Friday, 13' for period\nfrom ${dateStart} \nto ${dateEnd}`);