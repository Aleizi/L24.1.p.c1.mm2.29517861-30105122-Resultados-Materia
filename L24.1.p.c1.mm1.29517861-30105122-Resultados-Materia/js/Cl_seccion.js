import Cl_estudiante from "./Cl_estudiante.js"

export default class Cl_seccion {
    constructor() {
        this.cantAprobados = 0
        this.cantReprobados = 0
        this.cedmejor = 0
    }
    porcentajeAprobados() {
        return (this.cantAprobados / (this.cantAprobados + this.cantReprobados)) * 100
    }
    cedulaMejor() {
        return this.cedmejor
    }
    procesar(estud) {
        if (estud.aprobado()) {
            this.cantAprobados++
            if (estud.notafinal > this.cedmejor) {
                this.cedmejor = estud.ced
            }
        } else {
            this.cantReprobados++
        }
        return this.cedmejor
    }
}