/* A14-Creamos el componente para que muestre los nuevos gastos a agregar. */


import {useState, useEffect} from 'react'

import Mensaje from './Mensaje'//A18

import CerrarBtn from '../img/cerrar.svg' //Importamos imagen de X svg


const Modal = ({setModal, 
                animarModal, 
                setAnimarModal, 
                guardarGasto, 
                gastoEditar,
                setGastoEditar
              }) => { //A15-Recibe animarModal de App | A19-Recibe guardarGasto

    const [mensaje, setMensaje] = useState('')

    /* A17-Creamos el state que guardará los valores del input "nombre","cantidad y categoria" de los valores de estos mediante su value y que extraerá ese valor mediante el evento onChange.*/

    const [nombre, setNombre]= useState('')
    const [cantidad, setCantidad]= useState('')
    const [categoria, setCategoria]= useState('')
    const [fecha, setFecha]= useState('')
    const [id, setId] = useState('')

    useEffect(()=>{
        //console.log('Componente listo')

        if(Object.keys(gastoEditar).length > 0 ) {
            //console.log('Gasto Editar tiene algo')
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
          }

    }, []);          


    const ocultarModal = () => {

        
        setAnimarModal(false) //A16-Quitamos el true de este hook, para que anime cada vez que toquemos carguemos un nuevo gasto y no solo en el primero.

        setGastoEditar({})

        /* A16-Aplicamos el mismo delay para quitar el componente Modal, eso hará que volvamos a la pantalla del gráfico de presupuesto. */
        setTimeout(() => {
        //console.log('Animando modal...')
        setModal(false)
      }, 500);

    }  

    /* A18-Esta funcion se ejecuta cuando damos a onSubmit del formulario. Lo que realizar{a es validar los valores para luego ser guardados o no, si es que no pasan. */
    const handleSubmit = e => {

            e.preventDefault(); //Prevenimos el envio del formulario para realziar las validaciones

            //console.log('Enviando formulario')

            //A18-Creamos un arreglo con los valores de cada uno. Incluimos .includes (metodo de los arreglos), de esa manera preguntamos si alguno de estos esta vacio.

            if([nombre, cantidad, categoria].includes('')) {
                
                //console.log('Fallo la validación')
                setMensaje('Todos los campos son obligatorios') //Valor seteado del mensaje.

                setTimeout(() => {
                    setMensaje('') //Luego de 3s, elimina el state de error
                }, 3000);
                
                return;

            }

            //A19-Si pasamos la validacion (este punto) entonces guardamos los valores como objeto, de la sgte manera.
            guardarGasto({nombre, cantidad, categoria, id, fecha})

    }


    return (

        <div className="modal">
    
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn} 
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>
    
            {/* A15-Agregamos el formulario: Mediante la agregacion de la clase ya creada .formulario y mediante ternario verificar si animarModal es true agregar .animar; sino la clase .cerrar (agrega de nuevo opacity a 0). Recordemos que ya tiene la clase .modal (linea 24).*/}    
    
            <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" :'cerrar'}`}
            > 
                <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} {/* A18-Cuando mensaje tenga algo, entonces vamos a cargar el componente de Mensaje y como tiene children, lo podemos cerrar y dentro colocarle el mensaje (que se alojará en children). Tambien tomará tipo, que lo declaramos como "error". Este mensaje de error entonces se mostrará si alguno de los campos esta vacio. Este Mensaje es un div que tieje consigo la clase css "alerta" y le pasamos como dije el tipo y el mensaje.*/}

            {/* A16-Terminamos de crear el formulario. Luego de esto cargaremos los datos mediante un state */}
                    <div className="campo">
                        <label htmlFor="nombre">Nombre Gasto</label>
                        <input 
                            id="nombre"
                            type="text"
                            placeholder="Añade el nombre del gasto"
                            value={nombre} //A17
                            onChange={ e=>setNombre(e.target.value)}//A17
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="cantidad">Cantidad</label>
                        <input 
                            id="cantidad"
                            type="number"
                            placeholder="Añade la cantidad del gasto. Ej: 300"
                            value={cantidad} //A17
                            onChange={ e=>setCantidad(Number(e.target.value))} //A17
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="categoria">Categoría</label>

                        <select 
                            id="categoria"
                            value={categoria} //A17
                            onChange={e=> setCategoria(e.target.value)}//A17    
                        >
                            <option value="">-- Seleccione --</option>
                            <option value="ahorro">-- Ahorro --</option>
                            <option value="comida">Comida</option>
                            <option value="casa">Casa</option>
                            <option value="gastos">Gastos Varios</option>
                            <option value="ocio">Ocio</option>
                            <option value="salud">Salud</option>
                            <option value="suscripciones">Suscripciones</option>
                        </select>
                    </div>

                    <input 
                        type="submit"
                        value={gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"}
                    />

            </form>  
    
        </div>
      )

}








export default Modal