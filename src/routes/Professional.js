const express = require('express');
const controller = require('../controllers/Professional')

const router = express.Router();

router.get('/', controller.getProfessional);
router.get('/:id/', controller.getProfessionalByID);
router.post('/', controller.createProfessional);
router.delete('/:id/', controller.deleteProfessional);
router.put('/:id/', controller.updateProfessional);
router.post('/ProfessionalAddSchedule/:id', controller.addSchedule);
router.delete('/ProfessionalDeleteSchedule/:id', controller.removeSchedule);
module.exports= router;