const express = require('express');
const employeeRouter = require('../resources/employee/router');
const restRouter = express.Router();

restRouter.use('/employee', employeeRouter);

module.exports = restRouter;
