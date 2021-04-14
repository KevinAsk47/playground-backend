const express = require('express')
const cors = require('cors')
const { response } = require('express')

const app = express()

app.use(cors())
app.use(express.json())

var info = [
    {id: 1, nombre: 'Explicar Node', terminada: false},
    {id: 2, nombre: 'Pasear a Franco', terminada: false},
    {id: 3, nombre: 'Cortarme el pelo', terminada: false},
    {id: 4, nombre: 'Hacer la cama', terminada: false}
]

app.get('/api/tareas', (req, res) => {
    res.json({respuesta: info, success: true})
})

app.delete('/api/borrarTarea/:idABorrar', (req, res) => {
    const idABorrar = parseInt(req.params.idABorrar)
    info = info.filter(tarea => tarea.id !== idABorrar)
    res.json({respuesta: info})
})

app.put('/api/modificarTarea/:idAModificar', (req, res) => {
    const idAModificar = parseInt(req.params.idAModificar)
    info = info.map(tarea => {
        if (tarea.id === idAModificar) {
           tarea = {...tarea, ...req.body}
        }
        return tarea
    })
    res.json({respuesta: info})
})

app.post('/api/agregarTarea', (req,res) => {
    const {nombre} = req.body
    info.push({
        id: info[info.length-1].id+1,
        nombre: nombre, 
        terminada: false
    })
    res.json({respuesta: info})
})

app.listen(4000, () => console.log("App listening on port 4000"))