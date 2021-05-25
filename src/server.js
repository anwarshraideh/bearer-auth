'use strict';

const express = require('express');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');
const userRouter = require('./auth/router.js');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);
const start = (port) => {
  app.listen(port, () => {
    console.log('The app is listening on PORT: ', port);
  });
};

app.use('*', notFound);
app.use(serverError);

module.exports = {
  app: app,
  start: start,
};