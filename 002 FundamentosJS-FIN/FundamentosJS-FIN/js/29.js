/* Cursos propios: RPICURSOS_React_La_Guía_Completa_Hooks_Context_Redux_MERN_+15_Apps

    -Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES
    -Descargado desde Telegram: Canal VisionTech

    Tema: 2-¿Cuánto JavaScript debo saber antes de React Introducción?

    ACLARACIÓN: 
    -El tema nº 1 es teorico por ende no tiene desarrollo en VSC.
    -Estos temas son de repaso para luego aprender React aplicado a cada práctico.
*/

// Fetch API: Basicamente es el nuevo AJAX, lo que anteriormente se llamaba XML HTTP REQUEST.

//Montaremos una API ya creada (para no perder tiempo creando una manualmente) desde {JSON}Place Holder (jsonplaceholder.typicode.com). Se scrolleamos hacia abajo veremos algunos recursos (Resources), posteos, comentarios etc para utilizar. Estos tendran JSON's con inf para utilizar. Para consumir esa API creamos una variable con la url de la web /comments que es lo que usaremos (500 comentarios).

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = () => {
    fetch(url)
        .then( respuesta => respuesta.json())
        .then( resultado => {
            resultado.forEach( comentario => {
                console.log(comentario)
            })
        })
}
consultarAPI();