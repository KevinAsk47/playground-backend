const Tarea = ({tarea, updateTarea}) => {
    return (
        <div className="contenedorTarea">
            <h2 className={tarea.terminada && 'terminada'}>{tarea.nombre}</h2>
            <button onClick={updateTarea}
            data-numero={tarea.id} data-accion="hecha">Dar por Hecha</button>
            <button onClick={updateTarea}
            data-numero={tarea.id} data-accion="borrar">Borrar Tarea</button>
        </div>
    )
}

export default Tarea