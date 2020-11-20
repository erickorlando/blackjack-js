let juegos = ['God of War','Uncharted','Horizon Zero Dawn'];

console.log('Largo:', juegos.length);

juegos.forEach((elemento,indice, arr) =>{
    console.log('El juego ' + elemento + ' se encuentra en el indice ' + indice);
});

let nuevaLongitud = juegos.push('Sonic');

console.log({nuevaLongitud, juegos});

// Inserta un elemento al inicio del arreglo 
juegos.unshift('Dragon Ball');

console.log({nuevaLongitud, juegos});

console.log('Se eliminó ' + juegos.pop());

let pos = 1;
let juegosBorrados = juegos.splice(pos,2);
console.log({juegosBorrados, juegos});