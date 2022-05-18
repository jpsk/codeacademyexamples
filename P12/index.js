const newDoors = {
    key: 'secretKey',
    color: 'red',
    isOpen: false,
    uniquecode: 1234,
    obj: {},
    open: function () {
        this.isOpen = true;
        console.log(this.isOpen);
    },
    xTraceID: ""
};

const user = {
    email: 'user@example.com'
}

// Correct answers
// console.log(user.email);
// console.log(user['email'])
// console.log(user["email"])
// console.log(user[`email`])

// wrap your head around this :)
// const variable = 'email';
// console.log(user[variable]);

console.log(user.email);
console.log(user.name); // -> undefined

const plainArrayObject = [];


//
//
//
//
// console.log(newDoors.isOpen);
// newDoors.open();
// console.log(newDoors.isOpen);

// console.log(doors.uniquecode)
// console.log(doors['uniquecode']);

// const requiredFields = ['key', 'uniquecode', 'obj'];
//
// for (let field of requiredFields) {
//     console.log(doors[field]);
// }




