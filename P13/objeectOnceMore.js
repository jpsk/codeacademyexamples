// const Lietuva = {
//     miestai: [
//         'Vilnius',
//         'Kaunas',
//         'Klaipėda',
//         'Panevėžys',
//         'Šiauliai'
//     ],
//     plotas: 65000,
//     gyventojai: 2795000,
//     emigruok: function () {
//         console.log(':/ emigruoja gyventojai')
//         this.gyventojai -= 10000;
//     }
// }

class Country {
    constructor(name, area, population, cities) {
        this.name = name;
        this.area = area;
        this.population = population;
        this.cities = cities;
    }

    leave() {
        console.log(':/ emigruoja gyventojai')
        if (this.population < 100000) {
            console.log(`There's not enough people to leave a country`);
            return;
        }

        this.population -= 100000;
    }

}

const LietuvosMiestai = ['Vilnius', 'Kaunas', 'Klaipėda', 'Panevėžys', 'Šiauliai'];
const Lietuva = new Country('Lietuva',65000, 2795000, LietuvosMiestai)


console.log('Lietuvoje gyventoju:', Lietuva.population)
Lietuva.leave();
console.log('Lietuvoje gyventoju:', Lietuva.population)


const Latvija = new Country('Latvija', 0, 0, []);
console.log('Latvijoje gyventoju:', Latvija.population)
Latvija.leave();
console.log(Latvija);
console.log('Latvijoje gyventoju:', Latvija.population)
