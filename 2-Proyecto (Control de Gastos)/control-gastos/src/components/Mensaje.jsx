import React from 'react'

/* A10-Creamos este componente con un 2 props. Estos los usaremos para que "children" aloje el valor del mensaje (si es valido o no el presupuesto) y "tipo" que indicará el tipo de error, o nombre de la clase css que aplicara segun corresponda. Estos valores seran traidos desde NuevoPresupuesto.jsx */

const Mensaje = ({children, tipo}) => {

  return (
    <div className={`alerta ${tipo}`}> {/* A10-Contendra la clase css alerta y dependiendo que tipo sea se aplicará (segun contendra la variable tipo).Puede ser .error que traera del css.Esta forma parecida a template string sirve para establecer clases css dinamicas con estaticas. */}

        {children} {/* Contendra el mensaje */}

    </div>
  )
}

export default Mensaje