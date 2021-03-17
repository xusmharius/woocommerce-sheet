if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//Crear un server:
const express = require('express')

//require('./spreadsheet');

const app = express();

app.set('views', './src/views');
app.set('view engine', 'pug')

//rutas
app.use(require('./routes/google.routes'));

//Exportar app
module.exports = app;