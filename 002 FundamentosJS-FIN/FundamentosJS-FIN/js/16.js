/* Cursos propios: RPICURSOS_React_La_Guía_Completa_Hooks_Context_Redux_MERN_+15_Apps

    -Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES
    -Descargado desde Telegram: Canal VisionTech

    Tema: 2-¿Cuánto JavaScript debo saber antes de React Introducción?

    ACLARACIÓN: 
    -El tema nº 1 es teorico por ende no tiene desarrollo en VSC.
    -Estos temas son de repaso para luego aprender React aplicado a cada práctico.

    -Hay métodos que mutan el Arreglo u Objeto original (array methods). En REACT es importante que no mute, esto lo podemos ver en la pagina https://doeasitmutate.xyz
*/

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

// Filter
nuevoArray = tecnologias.filter( tech => tech !== 'React')

// Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('GraphQL')

// Some - Devuelve si al menos uno cumple la condición
// const resultado = numeros.some( numero => numero > 15)

// Find - Devuelve el primer elemento que cumpla la condicion
// const resultado = numeros.find( numero => numero > 5)

// Every - Retorna true o false si todos cumplen la condición
// const resultado = numeros.every( numero => numero > 9)

// Reduce - Acumulando en el total
// const resultado = numeros.reduce( (total, numero) => numero + total, 0)

// Filter - Crea un nuevo array en base a una condición
// const resultado = tecnologias.filter( tech => tech === 'Node.js')
// const resultado = numeros.filter( numero => numero !== 10)

tecnologias.forEach( (tech, index) => console.log(index))

// Crear un nuevo array
const arrayMap = tecnologias.map( tech => tech)

console.log(arrayMap)