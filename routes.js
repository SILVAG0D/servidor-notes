const express = require('express');

const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const { create } = require('./models/AnnotationData');
const PriorityController = require('./controllers/PriorityController');
const ContentContoller = require('./controllers/ContentContoller');

//Rotas das Annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);


//Rotas das Priorities
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

//Rotas do Content
routes.post('/contents/:id',ContentContoller.update);

module.exports = routes;