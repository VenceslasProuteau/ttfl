const express = require('express');
require('dotenv').config({path: '../.env'});
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());

const routes = require('./routes/apiRouter');

app.get('/', (req, res) => {    
  res.status(200).json('Basketball api updates')
});

app.use('/api/v1', routes);

app.listen(3000, () => {
  console.log(`🌎 server running on port 3000`)
});