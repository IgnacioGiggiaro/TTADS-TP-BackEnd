const mongoose = require('mongoose');
const stream = require("stream");
const { Schema }=mongoose;

const Schedule = require('/models/Schedule');

const ProfesionalSchema = new Schema({
    dni:{type:String, required:true},
    nombre : { type: String, required:true},
    apellido: { type: String, required:true},
    telefono:{type:String, required:true},
    mail:{type:String, required:true},
    direccion: {type:String, required:true},
    fecha_nac: {type:Date, required:true},
    schedule:{ type: mongoose.SchemaTypes.ObjectId, ref: 'Schedule',required:true}
});

module.exports=mongoose.model('Profesional', ProfesionalSchema)