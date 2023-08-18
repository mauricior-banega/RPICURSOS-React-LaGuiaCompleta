/* ACLARACION: Carpeta "helpers" sirve para crear todas las funciones JS que usaremos a modo de ayuda y que gralmente en todos los proyectos utilizamos para hacer mas rapida y correcta la logica de programacion. */

export const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}

export const formatearFecha = fecha => {

    const fechaNueva = new Date(fecha);
    const opciones = {
        year:'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones)
}