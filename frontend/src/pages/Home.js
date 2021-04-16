import React from 'react'
import Tarea from '../components/Tarea';
import axios from 'axios'
import { Redirect } from 'react-router';

class Home extends React.Component {
    state = {
        tareas: [],
        loading: true,
        textoInput: '',
        error: false
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/tareas')
        .then(response => this.setState({tareas: response.data.respuesta, loading: false}))
        .catch(error => this.props.history.push('/error'))
    }

    borrarTarea = (e) => {
        const idABorrar = e.target.dataset.numero
        axios.delete('http://localhost:4000/api/tarea/'+idABorrar)
        .then(response => {
            if (response.data.success) {
                this.setState({
                    tareas: this.state.tareas.filter(tarea => tarea._id !== response.data.respuesta._id)
                })
            } else {
                alert(response.data.respuesta)
            }
        })
    }

    modificarTarea = (e) => {
        const idADarPorHecho = e.target.dataset.numero
        axios.put('http://localhost:4000/api/tarea/'+idADarPorHecho, {
            terminada: true
        })
        .then(response => {
            this.setState({
                tareas: this.state.tareas.map(tarea => {
                    if (tarea._id === response.data.respuesta._id) {
                       tarea = response.data.respuesta
                    } 
                    return tarea
                })
            })
        })
    }

    cargarNuevaTarea = (e) => {
            axios.post('http://localhost:4000/api/tareas', {
            nombre: this.state.textoInput
            })
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        tareas: [...this.state.tareas, response.data.respuesta],
                        textoInput: ''})
                } else {
                    alert(response.data.error)
                }
            })
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
                    return <Tarea key={tarea._id} tarea={tarea} borrarTarea={this.borrarTarea} 
                    modificarTarea={this.modificarTarea} />
                })}
            </div>
        )
    }
}

export default Home