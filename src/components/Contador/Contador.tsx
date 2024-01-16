import { useState } from 'react'
import './Contador.css'

function Contador() {

  const [numero, setNumero] = useState(0); // Cria uma variável de estado

  function somarMaisUm(){
    setNumero(numero + 1);
  }

  return (
    <div className="contador">
        <p>O valor é: {numero}</p>
        <button onClick={somarMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador