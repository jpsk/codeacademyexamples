let countries = [
    ["Peru", 31826018,1285216],
    ["Filipinai", 103796832, 300000],
    ["Portugalija", 10260000, 92212],
    ["Lietuva", 2814696, 65300],
    ["Meksika", 130222815, 1972550]
]

console.log(countries[0][0])

const student = {
    name: 'Tomas',
    age: 20,
    studies: 'Programming',
    subjects: ['Maths', 'javascript','Computer Science', 'Physics'],
    avgGrade: '80%',
    scholarship: true
}
for (let i = 0; i < countries.length; i++) {
    const salis = countries[i][0];
    const gyventojai = (countries[i][1]/1000000).toFixed(2);
    const plotas = countries[i][2];
    const plotasGyventojui = (plotas / countries[i][1] * 1000).toFixed(2);
    const atsakymas = `Salis: ${salis}, joje gyvena ${gyventojai}mln. gyventoju, valstybes plotas - ${plotas} km^2, plotas, tenkantis vienam gyventojui - ${plotasGyventojui} m^2 </br>`;
    document.write(atsakymas);
}

// .toFixed()
// countries[x][y]

// ---------------------


const num = 10.00000145;
console.log(num.toFixed(2))
console.log((10.00000145).toFixed())


// --------------------------

const doors = {
    key: 'secretKey',
    color: 'red',
    uniquecode: 1234,
    open: function () {
        console.log('Door is opening');
    },
    obj: {}
};

console.log(typeof doors)
console.log(doors.color)
console.log(doors.obj);
console.log(doors.open());

// Object mutation!