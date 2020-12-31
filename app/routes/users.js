const { route } = require('./dev');

const controller = require('../controllers/' + 'users');
const router = require('express').Router();

router
.get('/', controller.getALl);
.post('/', controller.createOne);
