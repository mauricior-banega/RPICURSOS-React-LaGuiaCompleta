import React from 'react'

/* A22-Importamos la dependecia del efecto de Editar/Borrar cada gasto. Manteniendo clickeado y corriendo a izq o derecha para cada caso. Es una dependencia de react que podemos encontrar en: https://www.npmjs.com ;desde donde buscamos "react-swipeable-list" y copiamos la dependencia que aparece en Install: npm i react-swipeable-list .A esta la ejecutaremos mediante la terminal o CMD del proyecto. */

import {
        LeadingActions,
        SwipeableList,
        SwipeableListItem,
        SwipeAction,
        TrailingActions
} from 'react-swipeable-list'

import "react-swipeable-list/dist/styles.css" //Importamos tambien los estilos css 


//Aclaracion:Como no es import default el archivo de helper lo abrimos con llaves {}
import {formatearFecha} from '../helpers'


import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = { //Objeto: Aqui asignaremos la imagen/icono a cada propiedad con la que usaremos para agregarse a cada categoria segun corresponda
    
                            ahorro: IconoAhorro,
                            casa: IconoCasa,
                            comida: IconoComida,
                            gastos: IconoGastos,
                            ocio: IconoOcio,
                            salud: IconoSalud,
                            suscripciones: IconoSuscripciones
}

/* A20-Creamos la seccion que mostrará cada uno de los gastos, al cual lo asignaremos a un párrafo para ser mostrado, asi mismo la fecha de la que convertimos en funcion con el formato correcto (del helpers). 

-Luego pasamos todas las imagenes vectoriales a nuestro proyecto para asignarla a cada categoria.
*/

const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {

  const {categoria, nombre, cantidad, id, fecha} = gasto;

  const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => setGastoEditar(gasto)}>
            Editar
        </SwipeAction>
    </LeadingActions>
)

  const trailingActions = () => (
    <TrailingActions>
        <SwipeAction 

            onClick={() => eliminarGasto(id)}
            destructive={true} //Aplica una transicion de eliminacion mejor, ya que sino desaparece el gasto abruptamente.
        >
            Eliminar
        </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()} //Parte izq del Efecto (Editar)
            trailingActions={trailingActions()} //Parte der del Efecto (Borrar)
        >
    <div className="gasto sombra">
        
        {/* Muestra la imagen de cada categoria */}
        <div className="contenido-gasto">
            <img 
                src={diccionarioIconos[categoria]} 
                alt="Icono Gasto"
            />


            <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
                <p className="fecha-gasto">
                    Agregado el: {''}
                    <span>{formatearFecha(fecha)}</span>
                </p>
            </div>

        </div>

             <p className="cantidad-gasto ">${cantidad}</p>

    </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto