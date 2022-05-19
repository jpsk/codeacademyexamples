
/*
kryptys:
    S - Siaure
    P - Pietus
    V - Vakarai
    R - Rytai
 */

const zmogeliukas = {
    vardas: 'Zmogeliukas',
    pozicijaX: 0,
    pozicijaY: 0,
    kryptis: 'S',
    eik: function (zingsniai) {
        console.log(`${this.vardas} eina ${this.kryptis} kryptimi ${zingsniai} zingsniu`)
        if( this.kryptis === 'S') {
            this.pozicijaY += zingsniai;
        } else if (this.kryptis === 'P') {
            this.pozicijaY -= zingsniai;
        } else if (this.kryptis === 'V') {
            this.pozicijaX -= zingsniai;
        } else if (this.kryptis === 'R') {
            this.pozicijaX += zingsniai;
        }
    },
    ziurek: function (kryptis) {
        this.kryptis = kryptis;
    }
}

console.log(zmogeliukas);
zmogeliukas.eik(10);
console.log(zmogeliukas);
zmogeliukas.eik(10);
console.log(zmogeliukas);
zmogeliukas.ziurek('P');
zmogeliukas.eik(10);
console.log(zmogeliukas);
zmogeliukas.ziurek('V');
zmogeliukas.eik(10);
console.log(zmogeliukas);


const object = {
    size: 10,
    name: 'ObjectName',
    getKey: function () {

    },
    drawLine: function () {

    }
}

