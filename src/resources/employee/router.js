const express = require('express');
const generateControllers = require('../../util/query');
const Employee = require('./model');

const employeeController = generateControllers(Employee);
const employeeRouter = express.Router();

employeeRouter
  .route('/')
  .get(employeeController.getAll)
  .post(employeeController.createOne);

employeeRouter
  .route('/:id')
  .get(employeeController.getOne)
  .put(employeeController.updateOne)
  .delete(employeeController.deleteOne);

module.exports = employeeRouter;
