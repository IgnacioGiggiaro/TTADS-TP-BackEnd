const mongoose = require('mongoose');
const stream = require("stream");
const { Schema }=mongoose;

//const Paciente = require('/models/Paciente');
//const ObraSocial = require('/models/ObraSocial');

const TurnoSchema = new Schema({
    duracion: Number,
    dia :String,
    paciente:'Paciente',
    obrasocial:'ObraSocial'
});

module.exports=mongoose.model('Turno', TurnoSchema);