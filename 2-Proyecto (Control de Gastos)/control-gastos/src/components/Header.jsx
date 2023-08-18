
import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import Controlpresupuesto from './Controlpresupuesto'
/* Se activa si el presupuesto es correcto */



const Header = ({ gastos,
                  setGastos, 
                  presupuesto, 
                  setPresupuesto, 
                  isValidPresupuesto, 
                  setIsValidPresupuesto }) => {

  /* A3-Extraemos ambos valores (presupuesto, setPresupuesto).A11-Añanimos estos otros 2 props que validarán el presupuesto. Cuando se tienen varios props es recomendable ponerlos asi
  A21-Convertimos function Header a const Header para convertirlo a objeto, con los elementos que tenia mas los aregados.*/

  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {/* A12-Creamos un if que validará si es correcto el presupuesto creará un parrafo nuevo que diga control presupuesto, sino ejecuta que se cree "Nuevo Presupuesto" para que se cargue nuevamente. */}
      {isValidPresupuesto ? (

        <Controlpresupuesto
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto} 
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}

        /> /* A12-Si es correcto ejecutará y podremos ver la pantalla del archivo con la grafica y todo.*/
      ) : (

        <NuevoPresupuesto /* Del componente: const NuevoPresupuesto */
          /* A4-Traemos esos valores para usarlos*/
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto} />
      )}

    </header>
  )
}

export default Header