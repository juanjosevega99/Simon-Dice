const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/dev', require('./routes/dev'));
app.use(
  '/users',
  require('./routes/users')
)(async () => {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.EXTERNAL_PORT);
  } catch (error) {
    console.log(error);
  }
});
