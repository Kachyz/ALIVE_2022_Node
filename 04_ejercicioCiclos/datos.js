for(let posAlumnos=0; posAlumnos < alumnos.length; posAlumnos++){
  let suma = 0
  let totalCalificaciones = 0
  let nombreAlumno = alumnos[posAlumnos].nombre

  // Itera sobre todas las calificaciones del primer alumno
  let calificacionesAlumnoActual = alumnos[posAlumnos].calificaciones
  for(let i=0; i < calificacionesAlumnoActual.length; i++) {
    let calificacion = calificacionesAlumnoActual[i].calificacion
    suma += calificacion
    totalCalificaciones++
  }

  console.log(nombreAlumno + ' - ' + suma / totalCalificaciones)
}


// MAP
let numeros = [2, 65, 99, 32, 100]
let dobles = numeros.map(numeroActual => numeroActual*2)








