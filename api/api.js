const express = require('express');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();

// V1
// Express a besoin d’un middleware pour parser les corps de requêtes POST
const bodyParser = require('body-parser');
 
// Basic Auth
const { digestAuth } = require('../basic-auth/basic-auth');
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/api/v1', v1);
 
app.get('/api/v1/people', async (request, response) => {
    try {
        const data = await peopleService.getPeople();
        response.send(data);
    } catch (error) {
        console.log('error get people: ', error);
        response.sendStatus(404).end(error);
    }
});
 
app.put('/api/v1/people/:id', async (request, response) => {
    const id = request.params.id;
    const people = {...request.name };
    try {
        const result = await peopleService.updatePeople(id, people);
        response.sendStatus(200);
    } catch (error) {
        console.log('error update people: ', error);
        response.sendStatus(404).end(error);
    }
});

module.exports = app;
