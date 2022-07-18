const mongoose = require('mongoose');
const stream = require("stream");
const { Schema }=mongoose;

const PacienteSchema = new Schema({
    dni:{type:String, requited:true},
    nombre : { type: String, requited:true},
    apellido: { type: String, requited:true},
    telefono: { type: String, requited:true},
    mail: { type: String, requited:true},
    direccion: { type: String, requited:true},
    fecha_nac:{ type: Date, requited:true}
});

module.exports=mongoose.model('Paciente', PacienteSchema)