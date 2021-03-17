let googleSheet = require('../spreadsheet');

const obtenerRegSheet = async(req, res) => {
    registros = await googleSheet.accederGoogleSheet();
    res.render('index', { registros })
        //console.log(registros);
}

module.exports = {
    obtenerRegSheet: obtenerRegSheet
}