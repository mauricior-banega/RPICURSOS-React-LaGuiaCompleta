import { useState } from 'react'
import Header from './components/Header'

/* Aclaraciones: 
1-Que es un prop?: Los props se pasan como atributos a los componentes de React y pueden contener varios tipos de datos, como cadenas, números, booleanos, objetos o incluso funciones. Una vez que un componente recibe un prop, puede acceder y usar los datos dentro de ellos.

TIP: Para crear el snippet en react es: rafce+TAB */


function App() {

  /* A1-Aqui crearemos el useState presupuesto, ya que es un elemento lo usaran otros componentes, por ello lo creamos aqui, archivo principal. Use State lo iniciamos en $0 */

  const [presupuesto, setPresupuesto] = useState(0);

  /* A11-Condicion que revisa si es un presupuesto válido mostrará la pantalla de Gastos, sino para Definir presupuesto (osea la misma).*/

  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  return (
    <div>
      <Header /* Del componente: const Header */

          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          /*A2-Creado esto, lo pasamos al Header*/
          isValidPresupuesto={isValidPresupuesto}

          setIsValidPresupuesto={setIsValidPresupuesto}//A11
      /> 

    </div>
  )
}

export default App

