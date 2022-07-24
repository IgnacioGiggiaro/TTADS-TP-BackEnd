const express = require('express');
const controller = require('../controllers/Professional')

const router = express.Router();

router.get('/ProfessionalGet', controller.getProfessional);
router.get('/ProfessionalGet/:id/', controller.getProfessionalByID);
router.post('/ProfessionalCreate', controller.createProfessional);
router.delete('/ProfessionalDelete/:id/', controller.deleteProfessional);
router.put('/ProfessionalUpdate/:id', controller.updateProfessional);

module.exports= router;