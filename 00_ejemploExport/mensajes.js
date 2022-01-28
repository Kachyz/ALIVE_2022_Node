// Module.export te permite exportar las funciones 
// del JS a otro archivo

const saludame = nombre => console.log(`Hola ${nombre}`)

module.exports.saludame = saludame;