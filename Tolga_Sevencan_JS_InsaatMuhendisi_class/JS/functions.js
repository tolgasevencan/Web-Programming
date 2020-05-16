/* Output */

function output(data) {
    let result = document.getElementById("result");
    result.innerHTML += data;
}

/* Fonksiyonlar */

function daireAlanlariniHesapla() {
    let sonuclar = [];
    for (let r = 0; r < daireOlanlar.length; r++) {
        let birAlan = Math.PI * Math.pow(daireOlanlar[r], 2);
        sonuclar.push(birAlan);
    }
    return sonuclar;
}

function dikdortgenAlanlariniHesapla() {
    let sonuclar = [];
    for (let i = 0; i < dikdortgenOlanlar.length; i++) {
        let birAlan = dikdortgenOlanlar[i] * dikdortgenOlanlar[i + 1];
        sonuclar.push(birAlan);
    }
    return sonuclar;
}

function kupHacimleriniHesapla() {
    let sonuclar = [];
    for (let a = 0; a < kupHacimleri.length; a++) {
        let birHacim = Math.pow(kupHacimleri[a], 3);
        sonuclar.push(birHacim);
    }
    return (sonuclar);
}


/*

daireOlanlar = [6,23,19,0,200,156];

function alanDaire() {
    for (let r = 0; r < daireOlanlar.length; r++) {
        console.log(daireOlanlar[r]);
    return r;
    }
    alanDaire = Math.PI * Math.pow(r, 2);
    return(alanDaire);
}


let daireOlanlar = [6,23,19,0,200,156];

let daireAlani = alanDaire();

function alanDaire() { 
   
    for (let r = 0; r < daireOlanlar.length; r++) {
    console.log(daireOlanlar[r]);
    }   
}

function alanDikdortgen(a, b) {
    alanDikdortgen = a * b;
    return(alanDikdortgen);
}

function cevreDaire(r) {
    cevreDaire = 2 * Math.PI * r;
    return(cevreDaire);
}

function cevreDikdortgen(a, b) {
    cevreDikdortgen = 2 * (a + b);
    return(cevreDikdortgen);
}



function alanKup(a) {
    alanKup = 6 * Math.pow(a, 2);
    return(alanKup);
}

*/