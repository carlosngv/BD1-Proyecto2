const express = require('express');
const { controller } = require('../controllers/query.controller');
const router = express.Router();


router.get('/query1', controller.getQuery1);
router.get('/query2', controller.getQuery2);
router.get('/query3', controller.getQuery3);

router.get('/query5', controller.getQuery5);
router.get('/query6', controller.getQuery6);
router.get('/query7', controller.getQuery7);
router.get('/query8', controller.getQuery8);
router.get('/query9', controller.getQuery9);
router.get('/query10', controller.getQuery10);
router.get('/query11', controller.getQuery11);
router.get('/query12', controller.getQuery12);
router.get('/query13', controller.getQuery13);
router.get('/query14', controller.getQuery14);
router.get('/query15', controller.getQuery15);
router.get('/query16', controller.getQuery16);
router.get('/query17', controller.getQuery17);
router.get('/query18', controller.getQuery18);
router.get('/query19', controller.getQuery19);
router.get('/query20', controller.getQuery20);

router.post('/pais/new', controller.insertPais);
router.post('/pais/delete', controller.deletePais);
router.get('/pais', controller.getPaises);
router.post('/pregunta/new', controller.insertPregunta);
router.post('/pregunta/delete', controller.deletePregunta);
router.post('/pregunta/update', controller.updatePregunta);
router.get('/pregunta', controller.getPreguntas);




module.exports =  {
    router
}
