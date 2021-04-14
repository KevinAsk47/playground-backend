import React from 'react'
import Tarea from '../components/Tarea';
import axios from 'axios'

class Home extends React.Component {
    state = {
        tareas: [],
        loading: true,
        textoInput: ''
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/tareas')
        .then(response => this.setState({tareas: response.data.respuesta, loading: false}))
    }

    borrarTarea = (e) => {
        const idABorrar = parseInt(e.target.dataset.numero)
        axios.delete('http://localhost:4000/api/borrarTarea/'+idABorrar)
        .then(response => this.setState({tareas: response.data.respuesta}))
    }

    modificarTarea = (e) => {
        const idADarPorHecho = parseInt(e.target.dataset.numero)
        axios.put('http://localhost:4000/api/modificarTarea/'+idADarPorHecho, {
            terminada: true
        })
        .then(response => this.setState({tareas: response.data.respuesta}))
    }

    cargarNuevaTarea = (e) => {
        axios.post('http://localhost:4000/api/agregarTarea', {
            nombre: this.state.textoInput
        })
        .then(response => this.setState({tareas: response.data.respuesta,
        textoInput: ''}))
    }

    leerInput = (e) => {
        const valor = e.target.value
        this.setState({textoInput: valor})
    }

    render() {        
        return (    
            <div className="contenido">
                <input placeholder="Ingresar una nueva tarea..." 
                onChange={this.leerInput} value={this.state.textoInput} />
                <button onClick={this.cargarNuevaTarea}>Enviar</button>
                {this.state.loading 
                ? <h1>Cargando...</h1>
                : this.state.tareas.length === 0
                ? <h2>No hay tareas todavía</h2>
                : this.state.tareas.map(tarea => {
                    return <Tarea key={tarea.id} tarea={tarea} borrarTarea={this.borrarTarea} 
                    modificarTarea={this.modificarTarea} />
                })}
            </div>
        )
    }
}

export default Home