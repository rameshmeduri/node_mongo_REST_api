const express = require('express');
const generateControllers = require('../../util/query');
const School = require('./model');

const schoolController = generateControllers(School);
const schoolRouter = express.Router();

schoolRouter
  .route('/')
  .get(schoolController.getAll)
  .post(schoolController.createOne);

schoolRouter
  .route('/:id')
  .get(schoolController.getOne)
  .put(schoolController.updateOne)
  .delete(schoolController.deleteOne);

module.exports = schoolRouter;
