let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", "tesla", "volvo", "skoda", "nissan", "ferrari",
    "vw", "alfa romeo", "mitsubishi", "TOGG;)"
];


console.log(cars.filter(() => "!= TOGG;)"));

function checkRealCars() {
    return 
}

/*
output("<strong>Araba karakteri tasimayan arabalari;) filtreleyiniz.</strong><br>" + realCars);

let carsIncludingCharO = realCars.filter(filterCarsIncludingCharO);
output("<br><br>");
output("<strong>Icinde 'o' harfi gecen arabalari ve bu arabalarin sayisini bulun.</strong><br>" + carsIncludingCharO);
output("<br><strong>Kac tane: </strong>" + carsIncludingCharO.length);

let occurances = findNumberOfChar(cars.join(), "o");
output("<br><br>");
output("<strong>Icinde iki defa 'o' harfi gecen arabalarin sayisini bulun.</strong><br>" + occurances);

realCars.filter(function (auto) {

    let numberOfOs = findNumberOfChar(auto, "o");
    if (numberOfOs == 2) {
        return true;
    }
    return false;

})
*/