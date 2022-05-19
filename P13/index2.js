// function greet() {
//     console.log('Hi');
// }
//
// greet();
//
// function greetName(name) {
//     console.log(`Hi ${name}`);
// }
//
// greetName('Renaldas');
//
//
// function greetTwoNames(name1, name2) {
//     console.log(`Hi ${name1} and ${name2}`);
// }
//
// greetTwoNames('Renaldas', 'Mantas');
//

// Funkcija gali keisti isorinius kintamuosius:

let metai = 2021;

function svestiNaujusMetus() {
    metai +=1;
    console.log(`Valio!, sutikome ${metai} metus`)
}

svestiNaujusMetus();
svestiNaujusMetus();
svestiNaujusMetus();


// Is isores pasiekti funkcijos kintamuju negalima

function apkeiskRaidesVietomis(tekstas) {
    console.log('Tekstas yra:', tekstas);
    const pirmaRaide = tekstas[0];
    const antraRaide = tekstas[1];

    return antraRaide + pirmaRaide;

    console.log('Hi'); // Console niekada neislogins, nes yra parasyta po 'return'
}

console.log(apkeiskRaidesVietomis('ab'));
// console.log(apkeiskRaidesVietomis())


const rezultatas = apkeiskRaidesVietomis('xy');
console.log('Rezultatas yra:', rezultatas);

apkeiskRaidesVietomis('bc');

function printHello() {
    console.log('hello');
}

const rezultatas2 = printHello();
console.log('Rezultatas2 yra:', rezultatas2);