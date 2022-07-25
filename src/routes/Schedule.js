const express = require('express');
const controller = require('../controllers/Schedule')

const router = express.Router();

router.get('/ScheduleGet', controller.getSchedule);
router.get('/ScheduleGet/:id/', controller.getScheduleByID);
router.post('/ScheduleCreate', controller.createSchedule);
router.delete('/ScheduleDelete/:id/', controller.deleteSchedule);
router.put('/ScheduleUpdate/:id', controller.updateSchedule);

module.exports= router;