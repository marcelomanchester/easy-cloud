const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const userRouter = require('./user');

const routes = (app) => {
    app.use(userRouter(router, auth));
};

module.exports = routes;
