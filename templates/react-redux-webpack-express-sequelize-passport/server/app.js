const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.load();
const app = express();
const models = require('./models');
const routes = require('./routes');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Api routes
app.use(routes)

models.sequelize.sync().then(function () {
 console.log('DATABASE CONNECTED SUCCESSFULLY');
})
.catch(err=>console.log(err))

// Using Express to get routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = app;