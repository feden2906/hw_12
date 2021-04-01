const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');

require('dotenv').config();
const db = require('./dataBase').getInstance();

const cronRun = require('./cron-jobs');

db.setModels();

const { apiRouter } = require('./routers');
const { PORT } = require('./configs/configs');
const { Sentry } = require('./logger');

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(Sentry.Handlers.requestHandler()); // first Sentry middleware

app.use('/', apiRouter);

app.use(Sentry.Handlers.errorHandler()); // last Sentry middleware

app.use('*', (err, req, res, next) => {
  Sentry.captureException(err);

  res
      .status(err.status)
      .json({ text: err.message });
});

app.listen(PORT, () => {
  console.log(`server started to ${PORT}`);
  cronRun();
});
