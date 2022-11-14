const express = require('express');
const route = express.Router();
const controllers = require('../controllers/controllerloader');

route.get('/',controllers.home);
route.get('/hi/:hello',controllers.testSession);




module.exports = route;