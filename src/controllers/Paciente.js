const Paciente = require('../models/Paciente');

const pacienteController = {
    createPaciente: async (req, res) => {
        try{
            const newPaciente = new Paciente({
                dni: req.body.dni,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                telefono: req.body.telefono,
                mail: req.body.mail,
                direccion: req.body.direccion,
                fecha_nac: req.body.fecha_nac
            });

            await newPaciente.save();
            return res.status(200).send({success:true, newPaciente});
        } catch (error){
            return res
                .status(500)
                .send({ success: false, message: error})
        }
    },

    getPacientes: async (req, res) => {
        try{
            const paciente = await Paciente.find({}).exec();
            return res.status(200).send({ success: true, paciente});
        }catch (error){
            return res
                .status(500)
                .send({ success: false, message:'Error finding Paciente'});
        }
    },
    getPaciente: async (req, res) => {
        try {
            const paciente = await Paciente.findById(req.params.id).exec();

            if (!paciente) return res.status(404).send({ message: `There is no paciente with ID: ${req.params.id}` });

            return res.send(paciente);
        } catch {
            return res.status(500).send({ message: 'Error finding Paciente' });
        }
    },
    deletePaciente: async (req, res) => {
        try {
            const removedPaciente = await Paciente.findByIdAndRemove(req.params.id).exec();

            if (!removedPaciente) return res.status(404).send({ message: `There is no Paciente with ID: ${req.params.id}` });

            return res.send({message: "Paciente deleted successfully"});
        } catch {
            return res.status(500).send({ message: 'Error deleting Paciente' });
        }
    },
    updatePaciente: async (req, res) => {
        try {
            const updatedPaciente = await Paciente.findByIdAndUpdate(req.params.id, {
                dni: req.body.dni,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                telefono: req.body.telefono,
                mail: req.body.mail,
                direccion: req.body.direccion,
                fecha_nac: req.body.fecha_nac
            }).exec();

            if (!updatedPaciente) return res.status(404).send({ message: `There is no Paciente with ID: ${req.params.id}` });

            return res.send({message: "Paciente updated successfully"});
        } catch {
            return res.status(500).send({ message: 'Error updating Paciente' });
        }
    },


}

module.exports = pacienteController;