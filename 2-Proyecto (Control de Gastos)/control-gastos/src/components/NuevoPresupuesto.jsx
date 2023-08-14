/* import React from 'react' No se requiere*/
import { useState } from 'react'
import Mensaje from './Mensaje'


const NuevoPresupuesto = ({presupuesto,
                           setPresupuesto, 
                           setIsValidPresupuesto}) => { 
                            
                            /* A5-Traemos esos valores aca tambien y los extraemos/A11-Extraemos este otro prop de validacion de presupuesto*/


/* A9- Creamos state para indicar el mensaje resultante de la validacion */
const [mensaje, setMensaje] = useState('')


/* A8-Validaremos Presupuesto: Se ejecuta cuando se mande a llamar "submit" */
const handlePresupuesto = (e) => {
    e.preventDefault();

    //console.log("Enviando formulario");
    if(!(presupuesto) || (presupuesto)<0 ) {
        setMensaje('No es un presupuesto válido') //A9/A10
        return
    } 
    
    setMensaje('') /* Desaparecer alerta: En caso de que haya dado error una vez pero se borre ese mje tras cargar un valor válido. */

    //console.log(typeof presupuesto);

    setIsValidPresupuesto(true) //A11-Sino es error será correcto entonces ejecutamos la funcion pasandole true.
}


  return (
    <div className="contenedor-presupuesto contenedor sombra"> {/* onSumbit: Activará a la f() handlePresupuesto */}
        <form onSubmit={handlePresupuesto} className="formulario">
            <div className="campo">
                <label>Definir Presupuesto</label>
                <input 
                    className="nuevo-presupuesto"   
                    type="number"
                    placeholder="Añade tu Presupuesto"
                    value={presupuesto} /* A6-Hacemos llegar el valor del campo, será 0 inicialmente */
                    onChange={ e => setPresupuesto(Number(e.target.value))}
                    /* A7-Precisamos que si el valor cambia, lo detecte y ejecute la funcion de setPresupuesto. Y para que extraeiga el valor de lo que usuario escribe definimos: e => setPresupuesto(e.target.value). Este valor guardará en setPresupuesto y se enviará a App.jsx. Podremos verlo en la consola (hook: State:2000). Convertimos el resultado en nº porque lo que sale es string*/
                />
            </div>

            <input type="submit" value="Añadir" />

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} {/*A10-Agregamos el componente de mje que contendrá el mensaje y se guardará en la declaracion children del componente Mensaje.jsx*/}
        </form>
    </div>
  )
}

export default NuevoPresupuesto