const mongoose = require('mongoose')

const tareaSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    terminada: {type: Boolean, default: false}
})

const Tarea = mongoose.model('task', tareaSchema)

module.exports = Tarea