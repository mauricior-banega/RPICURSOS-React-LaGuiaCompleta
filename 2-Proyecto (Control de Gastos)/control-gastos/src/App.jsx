import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filtros from './components/Filtros'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers' //No requerimos el nombre del archivo, porque se llama index.js
import IconoNuevoGasto from './img/nuevo-gasto.svg' //Importamos imagen de + svg.


/* Aclaraciones: 
1-Que es un prop?: Los props se pasan como atributos a los componentes de React y pueden contener varios tipos de datos, como cadenas, números, booleanos, objetos o incluso funciones. Una vez que un componente recibe un prop, puede acceder y usar los datos dentro de ellos.

TIP: Para crear el snippet en react es: rafce+TAB */


function App() {

  /* A19-Creamos este state que alojara el objeto (como arreglo), creado en Modal (linea 60)  */
  //-Si existe gastos en LS lo convertimos el String gastos en un arreglo con JSON.parse. Sino que sea un arreglo vacio.

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  /* A1-Aqui crearemos el useState presupuesto, ya que es un elemento lo usaran otros componentes, por ello lo creamos aqui, archivo principal. Use State lo iniciamos en $0 */

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  ) //Antes useState estaba en 0, ahora le definimos que tenga el valor de presupuesto que aloja el localStorage, sino lo tiene que sea cero.

  /* A11-Condicion que revisa si es un presupuesto válido mostrará la pantalla de Gastos, sino para Definir presupuesto (osea la misma).*/

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  /* A13/A14-Mediante el evento onClick llamamos a esta funcion que registr{a un nuevo state modal&setModal, para que reaccione ante el click, ya que lo siguiente será crear la nueva ventana modal en un nuevo componente que mostrará el NUEVO GASTO (Modal.jsx) */

  const [modal, setModal] = useState(false)


  /* A15-Una vez que haya aplicado los 3 segundos aplicará las clases css, aplicando el sgte useState. */
  const [animarModal, setAnimarModal] = useState(false)


  /* A23-Creamos este state para editar el gasto */
  const [gastoEditar, setGastoEditar] = useState({})

  /* State de filtro: Inicia como string vacio */
  const [filtro, setFiltro] = useState('')

   /* State de gastosFiltrados: Inicia como arreglo vacio */
   const [gastosFiltrados, setGastosFiltrados] = useState([])


 //------------------------useEffects---------------------------


 /* A23-useEffect se activará cuando halla cambios en gastoEditar. Por defecto se ejecutará una sola vez y luego las que correspondan haremos que se ejecute sin esa vez, osea unicamente si gastoEditar tiene algun valor al menos (osea mayor a 0). */

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0 ) {
      //console.log('Gasto Editar tiene algo')

      setModal(true)
      

    /* A15-Agregamos las clases css para que el formulario se puedan ver los nuevos gastos se aplique (luego de 3 segundos) */
    setTimeout(() => {
      //console.log('Animando modal...')
      setAnimarModal(true)
    }, 500);

    }
  },[gastoEditar])
  


//Local Storage ------------------------------------------------

//Se ejecutará 1 sola vez cuando cambie presupuesto
useEffect(()=>{

  //console.log(presupuesto)
  localStorage.setItem('presupuesto', presupuesto ?? 0)

},[presupuesto])


//Se ejecutará 1 sola vez cuando cambie el gasto: 
//Como no se puede almacenar en LS (local storage) un arreglo, lo convertimos a un string mediante JSON. Sino hay gastos sera un arreglo vacio.

useEffect(()=>{

  //console.log(presupuesto)
  localStorage.setItem('gastos', JSON.stringify(gastos) ?? [] )

},[gastos])


//Se ejecutará cuando sea seleccionado algun filtro
useEffect(()=>{
  if(filtro) {
    //console.log('filtrando...', filtro)

    const gastosFiltrados = gastos.filter(gasto =>gasto.categoria === filtro) 

    //console.log(gastosFiltrados)
    setGastosFiltrados(gastosFiltrados)

  }
},[filtro]);


//Se ejecutará 1 sola vez cuando cargue la aplicación
useEffect(()=>{

  const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

  if(presupuestoLS > 0){
    setIsValidPresupuesto(true)
  }


},[])

