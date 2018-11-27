require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/projects/:projectId', express.static(path.resolve(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server is listening at: http://localhost:${port}`);
});
