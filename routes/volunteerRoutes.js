const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

router.get('/', volunteerController.getAllVolunteers);
router.get('/:id', volunteerController.getVolunteerById);
router.post('/', volunteerController.createVolunteer);
router.put('/:id', volunteerController.updateVolunteer);
router.delete('/:id', volunteerController.deleteVolunteer);
router.get('/by-user/:userId', volunteerController.getvolunteersByUserId);
module.exports = router;
