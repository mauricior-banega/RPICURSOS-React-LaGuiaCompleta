/* Cursos propios: RPICURSOS_React_La_Guía_Completa_Hooks_Context_Redux_MERN_+15_Apps

    -Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES
    -Descargado desde Telegram: Canal VisionTech

    Tema: 2-¿Cuánto JavaScript debo saber antes de React Introducción?

    ACLARACIÓN: 
    -El tema nº 1 es teorico por ende no tiene desarrollo en VSC.
    -Estos temas son de repaso para luego aprender React aplicado a cada práctico.
*/

// Unir 2 objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
const cliente = {
    nombre: 'Juan',
    premium : true
}

// const nuevoObjeto = Object.assign(producto, cliente) NO SIRVE EN ESTE CASO
// Porque modifica el valor de nombre al de "Juan" y "Tablet" se pierde. Es decir se modifica el objeto original.

//Pero usando un Spread Operator: El operador de propagación o "spread operator" es una nueva adición al conjunto de operadores en JavaScript ES6 . Toma un iterable (por ejemplo, una matriz) y lo expande en elementos individuales. El operador de propagación se usa comúnmente para hacer copias profundas de objetos JS.

/*  Si hacemos esto, modifica los objetos originales pero pierde el valor de nombre, por ello deberá definirse como esta debajo es esta.
    const nuevoObjeto2 = { 
    producto: {...producto},
    cliente: {...cliente}
}
 */

const nuevoObjeto2 = { 
    producto: {...producto}, //Crea una copia de cada objeto 
    cliente: {...cliente}
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)