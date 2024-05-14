const express = require('express');
const router = express.Router();
const controllers = require('../controllers/main');

// Get all persons in a specific industry
router.get('/industry/:industry', controllers.getPersonsByIndustry);

// Get all persons
router.get('/person', controllers.getAllPersons);

// Get a specific person by ID
router.get('/person/:id', controllers.getPersonById);

// Get all events for a specific person
router.get('/person/:id/events', controllers.getEventsByPerson);

// Get all connections for a specific person
router.get('/person/:id/connections', controllers.getConnectionsByPerson);

router.get('/images/:id', controllers.getImageById);

module.exports = router;
