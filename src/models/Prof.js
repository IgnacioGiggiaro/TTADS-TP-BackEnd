const mongoose = require('mongoose');
const stream = require("stream");
const { Schema }=mongoose;

const Schedule = require('/models/Schedule');

const ProfesionalSchema = new Schema({
    dni:{type:String, requited:true},
    nombre : { type: String, requited:true},
    apellido: { type: String, requited:true},
    telefono:String,
    mail: String,
    direccion: String,
    fecha_nac: Date,
    schedule:'Schedule'
});

module.exports=mongoose.model('Profesional', ProfesionalSchema)