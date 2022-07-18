const mongoose = require('mongoose');
const stream = require("stream");
const { Schema }=mongoose;

//const Paciente = require('/models/Paciente');
//const ObraSocial = require('/models/ObraSocial');

const TurnoSchema = new Schema({
    dia:{type:Date,required:true},
    paciente:{ type: mongoose.SchemaTypes.ObjectId, ref: 'Paciente', required:true},
    obrasocial:{ type: mongoose.SchemaTypes.ObjectId, ref:'ObraSocial',required:true},
    profesional:{ type: mongoose.SchemaTypes.ObjectId, ref:'Profesional',required:true},
});

module.exports=mongoose.model('Turno', TurnoSchema);