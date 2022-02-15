const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')

const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));