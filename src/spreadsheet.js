const { GoogleSpreadsheet } = require('google-spreadsheet'); //Llamada al modulo instalado de google-spreadsheet https://www.npmjs.com/package/google-spreadsheet
const credenciales = require('./json/credenciales.json'); //Fichero credenciales obtenidas desde https://console.developers.google.com/apis/
let googleId = process.env.GOOGLE_DOC_ID; //Id del documento conectado

//Funcion que accede al documento:
async function accederGoogleSheet() {
    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    const sheet = documento.sheetsByIndex[0];
    //console.log(sheet)
    const registros = await sheet.getRows();

    return registros;
};


module.exports = {
    accederGoogleSheet: accederGoogleSheet,
}