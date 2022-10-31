// Таксопарк 
// 1. Определить иерархию легковых автомобилей 
// 2. Создать таксопарк
// 3. Посчитать стоимость автопарка
// 4. Провести сортировку автомобилей парка по расходу топлива
// 5. Найти автомобиль в компании, соответствующий заданному диапазону параметров

class Cars {
    constructor(manufacturer, model, color, year, automaticTransmission, maxSpeed, fuelConsumption, price) {
        this._manufacturer = manufacturer;
        this._model = model;
        this._color = color;
        this._year = year;
        this._automaticTransmission = automaticTransmission;
        this._maxSpeed = maxSpeed;
        this._fuelConsumption = fuelConsumption;
        this._price = price;
    }

    get manufacturer() {
        return this._manufacturer;
    }
    get model() {
        return this._model;
    }
    get color() {
        return this._color;
    }
    get year() {
        return this._year;
    }
    get automaticTransmission() {
        return this._automaticTransmission;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    get fuelConsumption() {
        return this._fuelConsumption;
    }
    get price() {
        return this._price;
    }
    
}

class PassengerCar extends Cars {
    constructor(manufacturer, model, color, year, automaticTransmission, maxSpeed, fuelConsupmtion, price, seatsNumber) {
        super(manufacturer, model, color, year, automaticTransmission, maxSpeed, fuelConsupmtion, price);
        this._seatsNumber = seatsNumber;
    }

    get seatsNumber() {
        return this._seatsNumber;
    }

}

class CargoCar extends Cars {
    constructor(manufacturer, model, color, year, automaticTransmission, maxSpeed, fuelConsupmtion, price, cargoCapacity) {
        super(manufacturer, model, color, year, automaticTransmission, maxSpeed, fuelConsupmtion, price);
        this._cargoCapacity = cargoCapacity;
    }

    get cargoCapacity() {
        return this._cargoCapacity;
    }

}

class TaxiCompany {
    constructor() {
        this._park = [];
    }

    get park() {
        return this._park;
    }

    addCarToPark(car) {
        this.park.push(car);
    }

    getParkCost() {
        return this.park.reduce((currentSum, carPrice) => currentSum + carPrice.price, 0);
    }

    getListOfCars() {
        for (let car of this.park) {
            console.log(car);
        }
    }
    
    sortCarsByFuelConsumption() {
        return this.park.sort((carA, carB) => carA.fuelConsumption - carB.fuelConsumption);
    }

    getCarByCustomParameters(props) {
        let searchResult = this.park.filter(car => 
            Object.keys(props).every(key => car[key] === props[key])
        );
        return searchResult;
    }

}

// Создаём объекты автомобилей
let firstAuto = new PassengerCar('KIA', 'Soul', 'Yellow', 2014, false, 220, 10, 10000, 4);
let secondAuto = new PassengerCar('Lada', 'Largus', 'Red', 2020, false, 180, 8, 11000, 7);
let thirdAuto = new PassengerCar('Skoda', 'Rapid', 'Red', 2018, true, 240, 9, 18500, 4)
let forthAuto = new CargoCar('Fiat', 'Doblo', 'Red', 2018, true, 160, 7.5, 15000, 4200)

// Создаём объект автопарка и добавляем в автопарк автомобили
let taxiCo = new TaxiCompany();
taxiCo.addCarToPark(firstAuto);
taxiCo.addCarToPark(secondAuto);
taxiCo.addCarToPark(thirdAuto);
taxiCo.addCarToPark(forthAuto);

// Вывод стоимости автопарка
console.log(`Fleet cost: $${taxiCo.getParkCost()}`);

// Сортировка списка автомобилей по расходу топлива (от меньшего к большему)
taxiCo.sortCarsByFuelConsumption();
// Вывод отсортированного по расходу топлива списка автомобилей
taxiCo.getListOfCars();

// Поиск автомобиля по критериям
console.table(taxiCo.getCarByCustomParameters({color: 'Red', automaticTransmission: true}));