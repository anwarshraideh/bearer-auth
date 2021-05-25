'use strict';
const mongoose = require('mongoose');
require('dotenv').config();
const { start } = require('./src/server.js');

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    start(PORT);
  })
  .catch((error) => {
    console.error('Could not connect to DATABASE: ', error.message);
  });