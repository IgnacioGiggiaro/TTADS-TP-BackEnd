const mongoose = require('mongoose');
const stream = require("stream");
const { Schema }=mongoose;



const ScheduleSchema = new Schema({
    hsDesde:{type:Date, required:true},
    hsHasta:{type:Date, required:true},
    state:{type:Boolean, required:true},
});

module.exports=mongoose.model('Schedule', ScheduleSchema)