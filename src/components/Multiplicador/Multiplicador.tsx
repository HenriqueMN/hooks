import { useState } from 'react'
import './Multiplicador.css'

function Contador() {

  const [numero, setNumero] = useState(1);

  return (
    <div className="contador">
        <p>O valor é: {numero}</p>
        <button onClick={() => {setNumero(numero*2)}}>Multiplicar por 2</button>
    </div>
  )
}

export default Contador