//--------------------------------------------------------------

  
//Mandar a llamar el Modal (handleNuevoGasto)

  const handleNuevoGasto = () => {
    //console.log('Diste click para agregar un nuevo gasto')
    setModal(true)
    setGastoEditar({})

    /* A15-Agregamos las clases css para que el formulario se puedan ver los nuevos gastos se aplique (luego de 3 segundos) */
    setTimeout(() => {
      //console.log('Animando modal...')
      setAnimarModal(true)
    }, 500);

  }


  /* A19-Ya tenemos el objeto de gastos en App.jsx y lo mostramos en el state que alojara el objeto. Tambien le asignamos un ID único que lo creamos en el archivo index.js en la carpeta de ayuda "helpers" en src*/

  const guardarGasto = gasto => {
    //console.log(gasto)

    if(gasto.id) {
      //Actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState )//Retorna un nuevo array en esta variable.Basicamente recorremos todos los gastos (usando .map que los recorre), y compara si el gastoState es igual a alguno de los gastos (mendiante  el igual ID). Si lo encuentra reemplaza el valor de gastoState (gasto actualizado) y lo declara como gasto final (gasto); y sino que muestre todos los demas tambien. 

      setGastos(gastosActualizados);
      setGastoEditar({})

    } else {
      //Nuevo Gasto: Pasamos (gasto.id|gasto.fecha|setGastos acá) y comento los anteriores

      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }

    //gasto.id = generarId(); //Acá pasamos el id como nuevo valor del objeto.

    //gasto.fecha = Date.now(); //A21:Pasamos la fecha en la que cargamos el gasto (objeto). Pero veremos en Components Chrome que muestra puros numeros (milisegundos transcurridos desde el 1 Ene de 1970), es una convencion. Hay que farle formato

    //setGastos([...gastos, gasto])


    setAnimarModal(false) 

    setTimeout(() => {
        
        setModal(false)
      }, 500);
  }



  const eliminarGasto = id => {
    //console.log('eliminando',id)

    const gastosActualizados = gastos.filter(gasto=>gasto.id!==id);

    //console.log(gastosActualizados)

    setGastos(gastosActualizados);

  }



  return (


    /* A20-Aclaracion: Si cargamos más de 3 gastos, veremos que el Modal de Gastos queda arriba y de los gastos enlistados debajo (queda mal), explica que es porque hay que fijarlo. Por eso agregaremos un if que pregunte si es verdadero el Modal, si lo es que lo fije (agregando clases css "fijar"), sino que no lo agregue: Ej:            className={modal ? 'fijar' : ''
    -Sino tambien lo podemos definir asi con el mismo resultado:
    Ej aplicado:  className={modal && 'fijar'}
    
    */
    <div className={modal ? 'fijar' : ''}>
      <Header /* Del componente: const Header */
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          /*A2-Creado esto, lo pasamos al Header*/
          isValidPresupuesto={isValidPresupuesto}

          setIsValidPresupuesto={setIsValidPresupuesto}//A11
      /> 

      {/* A13-Creamos el sigo + para agregar nuevos gastos. Se ejecutará solo si isValidPresupuesto es true. */}

      {isValidPresupuesto && (
        <> 
            <main>
            
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />

               {/* A20-Mostrar los gastos en el archivo: Creamos el elemento Listado Gastos, importamos y lo usamos aqui. Ademas traemos el arreglo de gastos */}

              <ListadoGastos
                gastos={gastos}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
                filtro={filtro}
                gastosFiltrados={gastosFiltrados}
              />

            </main>

              <div className="nuevo-gasto">

                    <img 
                          src={IconoNuevoGasto} 
                          alt="Icono Nuevo Gasto"
                          onClick={handleNuevoGasto}
                    />

              </div>
        </>
      )}
      
      {modal && <Modal
                    setModal={setModal}
                    animarModal={animarModal} //A15-Pasamos el state en true, que enviaremos a Modal para que lo reciba y trabaje con el.
                    setAnimarModal={setAnimarModal} //A16-Pasamos tambien este hook. Sucede que lo necesitaremos para que aplique la clase de animar cada vez y no una sola vez. Para ello necesitaremos volver los valores de este hook a (false) y lo haremos en Moda.jsx.
                    guardarGasto={guardarGasto}
                    gastoEditar={gastoEditar}
                    setGastoEditar={setGastoEditar}
                />}

    </div>
  )
}

export default App

