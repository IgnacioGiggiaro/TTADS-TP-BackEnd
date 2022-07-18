const mongoose = require('mongoose');
const stream = require("stream");
const { Schema }=mongoose;



const ScheduleSchema = new Schema({

});

module.exports=mongoose.model('Schedule', ScheduleSchema)