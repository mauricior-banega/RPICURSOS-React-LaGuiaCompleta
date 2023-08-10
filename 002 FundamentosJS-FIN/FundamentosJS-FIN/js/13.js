/* Cursos propios: RPICURSOS_React_La_Guía_Completa_Hooks_Context_Redux_MERN_+15_Apps

    -Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES
    -Descargado desde Telegram: Canal VisionTech

    Tema: 2-¿Cuánto JavaScript debo saber antes de React Introducción?

    ACLARACIÓN: 
    -El tema nº 1 es teorico por ende no tiene desarrollo en VSC.
    -Estos temas son de repaso para luego aprender React aplicado a cada práctico.
*/

/* Funciones - Function Expression 
-Es cuando asignamos una variable a una funcion. Esta si o si debe ser llamada posterior a la declaracion de la funcion (a diferencia de la funcion de Declaracion que se puede llamar desde cualquier parte del archivo). Esto ocurre porque la de expresion como es una variable no se ejecuta en 1era fase que es la de creacion sino en la 2da, la de ejecucion.
*/


const sumar = function(numero = 0, numero2 = 0) {
    return numero + numero2
}

//const resultado = sumar(30, 20)
const resultado = sumar(30)
console.log(resultado)