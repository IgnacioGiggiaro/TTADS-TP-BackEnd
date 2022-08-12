const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hospital-db-app',
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });