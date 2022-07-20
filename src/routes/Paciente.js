const express = require('express');
const router = express.Router();

const Paciente = require('../models/Paciente');

router.get('/paciente/add',(req, res)=>
    {
        res.render('paciente/new-paciente');
    }
);

router.post('/paciente/new-paciente', async (req, res)=>{
    const { dni, nombre, apellido, telefono, mail, direccion, fecha_nac }= req.body;
    const errors = [] ;
    if(!dni) {
        errors.push({text:'Porfavor ingrese un Dni'});

    }
    if(!nombre) {
        errors.push({text:'Porfavor ingrese un nombre'});
    }
    if(!apellido) {
        errors.push({text:'Porfavor ingrese un apellido'});
    }
    if(!telefono) {
        errors.push({text:'Porfavor ingrese un telefono'});
    }
    if(!mail) {
        errors.push({text:'Porfavor ingrese un mail'});
    }
    if(!direccion) {
        errors.push({text:'Porfavor ingrese una direccion'});
    }
    if(!fecha_nac) {
        errors.push({text:'Porfavor ingrese una fecha de nacimiento'});
    }
    if (errors.length>0) {
        res.render('paciente/new-paciente', {
            errors,
            dni,
            nombre,
            apellido,
            telefono,
            mail,
            direccion,
            fecha_nac
        });

    }else{
        const newPaciente = new Paciente({dni, nombre, apellido, telefono, mail, direccion, fecha_nac});
        await newPaciente.save();
        res.redirect('/pacientes')
    }
})


router.get('/pacientes', async (req, res)=>{
    const pacientes = await Paciente.find().lean();
    res.render('paciente/all-paciente', {pacientes});
})

router.get('/paciente/edit/:id', async (req, res)=>{
    const paciente = await Paciente.findById(req.params.id).lean();

    res.render('paciente/edit-paciente',{paciente});
})

router.put('/paciente/edit-paciente/:id', async (req, res)=>{
    const { dni, nombre, apellido, telefono, mail, direccion, fecha_nac } = req.body;
    await Paciente.findByIdAndUpdate(req.params.id, {dni, nombre, apellido, telefono, mail, direccion, fecha_nac});
    res.redirect('/pacientes');
});

router.delete('/paciente/delete/:id', async (req, res)=>{
    await Paciente.findByIdAndDelete(req.params.id);
    res.redirect('/pacientes')
})
module.exports = router;