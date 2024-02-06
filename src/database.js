const mongoose = require('mongoose');

module.exports = async function conect() {
    try {
        await mongoose.connect('mongodb://localhost/hospital-db-app');
        console.log("Conectado :D ");
    } catch (error) {
        console.log(error);
        console.log("No se conecto :( ")
    }
}
