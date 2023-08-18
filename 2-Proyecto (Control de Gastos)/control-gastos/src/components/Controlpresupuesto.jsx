import {useState, useEffect} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Controlpresupuesto = ({
                            gastos, 
                            setGastos, 
                            presupuesto, 
                            setPresupuesto,
                            setIsValidPresupuesto
                            }) => { 
                                /* A12-Traemos el valor de presupuesto para usarlo (linea 11) | A21-Ahora el de gastos */   

    /* A21-Creamos los states para guardar lo gastado y disponible que ejecutará "useEffect" para realizar el calculo y mostrarlo.
    */

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(()=> {

        const totalGastado = gastos.reduce( (total, gasto) => 
        gasto.cantidad + total, 0);

        const totalDisponible = presupuesto - totalGastado;

        //Calcular el porcentaje gastado
        const nuevoPorcentaje = ((( (presupuesto- totalDisponible) / presupuesto ) * 100)).toFixed(2);

        

        //console.log(totalDisponible)
        setDisponible(totalDisponible)

        //console.log(totalGastado)
        setGastado(totalGastado)

        setTimeout(()=> {
            setPorcentaje(nuevoPorcentaje)
        },1500);

    }, [gastos])

    /* A13-Daremos formato para que el n| del presupuesto se muestre con comas decimales */
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency:'USD'
        })
    }



    //Funcion para resetear la App

    const handleResetApp = () => {
        //console.log('Resetear App')

        //Crearemos la pregunta de si esta seguro de Resetearla ya que puede haberlo hecho sin querer usando el método de JS (no es solo de React) para confirmar o no una operación.

        const resultado = confirm('Deseas reiniciar los presupuestos y los gastos?')

        if(resultado)
        {
            //console.log('Si')
            setGastos([]);
            setPresupuesto(0)
            setIsValidPresupuesto(false)

        } /* else {

            console.log('No')
        }
          */
    }



  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
                })}

                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
        </div>
        <div className="contenido-presupuesto">

            <button className="reset-app"
                    type="button"
                    onClick={handleResetApp}
            > 
                Resetear App
            </button>

            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>

            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>

        </div>
    </div>
  )
}

export default Controlpresupuesto