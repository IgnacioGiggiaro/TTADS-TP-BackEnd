/*const profesional = require ('../models/Profesional');
const profesionalController = {
    getProf: async (req, res) => {
        try {
            const profs= await profesional.find({}).exec();
            return res.status(200).send({success: true, profs})
        }catch (err){
             return res.status(503).send({success: false, postMessage: 'Error finding Professionals'});
        }
    }



}*/