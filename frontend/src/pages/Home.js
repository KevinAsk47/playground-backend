import React from 'react'
import Tarea from '../components/Tarea';
class Home extends React.Component {
    state = {
        tareas: [],
        loading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                tareas: [
                    {id: 1, nombre: 'Comprar pan', terminada: false},
                    {id: 2, nombre: 'Comprar leche', terminada: false},
                    {id: 3, nombre: 'Pasear a Franco', terminada: false}
                ],
                loading: false
            })
        }, 500);
    }

    updateTarea = (e) => {
        const idABuscar = parseInt(e.target.dataset.numero)
        const accionAEjecutar = e.target.dataset.accion
        console.log(accionAEjecutar)
        if (accionAEjecutar === 'hecha') {
            var nuevasTareas = this.state.tareas.map(tarea => {
                if (tarea.id === idABuscar) {
                    tarea.terminada = true
                }
                return tarea
            })
        } else {
            var nuevasTareas = this.state.tareas.filter(tarea => {
                return tarea.id !== idABuscar
            })
        }

        this.setState({
            tareas: nuevasTareas
        })
    }

    render() {        
        return (    
            <div className="contenido">
                {this.state.loading 
                ? <h1>Cargando...</h1>
                : this.state.tareas.length === 0
                ? <h2>No hay tareas todavía</h2>
                : this.state.tareas.map(tarea => {
                    return <Tarea key={tarea.id} tarea={tarea} updateTarea={this.updateTarea} />
                })}
            </div>
        )
    }
}

export default Home