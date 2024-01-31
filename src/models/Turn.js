class Turn {
    constructor(hora, busy) {
        this.hora = hora;
        this.busy = busy;
    }

    getHora() {
        return this.hora;
    }
}

module.exports = Turn;