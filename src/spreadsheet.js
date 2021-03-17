const { GoogleSpreadsheet } = require('google-spreadsheet');



const credenciales = require('./json/credenciales.json');



let googleId = process.env.GOOGLE_DOC_ID

console.log(googleId)

async function accederGoogleSheet() {

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();

    const sheet = documento.sheetsByIndex[0];

    console.log(sheet)

}

accederGoogleSheet();

module.exports = {

    accederGoogleSheet: accederGoogleSheet,

}