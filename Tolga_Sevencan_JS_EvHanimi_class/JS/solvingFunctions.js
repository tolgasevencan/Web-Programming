function bitmisIsler() { 
   return islerim.filter((is) => is.includes('(x)'));   
}

function bitmemisIsler() {
    return islerim.filter((is) => !is.includes('(x)'));
}

function tamamMi() {
    return islerim.includes('(x)');
}

let materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]
  