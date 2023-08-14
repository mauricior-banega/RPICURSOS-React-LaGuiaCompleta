
import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'



const Header = ({presupuesto, 
                setPresupuesto, 
                isValidPresupuesto,
                setIsValidPresupuesto}) => {
                
                /* A3-Extraemos ambos valores (presupuesto, setPresupuesto).A11-Añanimos estos otros 2 props que validarán el presupuesto. Cuando se tienen varios props es recomendable ponerlos asi*/

  return (
    <header>
        <h1>Planificador de Gastos</h1>
        
        {/* A?-Creamos un if que validará si es correcto el presupuesto creará un parrafo nuevo que diga control presupuesto, sino ejecuta que se cree "Nuevo Presupuesto" para que se cargue nuevamente. */}
        {isValidPresupuesto ? (
            <p>Control Presupuesto</p>
        ) : (

            <NuevoPresupuesto /* Del componente: const NuevoPresupuesto */
                /* A4-Traemos esos valores para usarlos*/
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}

                /> 
        )}
                
    </header>
  )
}

export default Header