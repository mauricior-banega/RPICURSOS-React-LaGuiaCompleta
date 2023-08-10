/* Cursos propios: RPICURSOS_React_La_Guía_Completa_Hooks_Context_Redux_MERN_+15_Apps

    -Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES
    -Descargado desde Telegram: Canal VisionTech

    Tema: 2-¿Cuánto JavaScript debo saber antes de React Introducción?

    ACLARACIÓN: 
    -El tema nº 1 es teorico por ende no tiene desarrollo en VSC.
    -Estos temas son de repaso para luego aprender React aplicado a cada práctico.
*/

// Fetch API  - Async Await (Multiples llamados)

const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

const consultarAPI = async () => {

    const inicio = performance.now() //Con este método podemos medir el performance de ejecucion/finalizacion

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    // console.log(resultado)

    // console.log('Iniciando 2da consulta')

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    // console.log(resultado2)

    const fin = performance.now()

    console.log(`Ejecución PRIMER Async: ${fin - inicio} ms`) //Mostramos luegos los tiempos mediante un template string con ambas variables.
}
consultarAPI();


const consultarAPI2 = async () => {

    const inicio = performance.now()

    const [respuesta, respuesta2 ] = await Promise.all([ fetch(url), fetch(url2) ])
    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()

    // console.log(resultado)
    // console.log(resultado2)

    const fin = performance.now()

    console.log(`Ejecución SEGUNDO Async: ${fin - inicio} ms`)
}
consultarAPI2();