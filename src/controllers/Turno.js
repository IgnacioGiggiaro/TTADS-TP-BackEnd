const Turno = require ('../models/Turno');

const turnoController = {
    getTurno: async (req, res) => {
        try {
            const turno= await Turno.find({}).exec();
            return res.status(200).send({success: true, turno})
        }catch (err){
            return res.status(503).send({success: false, postMessage: 'Error finding Turnos'});
        }
    },

    getTurnoByID: async (req, res )=>{
        try{
            const turno= await Turno.findById(req.params.id).exec();
            if(!turno) return res.status(404).send({message: `there is no turno with ID: ${req.params.id}`});
            return res.send(turno);

        } catch {
            return res.status(500).send({ message: 'Error finding Turno' });

        }
    },

    createTurno: async (req, res) =>{
        try {
            const newTurno= new Turno({
                dia : req.body.dia,
                paciente: req.body.paciente,
                obraSocial: req.body.obraSocial,
                professional: req.body.professional,
                practica: req.body.practica,

            });
            await newTurno.save();
            return res.status(200).send({success:true, newTurno});
        }catch {
            return res.status(503).send({message: 'Error creating a Turno'})
        }
    },

    deleteTurno: async (req, res)=>{
        try {
            const removedTurno = await Turno.findByIdAndRemove(req.params.id).exec();
            if (!removedTurno) return res.status(404).send({message: 'There is no Turno with ID: ${req.params.id}' });
            return res.send({message: 'Turno deleted successfully'})
        } catch {
            return res.status(500).send({message: 'Error deleting Turno'})
        }
    },

    updateTurno: async (req, res) =>{
        try {
            const updatedTurno =await Turno.findByIdAndUpdate(
                req.params.id, {

                    dia : req.body.dia,
                    paciente: req.body.paciente,
                    obraSocial: req.body.obraSocial,
                    professional: req.body.professional,
                    practica: req.body.practica,},
            ).exec();

            if (!updatedTurno) return res.status(404).send ({message: `There is no Turno with Id: ${req.params.id} `});

            return res.send({message: "Turno updated successfully"});
        } catch {
            return res.status(503).send({message: 'error updating Turno'})
        }
    }
}
   module.exports=turnoController;
