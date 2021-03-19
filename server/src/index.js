const express = require('express');
const app = express();

//Configuracion
app.set('port', 4000);

//Midlewares
app.use(express.json());

//Routes
app.use(require('./routes/ordenes'));
app.use(require('./routes/productos'));


app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto 4000')
})