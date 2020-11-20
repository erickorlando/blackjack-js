let personaje = {
    nombre : 'Tony Stark',
    edad : 40,
    email: 'yosoyironman@marvel.com',
    trajes : ['Mark I', 'Mark II', 'Hulkbuster'],
    direccion : {
        coords:
            {
                latitude: 234.345,
                longitude: -345.455
            },
        estado: 'California',
        pais: 'USA'
    },
    vivo : false
}

console.log(personaje);

const entries = Object.entries(personaje);

console.log(entries);