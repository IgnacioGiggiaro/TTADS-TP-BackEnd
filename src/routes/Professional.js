const express = require('express');
const controller = require('../controllers/Professional')

const router = express.Router();

router.get('/', controller.getProfessional);
router.get('/:id/', controller.getProfessionalByID);
router.get('/:id/:fecha', controller.retrieveProfessional);
// router.get('/p', controller.prueba);
router.post('/', controller.createProfessional);
router.delete('/:id/', controller.deleteProfessional);
router.put('/:id/', controller.updateProfessional);
router.post('/Professional/:id/Schedule', controller.addSchedule);
router.delete('/Professional/:id/Schedule', controller.removeSchedule);
router.post('/Professional/:id/OS', controller.addOS);
router.delete('/Professional/:id/OS', controller.removeOS);
router.post('/Professional/:id/Practice', controller.addPractice);
module.exports= router;