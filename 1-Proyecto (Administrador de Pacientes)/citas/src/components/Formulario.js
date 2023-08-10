/*  "useState" es un hook en React que te permite agregar estado a tus componentes funcionales.

En React, los componentes funcionales son una forma de definir componentes utilizando funciones en lugar de clases. Antes de la introducción de los hooks en React, los componentes funcionales no tenían estado, lo que significaba que no podían mantener y actualizar datos internos.

El hook "useState" resuelve este problema y te permite agregar estado a tus componentes funcionales, Ejemplo de la web:

import React, { useState } from 'react';

function MiComponente() {
  // La función useState devuelve un array con dos elementos: el estado actual y una función para actualizarlo.
  const [estado, setEstado] = useState(valorInicial);

  // ...
  // Código de tu componente donde puedes usar el estado y la función para actualizarlo.
  // ...

  return (
    // JSX de tu componente
  );
}
En el código anterior, "estado" es la variable que representa el estado actual y "setEstado" es la función que te permite actualizar ese estado. "valorInicial" es el valor que quieres asignar como estado inicial cuando se renderiza el componente por primera vez.

Cada vez que llamas a "setEstado(valor)", React actualizará automáticamente el componente y mostrará el nuevo estado en la interfaz de usuario.

*/

/* ACLARACIONES: 
-Sabemos que para crear un ID si usamos dbo este la asigna automaticamente, pero como no la usaremos sino que guardaremos todo de forma local trabajemos importando una libreria de id's. Podemos usar "uuid" (libreria de id`s largas y se instala con: npm i uuid) o "shortid" (libreria de id`s cortas y se instala con: npm i shortid).
-Se instala mendiante los comandos de Terminal (VSC)
-Para que se haga efectiva la importacion, debemos antes ejecutar el comando npm i uuid */




import React, {Fragment, useState} from 'react';
//import uuid from 'uuid/v4'; /* Importamos la libreria que instalamos, e indicamos la versión nº 4 */
import { v4 as uuidv4 } from 'uuid';


import PropTypes from 'prop-types';
//Es una forma que se usa para documentar nuestros componentes; por ejemplo, vemos <Formulario crearCita={crearCita} /> ; en formulario le pasamos creatCita pero otra persona que vea el codigo no sabra si eso ejecuta un string/arreglo u objeto; entonces hay que aclararlo de alguna forma y esta es. Un checkeo de componente. Aqui realizamos el import y al ultimo (antes de realizar el export default Formulario;) creamos el método indicando que por ejemplo crearCita va a ser una función (.func) y sera obligatoria (isRquired). Lo haremos para Cita.js también para "cita" que es un objeto y "eliminarCita" que es una funcion.







const Formulario = ({crearCita}) => { 
    /*crearCita es un props que viene desde App, aplicamos desctructuring a esa funcion. Otra forma de haberlo creado es si pasabamos asi:

    const Formulario = (props) => {
        props.crearCita
    }

    */
    //STATE "CITA"

    const [cita, actualizarCita] = useState({ //useState: Se expresa 1º con el nombre del State y 2º el que lo modifica, ambas son funciones. Usaremos varios State en proyectos de react y no esta mal usarlos libremente.

        //Valores iniciales: En este caso, objeto con propiedades vacias.En otros casos puede ser Array vacio etc.

        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
        
    });

    //STATE PARA LOS ERRORES
    const [error, actualizarError] = useState(false)

    //Funcion que se ejecuta cada vez que el usuario escribe en el input.

    const actualizarState = e => {

        //console.log('Escribiendo...');
        //console.log(e.target.name);
        //console.log(e.target.value);

        //-Entonces guardaremos lo que el usuario escribe, mapeado para cada imput y creando una copia (...cita) para que no se borren las propiedades que vallamos cargando. Creamos actualizarCita (que es una funcion y objeto a la vez)

        actualizarCita({
            ...cita,
            //Array descruturing
            [e.target.name] : e.target.value
        })


    }

    //Extraer los valores: Que se guardaran mediante el value declarado en cada input.

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario presiona agregar cita

    const submitCita = e => {
        //alert('Enviando')
        e.preventDefault();

        //console.log('Enviando form')

        //* Validar: Que los campos no esten vacios
            //.trim: Controlador de espacion en blanco en inicio/fin.

        if(mascota.trim() ===''|| propietario.trim() ===''|| fecha.trim() ===''||hora.trim() ===''|| sintomas.trim() ==='') { 

            //console.log('Hay un error');
            actualizarError(true);

            return; //corta la ejecucion del codigo, por eso no muestra por consola "Agregando...", sino lo mostraria. Quiere decir que apesar del error en la validacion seguira funcionando de todas maneras las otras ejecuciones cosa que no deseamos que suceda.
        }   

        //console.log('Agregando...');

        //* Eliminar el mensaje de error previo (si se mostró antes digamos)
        actualizarError(false);

        //* Asignar ID
        //cita.id=20;
        cita.id=uuidv4();
        //console.log(cita);


        //* Crear la cita
        crearCita(cita);

        //* Reiniciar el Form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return (
        <Fragment>
                <h2>Crear Cita</h2>

                {/* ACLARACIONES: 1) Con esta sintaxis se comenta en React. 2)Aqui aplicamos el operador condicional (ternario), de manera que si es cierto muestre en el HTML un <p> con el error, y sino que no haga nada (null) la acción. */}

                {error ? <p className="alerta-error">Todos los campos son obligatorios</p>  : null}

                <form
                    onSubmit={submitCita}
                >
                    <label>Nombre Mascota</label>
                    <input
                        type="text"
                        name="mascota"
                        className="u-full-width"
                        placeholder="Nombre Mascota"
                        onChange={actualizarState} //Evento "onChange" de React que captura lo que se carga en el input.
                        value={mascota} 
                    />

                    <label>Nombre Dueño</label>
                    <input
                        type="text"
                        name="propietario"
                        className="u-full-width"
                        placeholder="Nombre Dueño de la mascota"
                        onChange={actualizarState}
                        value={propietario} 
                    />

                    <label>Fecha</label>
                    <input
                        type="date"
                        name="fecha"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={fecha} 
                    />

                    <label>Hora</label>
                    <input
                        type="time"
                        name="hora"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={hora} 
                    />

                    <label>Sintoma</label>
                    <textarea
                        className="u-full-width"
                        name="sintomas"
                        onChange={actualizarState}
                        value={sintomas} 
                    ></textarea>

                    <button
                        type="submit"
                        className="u-full-width button-primary"
                    >Agregar Cita</button>    
                </form>
        </Fragment>
    );
}


Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;