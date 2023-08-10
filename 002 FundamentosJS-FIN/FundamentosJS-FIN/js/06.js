/* Cursos propios: RPICURSOS_React_La_Guía_Completa_Hooks_Context_Redux_MERN_+15_Apps

    -Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES
    -Descargado desde Telegram: Canal VisionTech

    Tema: 2-¿Cuánto JavaScript debo saber antes de React Introducción?

    ACLARACIÓN: 
    -El tema nº 1 es teorico por ende no tiene desarrollo en VSC.
    -Estos temas son de repaso para luego aprender React aplicado a cada práctico.
*/

// Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium : true
}

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente //Alias: nombreCliente.

//Debido a que no podemos tener 2 variables con el mismo nombre en un mismo archivo, usamos un "Alias" para esa variable repetida.
//Este se asigna a la variable del mismo nombre, seguido de dos puntos y el nombre del alias.

console.log(nombre)
console.log(nombreCliente)

//De esta manera podremos usar la variable llamandola por el alias directamente como vemos en el console.