const express = require('express');
const controller = require('../controllers/Paciente');
const router = express.Router();

router.get('/PacienteGet/:id', controller.getPaciente);
router.get('/PacienteGet',controller.getPacientes);
router.post('/PacienteCreate', controller.createPaciente);
router.delete('/PacienteDelete/:id', controller.deletePaciente);
router.put('/PacienteUpdate/:id', controller.updatePaciente);

module.exports = router;