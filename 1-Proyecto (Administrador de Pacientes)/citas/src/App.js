/* Nosotros añadiremos nuestro propio CSS al proyecto, lo que quitaremos todo lo agregado por defecto en React.

-Quitaremos estas declaraciones del JS:

import logo from './logo.svg';
import './App.css'; 

-Tambien los archivos en el pyoyecto: App.css, App.test.js, logo.svg, index.css. Tambien quitamos todo el contenido del div dentro del return de App() en este documento.

-Tambien borramos el contenido que venia en inde.css y copiamos el gist (ruta de Git). Desde alli añadiremos el css ya creado y listo. Este esta en el block de notas del practico que dejare aqui tmb:

050 Enlace-a-Github
https://github.com/juanpablogdl/citas_react

051 Enlace-a-Gist
https://gist.github.com/juanpablogdl/8441be8cf7ab171871c20e2caae53265

ACLARACION: Los Gist ya no existen, la ruta actual fue creada hace 4 años y es: https://gist.github.com/codigoconjuan/8441be8cf7ab171871c20e2caae53265

1-No es posible retornar 2 elementos, por ello es que creamos un {Fragment} que declararemos en el return e import.

[Repasando]: Esto de mezclar JS con HTML se llama JSX (JavaScript XML) es una extensión sintáctica para JavaScript que permite a los desarrolladores escribir código similar al HTML dentro de un archivo JavaScript. Fue desarrollada por Meta (antes Facebook).

*/

import React, {Fragment,useEffect,useState} from 'react';
import Formulario from './components/Formulario'; //Tramos los valores de Formulario.js mediante esta linea y definiendoi la misma en este archivo: <Formulario/> (linea 37)

import Cita from './components/Cita';





function App() {

//*Citas en local storage: La instruccion localStorage.getItem('citas') nos devuelve si en el navegador hay algo en Local Storage. Si lo ejecutamos en consola mostrará null de hecho. Le agregamos JSON.parse, para que transforme los valores del arreglo en String.-
let citasIniciales = JSON.parse(localStorage.getItem('citas'));
if(!citasIniciales) {
  
  citasIniciales = [];
}



//*Arreglo de citas
const [citas, guardarCitas] = useState(citasIniciales);


//* Use Effect: Sirve para realizar ciertas operaciones cuando el state cambia; es decir en este caso cada vez que el arreglo de citas se vea modificado (creado nuevo o eliminado) este método se ejecuta cada vez, se ejecuta cuando algo cambia. Es como el ContentLoaded de JS. Para que sea funcional hay que pasarle el arreglo del useState que vallamos a usar en este caso "cita", y lo que querramos que haga el useEffect.

useEffect ( ()=> {

  //Volvemos a declarar aca la sgte linea. Otra forma podria haber sino no traerla y la linea 66 declarar asi: }, [citas, citasIniciales] );
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  //console.log('Documento listo o algo paso con las citas');
  if(citasIniciales) {

    localStorage.setItem('citas', JSON.stringify(citas))
    
  } else {

    localStorage.setItem('citas', JSON.stringify([]));
  }
}, [citas] );


//*Función que tome las citas actuales y agregue la nueva
const crearCita = cita => {

  guardarCitas([...citas, cita ]);
//console.log(cita);
}

//*Función que elimina una cita por su ID
const eliminarCita = id => {
  //console.log(id);

  //Filter itera (y devuelve un arreglo) sobre citas, buscando el del ID indicado pero este metodo filtra eliminando todos los que no coincidan con la busqueda (id). Por ello se deberá expresar como "distinto a =" al ID para que mantenga todos menos el que coincida y sea el elegido para borrar.
  const nuevasCitas = citas.filter(cita => cita.id !== id)

  guardarCitas(nuevasCitas);
}

//* Mensaje condicional
const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'


  return (
/* 1 */

      <Fragment> 
          <h1>Administrador de Pacientes</h1>

          <div className="container">
              <div className="row">
                  <div className="one-half column">
                      <Formulario
                        crearCita={crearCita}
                      /> 
                  </div>
                  <div className="one-half column">
                    <h2>{titulo}</h2>
                    {citas.map(cita =>( //Iteramos

                      <Cita
                        key={cita.id} //Siempre que iteramos tenemos que pasarle el "key" en React.
                        cita={cita} //pasamos la info de lo que iteramos
                        eliminarCita={eliminarCita} 
                      />

                    ))}
                  </div>
              </div>
          </div>
      </Fragment>
    
  );
}

export default App;
