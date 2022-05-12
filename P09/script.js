// console.log('Hello world');
//
// alert('I love JavaScript');
//
// alert('Ready to learn more?');

function mesmale(mesa) {
    const farsas = mesa.split('');
    return farsas;
}

const kiaulienosFarsas = mesmale('kiauliena');
console.log(kiaulienosFarsas);

const jautienosFarsas = mesmale('jautiena');
console.log(jautienosFarsas);


// ------------------------------------------ //

// PVZ 1
// const birthDay = 'gegužės 11';
// const name = prompt('Įveskit savo vardą');
// console.log(name, 'yra gimęs', birthDay);


// // PVZ 2
// const birthDay = 'gegužės 11';
// const name = prompt('Įveskit savo vardą');
// const rezultatas = name + ' yra gimes ' + birthDay;
//
// console.log(rezultatas);

// let vardas = 'Titas';
// console.log(vardas);
//
// vardas = 'Violeta';
// console.log(vardas);
//
// vardas = 'Petras';
// console.log(vardas);
//
// const vardas2 = 'Titas';
// console.log(vardas2);
//
// vardas2 = 'Violeta';
// console.log(vardas2);

/*
darbingiZmones
LietuvosBiudzetas
bazinisUzmokestis

suma = darbingiZmones * bazinisUzmokestis


LietuvosBiudzetas   === 100%
suma                === x

rezultas = suma * 100 / LietuvosBiudzetas

document.write(rezultatas)
 */


/*
Svarbu paminėti, kad funkcija:

    - gali grąžinti rezultatą,
    - bet gali ir negrąžinti

    pvz: Funkcija grąžina rezultatą:

    function reverse(text) {
        return text.split('').reverse().join('');
    }

    sitos funkcijos rezultata priskyre kintamajam, turėsime apversta teksta:
    e.g.:
    const reversed = reverse('labas')

    pvz: Funkcija rezultato negrąžina:

    function doAlert(text) {
        alert(text);
    }



 */

const darbingiZmones = 1_500_000;
const biudzetas = 11_252_100_000;

const bazinisDydis = prompt('Bazinis dydis?');

const teorineIsmokosSuma = darbingiZmones * bazinisDydis;

/*
    biudzetas               === 100 %
    teorineIsmokosSuma      === x %
 */

const rezultatas = teorineIsmokosSuma * 100 / biudzetas;
document.write(rezultatas)


// Pvz su

function calculatePercentage(_darbZm, _biudz, _bazDydis) {
    const _teorineIsmokosSuma = _darbZm * _bazDydis;
    const _rezultatas = _teorineIsmokosSuma * 100 / _biudz;
    return _rezultatas;
}

const rezultatas2 = calculatePercentage(darbingiZmones, biudzetas, bazinisDydis)
alert(rezultatas2)
