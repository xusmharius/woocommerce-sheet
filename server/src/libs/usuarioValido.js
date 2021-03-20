export const usuarioValido = (rows) => {
    const usuarioValido = rows.length
    if (usuarioValido === 1) {
        const idUsuario = rows[0]['id']
        console.log("Usuario válido")
        return idUsuario;
    } else {
        console.log("Usuario incorrecto")
        return false
    }
};