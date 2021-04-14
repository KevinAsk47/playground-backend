const Tarea = ({tarea, borrarTarea, modificarTarea}) => {
    return (
        <div className="contenedorTarea">
            <h2 className={tarea.terminada && 'terminada'}>{tarea.nombre}</h2>
            <button onClick={modificarTarea}
            data-numero={tarea.id} data-accion="hecha">Dar por Hecha</button>
            <button onClick={borrarTarea}
            data-numero={tarea.id} data-accion="borrar">Borrar Tarea</button>
        </div>
    )
}

export default Tarea