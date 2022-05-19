const windows = {
    isOpen: false,
    price: 200,
    color: 'Red',
    getThis: function () {
        console.log(this.isOpen);
    }
}

windows.getThis();



function someFunction() {
    const obj = {
        name: 'Flower',
        getName: function () {
            console.log(this.name);
        }
    }

    return obj;
}

const flower = someFunction();
flower.getName()