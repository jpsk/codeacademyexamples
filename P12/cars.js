const cars = [
    { type: "BMW", price: '30.000'},
    { type: "MERCEDES", price: '35.000'},
    { type: "HONDA", price: '18.000'},
    { type: "VOLVO", price: '25.000'},
]

// V1
cars.forEach(function (car) {
    console.log(`${car.type} car price $${car.price}`);
})

// V2
cars.forEach(function (car) {
    const name =  car.type[0] + car.type.slice(1).toLowerCase();
    console.log(`${name} car price $${car.price}`);
})

// V3
cars.forEach(function (car, index, array) {
    const last = index === array.length - 1;

    let carName;
    if (!last) {
        carName = car.type;
    }
    else {
        carName = car.type[0] + car.type.slice(1).toLowerCase();
    }

    console.log(`${carName} car price $${car.price}`);
})

