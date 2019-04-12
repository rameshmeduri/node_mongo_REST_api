const express = require('express');
const schoolRouter = require('../resources/school/router');
const restRouter = express.Router();

restRouter.use('/school', schoolRouter);

module.exports = restRouter;
