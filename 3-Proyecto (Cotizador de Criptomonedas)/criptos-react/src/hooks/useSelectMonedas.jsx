/* Creamos un Custom Hook: Es un Hook, parecido a un state pero sin un return, es una f() propiamente, pudiendo retornar un arreglo u objeto como lo establezcamos. En este ejemplo tiene dentro una funsion de la que es retornada como arreglo.
-Para trabajar con ella debe ser extraida como aparece en Formulario.jsx (linea 29)*/

import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label `
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700px;
    margin: 15px 0;
`

const Select = styled.select `
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;

`


const useSelectMonedas = (label, opciones) => {


    const [state, setState] = useState('')
   
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e=>setState(e.target.value)}
            >
                <option value="">Seleccione</option>

                {opciones.map(opcion=>(
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}

                    </option>
                ))}

            </Select>
        </>
    )

    return [state, SelectMonedas]
}

export default useSelectMonedas