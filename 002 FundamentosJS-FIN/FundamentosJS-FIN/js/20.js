/* Cursos propios: RPICURSOS_React_La_Guía_Completa_Hooks_Context_Redux_MERN_+15_Apps

    -Aprende React: Hooks, State, MERN, Next.js, Remix Run, Redux, Tailwind CSS, Prisma y mucho más - CREANDO +15 APPS REALES
    -Descargado desde Telegram: Canal VisionTech

    Tema: 2-¿Cuánto JavaScript debo saber antes de React Introducción?

    ACLARACIÓN: 
    -El tema nº 1 es teorico por ende no tiene desarrollo en VSC.
    -Estos temas son de repaso para luego aprender React aplicado a cada práctico.
*/

// Ternarios: La otra alternativa al IF
const autenticado = true

autenticado ? 
    console.log('usuario autenticado') : 
    console.log('No autenticado, dirigir hacia login')

// Doble ternario
const saldo = 600
const pagar = 800
const tarjeta = false

saldo > pagar ? 
    console.log('Puedes pagar con saldo') : 
    tarjeta ? 
        console.log('Puedes pagar con tarjeta') : 
        console.log('No no puedes pagar')