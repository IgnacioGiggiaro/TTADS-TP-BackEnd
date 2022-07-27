const mongoose = require('mongoose');

/*
mongoose.connect('mongodb://localhost/notes-db-app', {
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify: false
})
    .then(db=> console.log('Db is connected'))
    .catch(err => console.error(err));

 */
mongoose.connect('mongodb+srv://admin:admin@hospital-db.gpzdy.mongodb.net/?retryWrites=true&w=majority',
    err => {
        if(err) throw err;
        console.log('connected to MongoDB Remotely')
    });