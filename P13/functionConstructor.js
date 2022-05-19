const Car = function (brand, price, productionYear) {
    this.brand = brand;
    this.price = price;
    this.productionYear = productionYear;
    this.calculateAge = function () {
        const currentYear = 2021;
        return currentYear - this.productionYear;
    }
}


class Vehicle {
    constructor(brand, price, productionYear) {
        this.brand = brand;
        this.price = price;
        this.productionYear = productionYear;
    }

    calculateAge () {
        const currentYear = 2021;
        return currentYear - this.productionYear;
    }
}


const bike = new Vehicle('MTB', 2100, 2021);
console.log(bike);
console.log(bike.calculateAge());


const bmw = new Car('BMW', 30000, 2005);

console.log(bmw);
console.log(bmw.calculateAge());

const audi = new Car('Audi', 2000, 1998);
console.log('Audi brand is:', audi.brand);

