let arreglo = [
  'd', 'd', 'd', 'd', 'd', 'w', 'w', 'x',
  'x', 'x', 'x', 'x', 'g', 'g', 'g', 'g',
  'g', 'g', 'g', 'g', 'u', 'u', 'u', 'u',
  'u', 'u', 'j', 'j', 'j', 'u', 'u', 'u',
  'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
  'w', 'w', 'w', 'c', 'c', 'c', 'c', 'c',
  'c', 'c', 'c', 'e', 'e', 'e', 'e'
]

let objetoFinal = {}

// Recorrer el arreglo
for(let i = 0; i < arreglo.length; i++) {
  // Sacamos la letra de la posición actual
  let letra = arreglo[i]

  // Si la letra ya existe sumamos la cantidad
  // Si no, creamos el atributo con el valor de 1
  if(objetoFinal[letra] > 0){
    objetoFinal[letra] += 1;
  }else {
    objetoFinal[letra] = 1;
  }
}

console.log('objetoFinal', objetoFinal);

