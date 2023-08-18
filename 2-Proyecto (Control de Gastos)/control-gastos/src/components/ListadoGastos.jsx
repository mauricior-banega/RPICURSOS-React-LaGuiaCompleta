import React from 'react'
import Gasto from './Gasto'

/* A20-Creamos el componente que mostrará los gastos y que se usará en App. Pasamos el valor del array gastos para recorrerlo y mostrarlos todos ademas de validarlos. */
const ListadoGastos = ({gastos, 
                        setGastoEditar, 
                        eliminarGasto,
                        filtro,
                        gastosFiltrados
                       }) => {
  return (
    <div className="listado-gastos contenedor">
       
        { //Estos corchetes indican que dentro va código JS: Aqui aplicaremos los datos filtrados en la interfaz; de la que mostrará (sin eliminar) los datos de los gastos segun categoria (osea gastosFiltrados). Sino existe un filtro pues los mostrará a todos.

          filtro ? (  //Si hay filtro iteramos en los gastos filtrados mostrando el componente

          <>{/* Esto es un Fragment */}
          
                      <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esta categoría'}</h2>

                        { gastosFiltrados.map( gasto =>(
                            <Gasto  

                                key={gasto.id}
                                gasto={gasto}
                                setGastoEditar={setGastoEditar}
                                eliminarGasto={eliminarGasto}

                            /> 
                      ) )}

          </>

                    ) : ( //Si NO hay filtro iteramos en los gastos no filtrados
                          <>
                              <h2>{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>

                                {/* Encerramos entre {} esto tambien para indicar que es JS y no un componente comoa antes */}

                                {gastos.map( gasto=>(

                                  <Gasto
                                      key={gasto.id}
                                      gasto={gasto}
                                      setGastoEditar={setGastoEditar}
                                      eliminarGasto={eliminarGasto}
                                  /> 

                                ) )}  
                          </>

                        )
        }


        {/* ().map): Se ejecutara al menos una vez por cada objeto sino hay ninguno no se ejecuta.
        A20-Pasamos el componente Gastos con los prop (key/gasto)*/}

        
    </div>
  )
}

export default ListadoGastos