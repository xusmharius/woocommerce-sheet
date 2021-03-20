import mysqlConnection from '../database';
import jwt from 'jsonwebtoken';
import config from '../config';
import * as libs from '../libs/usuarioValido';


export const sigIn = (req, res) => {

    const { username, password } = req.query;

    const query = "SELECT id FROM `usuariosApi` WHERE username LIKE ? AND password LIKE MD5(?)"

    mysqlConnection.query(
        query, [username, password],
        (err, rows, fields) => {
            if (!err) {
                const idValido = libs.usuarioValido(rows);
                if (idValido) {
                    const token = jwt.sign({ id: idValido }, config.SECRET, {
                        expiresIn: 86400 //24 horas
                    })
                    res.status(200).json({ token })
                } else {
                    res.status(401).json({ token: null, message: "Usuario o contraseña incorrecta" })
                }
            } else {
                console.log(err);
            }
        })
}