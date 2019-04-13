const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8008;
const models = require('./models');
const routes = require('./routes');

dotenv.load();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));
// Api routes
app.use(routes);
// Using Express to get routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});
// UPDATE DB AND VERIFY CONNECTION
models.sequelize.sync().then(() => {
  console.log('DATABASE CONNECTED SUCCESSFULLY');
})
  .catch(err => console.log(err));
app.listen(PORT, () => {
  console.log(`Development Environment: ${process.env.NODE_ENV} Listen on port ${PORT}...`);
});
