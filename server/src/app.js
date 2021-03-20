import express from 'express';
import morgan from 'morgan';
import info from '../package.json';
//const express = require('express');
const app = express();

//Configuracion
//app.set('port', 4000);

//Midlewares
app.use(morgan('dev'));

//Routes
import ordenesRoute from "./routes/ordenes.routes"
import authRoute from "./routes/auth.routes"

app.use('/api/ordenes', ordenesRoute);
app.use('/api/auth', authRoute);


app.use(require('./routes/productos.routes.js').default);


app.set('info', info);


app.get('/', (req, res) => {
    res.json({
        author: app.get('info').author,
        name: app.get('info').name,
        description: app.get('info').description,
        version: app.get('info').version,
    })
})




export default app