const express = require('express')
const router = express.Router()
const tareasControllers = require('../controllers/tareasControllers')
const validador = require('../config/validador')

const {obtenerTodasTareas, cargarNuevaTarea, borrarTarea, actualizarTarea} = tareasControllers

router.route('/tareas')
.get(obtenerTodasTareas)
.post(validador, cargarNuevaTarea)

router.route('/tarea/:id')
.delete(borrarTarea)
.put(actualizarTarea)

module.exports = router

