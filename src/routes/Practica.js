const express = require('express');
const controller = require('../controllers/Practica');
const router = express.Router();

router.get('/PracticaGet/:id', controller.getPracticaById);
router.get('/PracticaGet',controller.getPractica);
router.post('/PracticaCreate', controller.createPractica);
router.delete('/PracticaDelete/:id', controller.deletePractica);
router.put('/PracticaUpdate/:id', controller.updatePractica);

module.exports = router;