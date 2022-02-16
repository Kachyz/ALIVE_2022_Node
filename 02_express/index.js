// Importar el paquete 'express' para poder usarlo
const express = require('express')
 
// Inicializamos una instancia express
// app se vuelve el servidor
const app = express()

// Declarar un puerto
const PORT = 3000

app.get('/hola', (req, res) => {
    res.send({
        frase: 'Hello world!!'
    })
})

app.get('/alumno/:idAlumno/edad', (req, res) => {
    // Sacar la variable de la petición
    let id = req.params.idAlumno
    console.log('id', id)

    let datosAlumno = [{
        nombre: 'Juan Perez',
        birthday: '2000/09/20'
    },{
        nombre: 'Pedro Perez',
        edad: 15
    },{
        nombre: 'María Perez',
        edad: 60
    }]

    res.json(datosAlumno[id].edad)
})


app.listen(PORT, () => {
    console.log(`Cosas en inglés ${PORT}`)
})

