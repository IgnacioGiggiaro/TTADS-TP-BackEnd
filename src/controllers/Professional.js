const professional = require ('../models/Professional');
const {Professional} = require("../models");
const professionalController = {
    getProf: async (req, res) => {
        try {
            const profs= await professional.find({}).exec();
            return res.status(200).send({success: true, profs})
        }catch (err){
             return res.status(503).send({success: false, postMessage: 'Error finding Professionals'});
        }
    },

    getProfByID: async (req, res )=>{
        try{
            const prof= await professional.findById(req.params.id).exec();
            if(!prof) return res.status(404).send({message: `there is no prof with ID: ${req.params.id}`})

        } catch {

        }
    },

    createProf: async (req, res) =>{
        try {
                const prof= new professional({
                    dni : req.body.dni,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    telefono: req.body.telefono,
                    mail: req.body.mail,
                    direccion: req.body.direccion,
                    fecha_nac: req.body.fecha_nac,
                    schedule: req.body.schedule
                });
                await prof.save();
        }catch {
            return res.status(503).send({message: 'Error creating a Professional'})
        }
    },

    deleteProf: async (req, res)=>{
        try {
            const removedProf = await professional.findByIdAndRemove(req.params.id).exec();
            if (!removedProf) return res.status(404).send({message: `There is no Professional with ID: $(req.params.id)`})
            return res.send({message: 'Professional deleted successfully'})
        } catch {
            return res.status(500).send({message: 'Error deleting category'})
        }
    },

    updateProf: async (req, res) =>{
        try {
            const updatedProf =await professional.findByIdAndUpdate(
                req.params.id, {dni : req.body.dni,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    telefono: req.body.telefono,
                    mail: req.body.mail,
                    direccion: req.body.direccion,
                    fecha_nac: req.body.fecha_nac,
                    schedule: req.body.schedule}
            ).exec();

            if (!updatedProf) return res.status(404).send ({message: `There is no Professional with Id: ${req.params.id} `})
        } catch {
            return res.status(503).send({message: 'error updating Professional'})
        }
    }
}

module.exports= professionalController;