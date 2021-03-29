const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');

const db = require('./dataBase').getInstance();

require('dotenv').config();
const cronRun = require('./cron-jobs');

db.setModels();

const { apiRouter } = require('./routers');
const { PORT } = require('./configs/configs');

const app = express();

Sentry.init({ dsn: "https://d151280c4536471cb37388a05a3981f6@o561011.ingest.sentry.io/5697310" }); // Sentry configuration

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(Sentry.Handlers.requestHandler());        // first Sentry middleware

app.use('/', apiRouter);

app.use(Sentry.Handlers.errorHandler());          // last Sentry middleware

app.use('*', (err, req, res, next) => {
  res
      .status(err.status)
      .json({ text: err.message });
});

app.listen(PORT, () => {
  console.log(`server started to ${PORT}`);
  cronRun();
});

