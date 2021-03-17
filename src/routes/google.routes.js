//Traer este objeto desde el modulo de express
const { Router } = require('express');
const router = Router();

const {
    obtenerRegSheet,
} = require('../controllers/google.controller')

router.get('/', obtenerRegSheet)

module.exports = router