import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'


const InputSubmit = styled.input`
    background-color: #9497FF;
    border:none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }

`

const Formulario = ({setMonedas}) => {

    
    const [criptos, setCriptos] = useState([]);
    //Extraemos en un arreglo la f() SelectMonedas guardada en el arreglo que retorna useSelectMonedas, indicando que es a su vez una f(). Luego llamamos a la funcion extraida 

    //moneda y SelectMonedas son nombres intuitivos que hacen referencia a lo que devuelven pero podrian haber tenido cualquier nombre. recordemos que los datos se guardan en referencia a la posicion del arreglo.

    const [error, setError] = useState(false);

    const [ moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)

    const [ criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos)


    useEffect(()=>{

        const consultarAPI = async ()=>{

           const url ="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
           
           const respuesta = await fetch(url)
           const resultado = await respuesta.json()

           //console.log(resultado.Data)

           const arrayCriptos = resultado.Data.map(cripto=>{

            const objeto = {
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName
            }
                return objeto

            //console.log(cripto.CoinInfo.Name)
            //console.log(cripto.CoinInfo.FullName)
            //console.log(objeto)
            
            
           })

           //console.log(arrayCriptos)
           setCriptos(arrayCriptos)

        }

        consultarAPI();

    },[])



//Métodos para validar form

    const handleSubmit = e => {
        e.preventDefault()

        //console.log('Enviando formulario...')
        //console.log(moneda)
        //console.log(criptomoneda)

        if([moneda,criptomoneda].includes('')){
            //console.log('Error...')

            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
        
    }






  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form 
            onSubmit={handleSubmit} //Validamos formulario   
        >
            <SelectMonedas/>
            <SelectCriptomoneda/>

            

            <InputSubmit 
                type="submit" 
                value="Cotizar" 
            />
        </form>
    </>
  )
}

export default Formulario