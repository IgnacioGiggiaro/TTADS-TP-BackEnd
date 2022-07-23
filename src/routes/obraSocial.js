const express = require('express');
const controller = require('../controllers/ObraSocial');
const router = express.Router();

router.get('/ObraSocial/:id', controller.getObraSocial);
router.get('/ObraSocialGet',controller.getObraSociales);
router.post('/ObraSocialCreate', controller.createObraSocial);
router.delete('/ObraSocialDelete/:id', controller.deleteObraSocial);
router.put('/ObraSocialUpdate/:id', controller.updateObraSocial);

module.exports = router;