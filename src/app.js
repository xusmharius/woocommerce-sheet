if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//Crear un server:
const express = require('express')

require('./spreadsheet');

const app = express();

//rutas
app.use(require('./routes/google.routes'));

//Exportar app
module.exports = app;