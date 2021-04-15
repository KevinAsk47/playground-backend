const Tarea = require('../models/Tarea')

const tareasControllers = {
    obtenerTodasTareas: async (req, res) => {
        const todasTareas = await Tarea.find()
        res.json({success: true, respuesta: todasTareas})
    },

    cargarNuevaTarea: async (req,res) => {
            const {nombre} = req.body
            const tareaAGrabar = new Tarea({nombre: nombre})
            await tareaAGrabar.save()
            const todasTareas = await Tarea.find()
            res.json({success: true, respuesta: todasTareas})            
    },

    borrarTarea: (req, res) => {
        const id = parseInt(req.params.id)
        info = info.filter(tarea => tarea.id !== id)
        res.json({respuesta: info})
    },

    actualizarTarea: (req, res) => {
        const id = parseInt(req.params.id)
        info = info.map(tarea => {
            if (tarea.id === id) {
               tarea = {...tarea, ...req.body}
            }
            return tarea
        })
        res.json({respuesta: info})
    }
}

module.exports = tareasControllers