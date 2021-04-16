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
        res.json({success: true, respuesta: tareaAGrabar})            
    },

    borrarTarea: async (req, res) => {
        const id = req.params.id
        try {
            const tareaBorrada = await Tarea.findOneAndDelete({_id: id})
            res.json({success: true, respuesta: tareaBorrada}) 
        } catch(error) {
            res.json({success: false, respuesta: 'Ha ocurrido un error'})
        }
    },

    actualizarTarea: async (req, res) => {
        const id = req.params.id
        const tareaModificada = await Tarea.findOneAndUpdate({_id: id}, {...req.body}, {new: true})
        res.json({success: true, respuesta: tareaModificada})
    }
}

module.exports = tareasControllers