/* Cursos propios: RPICURSOS_React_La_Guía_Completa_Hooks_Context_Redux_MERN_+15_Apps

    -Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES
    -Descargado desde Telegram: Canal VisionTech

    Tema: 2-¿Cuánto JavaScript debo saber antes de React Introducción?

    ACLARACIÓN: 
    -El tema nº 1 es teorico por ende no tiene desarrollo en VSC.
    -Estos temas son de repaso para luego aprender React aplicado a cada práctico.
*/


// Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log( producto.nombre )
console.log( producto.precio )
console.log( producto.disponible )

// Destructuring
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhacement: Introduce variablers dentro de un objeto
const autenticado2 = true
const usuario2 = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)