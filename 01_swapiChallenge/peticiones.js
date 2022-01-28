// vincula el paquete de fetch en el archivo peticiones.js
const fetch = require('node-fetch')
const URL = 'https://swapi.dev/api'

const obtenerPersonaje = (numPersonaje) => {
    fetch(URL + '/people/' + numPersonaje + '/')
        .then( response => response.json() )
        .then( data => console.log(data))
}

const obtenerPlaneta = (URLPlaneta) => {
    fetch(URLPlaneta)
        .then( response => response.json() )
        .then( data => console.log(data))
}

module.exports.obtenerPersonaje = obtenerPersonaje;
module.exports.obtenerPlaneta = obtenerPlaneta;
