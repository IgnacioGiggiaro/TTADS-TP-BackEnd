const mongoose = require('mongoose');
const stream = require("stream");
const { Schema }=mongoose;

//const Paciente = require('/models/Paciente');
//const ObraSocial = require('/models/ObraSocial');

const TurnoSchema = new Schema({
    dia:{type:Date,required:true},
    paciente:{ type: mongoose.SchemaTypes.ObjectId, ref: 'Paciente', required:true},
    obraSocial:{ type: mongoose.SchemaTypes.ObjectId, ref:'ObraSocial',required:true},
    professional:{ type: mongoose.SchemaTypes.ObjectId, ref:'Professional',required:true},
    practica:{type: mongoose.SchemaTypes.ObjectId, ref:'Practica', required:true}
});

module.exports=mongoose.model('Turno', TurnoSchema);