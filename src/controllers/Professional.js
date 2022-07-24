const Professional = require ('../models/Professional');

const professionalController = {
    getProfessional: async (req, res) => {
        try {
            const professional= await Professional.find({}).exec();
            return res.status(200).send({success: true, professional})
        }catch (err){
             return res.status(503).send({success: false, postMessage: 'Error finding Professionals'});
        }
    },

    getProfessionalByID: async (req, res )=>{
        try{
            const professional= await Professional.findById(req.params.id).exec();
            if(!professional) return res.status(404).send({message: `there is no prof with ID: ${req.params.id}`});
            return res.send(professional);

        } catch {
            return res.status(500).send({ message: 'Error finding Professional' });

        }
    },

    createProfessional: async (req, res) =>{
        try {
                const newProfessional= new professional({
                    dni : req.body.dni,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    telefono: req.body.telefono,
                    mail: req.body.mail,
                    direccion: req.body.direccion,
                    fecha_nac: req.body.fecha_nac,
                    schedule: req.body.schedule
                });
                await newProfessional.save();
                return res.status(200).send({success:true, newProfessional});
        }catch {
            return res.status(503).send({message: 'Error creating a Professional'})
        }
    },

    deleteProfessional: async (req, res)=>{
        try {
            const removedProfessional = await Professional.findByIdAndRemove(req.params.id).exec();
            if (!removedProfessional) return res.status(404).send({message: 'There is no Professional with ID: ${req.params.id}' });
            return res.send({message: 'Professional deleted successfully'})
        } catch {
            return res.status(500).send({message: 'Error deleting category'})
        }
    },

    updateProfessional: async (req, res) =>{
        try {
            const updatedProfessional =await Professional.findByIdAndUpdate(
                req.params.id, {dni : req.body.dni,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    telefono: req.body.telefono,
                    mail: req.body.mail,
                    direccion: req.body.direccion,
                    fecha_nac: req.body.fecha_nac,
                    schedule: req.body.schedule}
            ).exec();

            if (!updatedProfessional) return res.status(404).send ({message: `There is no Professional with Id: ${req.params.id} `});

            return res.send({message: "Professional updated successfully"});
        } catch {
            return res.status(503).send({message: 'error updating Professional'})
        }
    }
}

module.exports= professionalController;