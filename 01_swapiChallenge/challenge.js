// import fetch from 'node-fetch'; 
// -> Necesitan agregar "type": "module", 
// al archivo package.json
const peticiones = require('./peticiones')

peticiones.obtenerPersonaje(1)

// const URL = 'https://swapi.dev/api/'
// people/1/


// fetch(URL + 'people/12/')
//     .then( response => response.json() )
//     .then( data => {
//         let nombre = data.name;
//         let anio = data.birth_year;
//         let planeta = data.homeworld;
//         fetch(planeta)
//             .then( response => response.json() )
//             .then( dataPlaneta => {
//                 console.log(dataPlaneta)
//                 let nombrePlaneta = dataPlaneta.name; 
//             })
//     })
