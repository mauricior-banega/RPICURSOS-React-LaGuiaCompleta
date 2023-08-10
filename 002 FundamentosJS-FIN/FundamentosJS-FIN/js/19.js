/* Cursos propios: RPICURSOS_React_La_Guía_Completa_Hooks_Context_Redux_MERN_+15_Apps

    -Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES
    -Descargado desde Telegram: Canal VisionTech

    Tema: 2-¿Cuánto JavaScript debo saber antes de React Introducción?

    ACLARACIÓN: 
    -El tema nº 1 es teorico por ende no tiene desarrollo en VSC.
    -Estos temas son de repaso para luego aprender React aplicado a cada práctico.
*/

const saldo = 600
const pagar = 500
const tarjeta = true
/*
    || - Al menos una debe cumplirse
    && - Todas deben cumplirse
*/
if(saldo > pagar && tarjeta ) {
    console.log('puedes pagar')
}  else {
    console.log('No, no puedes pagar')
}