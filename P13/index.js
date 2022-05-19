function sayHi () {
    console.log('Hi!');
}


const car = {
    price: 1000,
    health: 100,
    new: true,
    sunRoof: null,
    drive: function() {
        console.log('Brrrrr');
    },
    crash: function(damage) {
        this.health -= damage;
        return this.health;
    }
}

car.drive();
const healthLeft = car.crash(10);
console.log(healthLeft); // 90

console.log(car.price);
console.log(car.drive());

car.drive()
console.log(car.price);

console.log('Car health: ', car.health);
car.crash(10);
console.log('Car health: ', car.health);

car.crash(15)
console.log('Car health: ', car.health);


const player = {
    health: 100,
    fight: function (damage){
        this.health -= damage;
    }
}
const bankoSaskaita = {
    viso: 0,
    pridetiPinigu: function (kiekis){
        this.viso += kiekis;
        console.log(`Tu isidejai (${kiekis}) pinigu. Tau liko ${this.viso}`)
    },
    issimtiPinigu: function (kiekis) {
        this.viso -= kiekis;
        console.log(`Tu issiemei (${kiekis}) pinigu. Tau liko ${this.viso}`)
    },
    issiimtiViska: function () {
        console.log(`Tu issiemei ${this.viso} pinigu, tau liko 0 :/ `);
        this.viso = 0
    }
}

bankoSaskaita.pridetiPinigu(10);
bankoSaskaita.pridetiPinigu(100);
bankoSaskaita.issimtiPinigu(6);
bankoSaskaita.issiimtiViska();

// Gavom alga
bankoSaskaita.pridetiPinigu(1000);

const kainos =  {
    kebabas: 7,
    alusNealkoholinis: 2,
    bulvytes: 2.5
}

// Galima paduoti nuoroda i kazkokio objekto reiksme (reference).
bankoSaskaita.issimtiPinigu(kainos.kebabas);
bankoSaskaita.issimtiPinigu(kainos.alusNealkoholinis);

console.log('-------------------------------');

const produktuKainos = [
    { pavadinimas: 'kebabas', kaina: 7},
    { pavadinimas: 'alusNealkoholinis', kaina: 2},
    { pavadinimas: 'bulvytes', kaina: 2.5},
]

// Galima i funkcijas paduoti funkcija
produktuKainos.forEach(function(produktas) {
    console.log(`Produktas: ${produktas.pavadinimas}, kainuoja: ${produktas.kaina}`);
})

console.log('-------------------------------');

function papasakokApieProdukta(produktas) {
    console.log('produktas', produktas);
    console.log(`Produktas: ${produktas.pavadinimas}, kainuoja: ${produktas.kaina}`);
}

// Galima i funkcija paduoti masyvo elementa
papasakokApieProdukta(produktuKainos[0]);


// I funkcija (priklausomai kaip ta funkcija yra sukonstruota, galima paduoti ivairiausius dalykus)


const namai = {
    zidinys: false,
}

console.log(namai.zidinys);