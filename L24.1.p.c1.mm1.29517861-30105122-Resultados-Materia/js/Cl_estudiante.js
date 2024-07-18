export default class Cl_estudiante {
    constructor(ced,notafinal) {
        this.ced = ced
        this.notafinal = notafinal
    }
    setCed(ced) {
        this._ced = ced
    }
    getCed() {
        return this._ced
    }
    setNotafinal(notafinal) {
        this._notafinal = notafinal
    }
    getNotafinal() {
        return this._notafinal
    }
    aprobado() {
        if (this.notafinal >= 48) {
            return true
        } else {
            return false
        }
    }
}