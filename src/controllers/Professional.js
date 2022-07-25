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
                const newProfessional= new Professional({
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
            return res.status(500).send({message: 'Error deleting Professional'})
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
    },
    addSchedule: async (req, res) => {
        const professionalId = req.params.id;

        const professional = await Professional.findById(professionalId);
        if (!professional) {
            return res.status(404).send({ message: 'Professional not found' });
        }

        if (professional.schedules.indexOf(req.body.schedulesId) === -1) {
            professional.schedules.push(req.body.schedulesId);
        }

        const updatedProfessional = await Professional.findByIdAndUpdate(professionalId, professional, {
            new: true,
            //returnOriginal:false
        });

        if (!updatedProfessional) {
            return res.status(500).send({ message: 'Error trying to add Schedule' });
        }

        return res.send({ message: 'Professional updated successfully' });
    },
    removeSchedule: async (req, res) => {
        const professionalId = req.params.id;

        const professional = await Professional.findById(professionalId);
        if (!professional) {
            return res.status(404).send({ message: 'Profesional not found' });
        }

        const { scheduleId } = req.body;
        const index = professional.schedules.indexOf(scheduleId);
        if (index === -1) {
            return res.status(404).send({ message: 'Schedule not found' });
        }
        professional.schedules.splice(index, 1);

        const updateProfessional = await Professional.findByIdAndUpdate(professionalId, professional, {
            new: true,
        });

        if (!updateProfessional) {
            return res.status(500).send({ message: 'Error trying to remove Schedule' });
        }

        return res.send({ message: 'Professional updated successfully' });
    },
}

module.exports= professionalController;