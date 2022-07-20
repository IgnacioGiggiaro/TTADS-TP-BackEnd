const {ObraSocial} = require('../models');

const obraSocialController = {
    createObraSocial: async (req, res) => {
        try{
            const newObraSocial = new ObraSocial({
              nombre: req.body.nombre,
            });
            await newObraSocial.save();
            return res.status(200).send({success:true, newObraSocial});
        } catch (error){
            return res
                .status(500)
                .send({ success: false, message: 'Error creating obra social'})
        }
    },

    getObraSociales: async (req, res) => {
        try{
            const obraSocial = await ObraSocial.find({}).exec();
            return res.status(200).send({ success: true, obraSocial});
        }catch (error){
            return res
                .status(500)
                .send({ success: false, message:'Error finding obra social'});
        }
    },
    getObraSocial: async (req, res)=>{
        try{
            const {detailed} = req.query;
            let obraSocial = null;
            if(!detailed){
                obraSocial=await ObraSocial.findById(req.params.id).exec();
            }else{
                const obraSocialModel = await ObraSocial.findById(req.params.id).populate({path:''})

            }
        }catch (err){

        }
    }


}

module.exports = obraSocialController;