const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin:admin@hospital-db.gpzdy.mongodb.net/?retryWrites=true&w=majority',
    err => {
        if(err) throw err;
        console.log('connected to MongoDB Remotely')
    });