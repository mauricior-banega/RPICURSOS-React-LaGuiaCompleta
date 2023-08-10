/* Cursos propios: RPICURSOS_React_La_Guía_Completa_Hooks_Context_Redux_MERN_+15_Apps

    -Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES
    -Descargado desde Telegram: Canal VisionTech

    Tema: 2-¿Cuánto JavaScript debo saber antes de React Introducción?

    ACLARACIÓN: 
    -El tema nº 1 es teorico por ende no tiene desarrollo en VSC.
    -Estos temas son de repaso para luego aprender React aplicado a cada práctico.
*/

// Funciones - Function Declaration

// function sumar(numero = 0, numero2 = 0) {
//     console.log( numero + numero2 )
// }

// sumar(10, 20)
// sumar(2, 3)
// sumar(100)
// sumar()

function sumar(numero = 0, numero2 = 0) {

/*     
*  return [numero + numero2, 'HolaMundo'] //Extraemos asi valores de un arreglo
        
     }
 */
   return { //Extraemos asi valores de un objeto
       resultado: numero + numero2, 
       mensaje: 'Hola Mundo'
    }
}

//*const [resultado, holaMundo] = sumar(20, 30) Array Destructuring -> Valores del array (por la posicion)
const {resultado, mensaje} = sumar(20, 30) //* Object Destructuring ->Valores del objeto


//console.log(resultado) Muestra=50
//console.log(holaMundo) Muestra=HolaMundo
//-------------------
console.log(resultado)
console.log(mensaje)
