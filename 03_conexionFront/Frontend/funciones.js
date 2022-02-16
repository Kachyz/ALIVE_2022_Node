fetch('http://localhost:3000/hola')
    .then( data => data.json())
    .then( data => {
        console.log(data.frase)
        document.getElementById('titulo').innerHTML = data.frase
    }
        )

