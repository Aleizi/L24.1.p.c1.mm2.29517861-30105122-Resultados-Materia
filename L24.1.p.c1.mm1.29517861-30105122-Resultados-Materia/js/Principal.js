
import Cl_estudiante from "./Cl_estudiante.js"
import Cl_seccion from "./Cl_seccion.js"

let estud = new Cl_estudiante(888, 60)
let estud2 = new Cl_estudiante(777, 50)
let estud3 = new Cl_estudiante(999, 40)
let estud4 = new Cl_estudiante(333, 90)
let estud5 = new Cl_estudiante(111, 30)
let estud6 = new Cl_estudiante(666, 90)
let estud7 = new Cl_estudiante(444, 48)
let estud8 = new Cl_estudiante(222, 60)
let seccion = new Cl_seccion()
seccion.procesar(estud)
seccion.procesar(estud2)
seccion.procesar(estud3)    
seccion.procesar(estud4)
seccion.procesar(estud5)    
seccion.procesar(estud6)
seccion.procesar(estud7)
seccion.procesar(estud8)

let Salida = document.getElementById("salida")
Salida.innerHTML = `porcentaje de aprobados: ${seccion.porcentajeAprobados()}%`
Salida.innerHTML += `<br> Cedula de uno de los mejores estudiantes: ${seccion.cedulaMejor()}`
