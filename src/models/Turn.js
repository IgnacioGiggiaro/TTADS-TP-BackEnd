class Turn {
    constructor(hora, busy) {
        this._hora = hora;
        this._busy = busy;
    }

    getHora() {
        return this._hora;
    }

    setHora(hora) {
        this._hora = hora;
    }

    getBusy() {
        return this._busy;
    }

    setBusy(busy) {
        this._busy = busy;
    }
}

module.exports = Turn;