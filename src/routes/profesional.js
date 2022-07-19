const express = require('express');
const controller = require('../controllers/profesional')

const router = express.Router();

router.get('/', controller.getProf);
router.get('/:id/', controller.getProfByID);
router.post('/', controller.createProf);
router.delete('/:id/', controller.deleteProf);
router.put('/:id/', controller.updateProf);

module.exports= router;